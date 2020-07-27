using Mapster;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Win32;
using Newtonsoft.Json;
using OfficeOpenXml;
using OfficeOpenXml.Table;
using Serenity;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Services;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.InteropServices;
using System.Text;
using Yaxie.Common.Entities;
using MyRepository = Yaxie.Common.Repositories.ImportWizardRepository;
using MyRow = Yaxie.Common.Entities.ImportWizardRow;

namespace Yaxie.Common.Endpoints
{
    [Route("Services/Common/ImportWizard/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ImportWizardController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        public ImportWizardBulkActionResponse ImportWizardBulkAction(IUnitOfWork uow, ImportWizardBulkActionRequest request)
        {
            request.CheckNotNull();
            ImportWizardBulkActionResponse response = new ImportWizardBulkActionResponse
            {
                ImportWizardHistoryList = new List<int>()
            };
            foreach (var importWizardId in request.ImportWizardIdList)
            {
                response.ImportWizardHistoryList = ExcelImport(importWizardId);
            }
            return response;
        }


        public ListResponse<TableFieldInfo> GetTableHeaders(GetTableHeaderListRequest request)
        {
            ListResponse<TableFieldInfo> response = new ListResponse<TableFieldInfo>();
            string entityName = request.TableName;

            Type rowType = Type.GetType(entityName);
            if (rowType == null)
                throw new ArgumentOutOfRangeException("Table not found");
            //var LocalServers = GetLocalSqlServerInstanceNames();
            //var RemoteServers = GetRemoteSqlServerInstanceNames();
            Row tableRow = (Row)Activator.CreateInstance(rowType);
            var tableFields = tableRow.GetTableFields().ToList();
            List<TableFieldInfo> tableFieldInfoList = new List<TableFieldInfo>();
            foreach (var item in tableFields)
            {
                TableFieldInfo tableFieldInfo = new TableFieldInfo
                {
                    Name = item.Name,
                    Title = item.Title,
                    Type = item.Type.GetName()
                };
                tableFieldInfoList.Add(tableFieldInfo);
            }
            response.Entities = tableFieldInfoList;
            return response;
        }       

        [HttpPost]
        public GetExcelColumnListResponse GetExcelColumnList(GetExcelColumnListRequest request)
        {
            GetExcelColumnListResponse response = new GetExcelColumnListResponse();
            if (request != null && request.ImportFileList.Count > 0)
            {
                string fileName = request.ImportFileList[0].Filename;
                UploadHelper.CheckFileNameSecurity(fileName);
                ExcelPackage.LicenseContext = LicenseContext.NonCommercial;
                ExcelPackage ep = new ExcelPackage();
                using (var fs = new FileStream(UploadHelper.DbFilePath(fileName), FileMode.Open, FileAccess.Read))
                    ep.Load(fs);

                var worksheet = ep.Workbook.Worksheets.First();
                var worksheetStart = worksheet.Dimension.Start;
                var worksheetEnd = worksheet.Dimension.End;

                List<string> excelColumnList = new List<string>();

                for (int col = 0; col < worksheetEnd.Column; col++)
                {
                    var columnName = worksheet.Cells[worksheetStart.Row, col + 1].Value;

                    if (!string.IsNullOrEmpty(columnName.ToString()))
                    {
                        excelColumnList.Add(columnName.ToString());
                    }
                }
                response.ExcelColumnList = excelColumnList;
                if (request.SampleRecords > 0)
                {
                    response.SampleDataHTML = SampleDataHTML(worksheet, worksheetStart, worksheetEnd);
                    response.SampleDataList = SampleDataList(worksheet, worksheetStart, worksheetEnd);
                }
                ep.Dispose();
            }
            return response;
        }

        private List<string> SampleDataList(ExcelWorksheet worksheet, ExcelCellAddress worksheetStart, ExcelCellAddress worksheetEnd)
        {
            List<string> sampleDataList = new List<string>();

            for (int rowCount = worksheetStart.Row; rowCount < worksheetEnd.Column; rowCount++)
            {
                var row = worksheet.Row(rowCount + 1).ToJson();
                sampleDataList.Add(row);
            }
            return sampleDataList;
        }

        private String SampleDataHTML(ExcelWorksheet worksheet, ExcelCellAddress worksheetStart, ExcelCellAddress worksheetEnd)
        {
            StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.Append("<table border==\"1\"><tr>");
            for (int rowCount = worksheetStart.Row; rowCount < worksheetEnd.Column; rowCount++)
            {
                stringBuilder.Append("<tr>");
                for (int col = 0; col < worksheetEnd.Column; col++)
                {
                    var columnValue = worksheet.Cells[rowCount, col + 1].Value;
                    stringBuilder.Append("'<td>'" + columnValue + "'</td>'");
                }
                stringBuilder.Append("<tr>");
                stringBuilder.Append("</table>");
            }
            return stringBuilder.ToString();
        }

        [HttpPost]
        public SerializeListResponse SerializeList(SerializeListRequest request)
        {
            SerializeListResponse response = new SerializeListResponse();
            if (request != null && request.DropColumnList != null && request.TableName != null)
            {
                List<string> dropColumnList = request.DropColumnList;
                GetTableHeaderListRequest getTableHeaderListRequest = new GetTableHeaderListRequest
                {
                    TableName = request.TableName
                };
                ListResponse<TableFieldInfo> tableHeaders = GetTableHeaders(getTableHeaderListRequest);
                List<TableFieldInfo> tableFieldInfoList = tableHeaders.Entities;

                List<FieldMatch> fieldMatchList = new List<FieldMatch>();
                List<string> fieldMatchDisplay = new List<string>();
                for (int i = 0; i < dropColumnList.Count; i++)
                {
                    FieldMatch fieldMatch = new FieldMatch
                    {
                        SourceFieldName = dropColumnList[i],
                        TableFieldName = tableFieldInfoList[i].Name
                    };
                    fieldMatchList.Add(fieldMatch);
                    fieldMatchDisplay.Add(dropColumnList[i] + " => " + tableFieldInfoList[i].Name);
                }
                response.FieldMatchList = fieldMatchList;
                response.FieldMatchJson = JsonConvert.SerializeObject(fieldMatchList);
                response.FieldMatchDisplay = fieldMatchDisplay;
            }
            return response;
        }      

        /// <summary>
        /// Imports all the files in the file list for that row 
        /// </summary>
        /// <param name="importWizardRow"></param>
        /// <returns></returns>
        public List<int> ExcelImport(int importWizardId)
        {
            List<int> importWizardHistoryList = new List<int>();
            List<string> errorList = new List<string>();
            ImportWizardHistoryRow importWizardHistoryRow = new ImportWizardHistoryRow();
            using var connection = SqlConnections.NewFor<ImportWizardHistoryRow>();
            ImportWizardRow importWizardRow = connection.TryById<ImportWizardRow>(importWizardId);
            if (importWizardRow.HasErrors)
            {
                errorList.Add("The wizard id " + importWizardId.ToString() + " does not exist.");
                importWizardHistoryRow.ErrorList = errorList.ToJson();
                int importWizardHistoryId = Convert.ToInt32(connection.InsertAndGetID(importWizardHistoryRow));
                importWizardHistoryList.Add(importWizardHistoryId);
                return importWizardHistoryList;
            }
            if (importWizardRow.ImportFileList.IsEmptyOrNull())
            {
                errorList.Add("There are no files to import.");
                importWizardHistoryRow.ErrorList = errorList.ToJson();
                int importWizardHistoryId = Convert.ToInt32(connection.InsertAndGetID(importWizardHistoryRow));
                importWizardHistoryList.Add(importWizardHistoryId);
                return importWizardHistoryList;
            }
            string fileName;
            var fileNameList = JsonConvert.DeserializeObject<List<FileNames>>(importWizardRow.ImportFileList.ToString(), JsonSettings.Tolerant);
            foreach (var fileNamePair in fileNameList)
            {
                fileName = fileNamePair.FileName;
                Check.NotNullOrWhiteSpace("fileName", fileName);
                UploadHelper.CheckFileNameSecurity(fileName);
                importWizardHistoryRow = new ImportWizardHistoryRow
                {
                    RunDateTime = DateTime.Now,
                    OriginalFileName = fileNamePair.OriginalName,
                    TempFileName = fileNamePair.FileName,
                    ImportWizardId = importWizardRow.ImportWizardId,
                    RowsInserted = 0,
                    RowsUpdated = 0
                };
                importWizardHistoryRow = ExcelImportFile(importWizardRow, importWizardHistoryRow);
                int importWizardHistoryId = (int)connection.InsertAndGetID(importWizardHistoryRow);
                importWizardHistoryList.Add(importWizardHistoryId);               
                errorList.Clear();
                importWizardRow.LastRunDate = importWizardHistoryRow.RunDateTime;
                connection.UpdateById<ImportWizardRow>(importWizardRow);
            }
            return importWizardHistoryList;
        }

        /// <summary>
        /// Imports the file using the parameters from the passed import row and
        /// updates the history database
        /// </summary>
        /// <param name="importWizardRow"></param>
        /// <param name="fileName"></param>
        /// <returns></returns>
        private ImportWizardHistoryRow ExcelImportFile(ImportWizardRow importWizardRow, ImportWizardHistoryRow importWizardHistoryRow)
        {
            int columnErrors = 0;
            int rowErrors = 0;
            
            List<string> errorList = new List<string>();
            ExcelPackage.LicenseContext = LicenseContext.NonCommercial;
            ExcelPackage ep = new ExcelPackage();
            using (var fs = new FileStream(UploadHelper.DbFilePath(importWizardHistoryRow.TempFileName), FileMode.Open, FileAccess.Read))
                ep.Load(fs);
            if (ep.Workbook.Worksheets.Count == 0)
            {
                errorList.Add(importWizardHistoryRow.TempFileName + " contains no worksheets.");
                importWizardHistoryRow.ErrorList = errorList.ToJson();
                return importWizardHistoryRow;
            }
            int importStartRow = importWizardRow.StartAtRow == null ? 2 : Convert.ToInt32(importWizardRow.StartAtRow);
            int importKeyColumn = importWizardRow.KeyColumn == null ? -1 : Convert.ToInt32(importWizardRow.KeyColumn);
            var worksheet = ep.Workbook.Worksheets.First();
            var worksheetStart = worksheet.Dimension.Start;
            var worksheetEnd = worksheet.Dimension.End;
            var worksheetHeaders = worksheet.Cells[worksheetStart.Row, worksheetStart.Column, 1, worksheetEnd.Column];
            string entityName = importWizardRow.TargetDatabase;

            Type rowType = Type.GetType(entityName);
            if (rowType == null)
            {
                errorList.Add("Row type " + entityName + " not found.");
                importWizardHistoryRow.ErrorList = errorList.ToString();
                return importWizardHistoryRow;
            }
            Row currentRow = GetInstance(rowType);
            var connectionKey = currentRow.GetType().GetCustomAttribute<ConnectionKeyAttribute>().Value;
            var tableName = currentRow.Table;
            
            if (connectionKey == null)
            {
                errorList.Add("Row type " + entityName + " connection key not found.");
                importWizardHistoryRow.ErrorList = errorList.ToString();
                return importWizardHistoryRow;
            }
            Field[] primaryKeyFields = currentRow.GetFields().PrimaryKeys;
            bool primaryKeyIsIdentity = false;
            string primaryKeyColumnAlias = string.Empty;
            int primaryKeyColumnNumber = 0;
            string primaryKeyName = string.Empty;
            int primaryKeyValue = 0;
            bool primaryKeyIsInList = false;
            if (primaryKeyFields == null)
            {
                rowErrors += 1;
                errorList.Add("No primary key found for target table.");
            }
            else
            {
                for (int i = 0; i < primaryKeyFields.Length; i++)
                {
                    if (primaryKeyFields[i].Flags.HasFlag(FieldFlags.Identity))
                    {
                        primaryKeyIsIdentity = true;
                        primaryKeyColumnAlias = primaryKeyFields[i].ColumnAlias;
                        primaryKeyColumnNumber = primaryKeyFields[i].Index;
                    }
                }
            }
            var json = importWizardRow.FieldMatchList;
            var fieldMatchList = JsonConvert.DeserializeObject<List<FieldMatch>>(json);
            List<Serenity.Data.Schema.FieldInfo> importedHeaders = new List<Serenity.Data.Schema.FieldInfo>();
            for (int col = 0; col < worksheetEnd.Column; col++)
            {
                var workSheetColumnName = worksheet.Cells[worksheetStart.Row, col + 1].Text;
                if (!string.IsNullOrEmpty(workSheetColumnName.ToString()))
                {
                    if (fieldMatchList.Exists(map => map.SourceFieldName == workSheetColumnName))
                    {
                        var tableFieldName = fieldMatchList.Find(map => map.SourceFieldName == workSheetColumnName).TableFieldName;
                        var currentFieldName = currentRow.FindField(tableFieldName);
                        if (currentFieldName is object)
                        {
                            Serenity.Data.Schema.FieldInfo fieldInfoSource = new Serenity.Data.Schema.FieldInfo
                            {
                                FieldName = workSheetColumnName.ToString(),
                                IsIdentity = false,
                                IsPrimaryKey = importKeyColumn == col,
                                IsNullable = true,
                                PKSchema = (col + 1).ToString(),
                                PKColumn = currentFieldName.ColumnAlias.ToString()
                            };
                            if (tableFieldName.ToUpper() == primaryKeyColumnAlias.ToUpper())
                            {
                                primaryKeyIsInList = true;
                                importKeyColumn = col + 1;
                            }
                            importedHeaders.Add(fieldInfoSource);
                        }
                    }
                }
            }
            for (var row = importStartRow; row <= worksheetEnd.Row; row++)
            {
                if (columnErrors <= importWizardRow.ColumnErrorCount && rowErrors <= importWizardRow.RowErrorCount)
                {
                    try
                    {
                        bool primaryKeyFound = false;

                        using (var connection = SqlConnections.NewByKey(connectionKey))
                        {
                            var listHandler = DefaultHandlerFactory.ListHandlerFor(rowType);
                            var listRequest = DefaultHandlerFactory.ListRequestFor(rowType);
                            var retrieveHandler = DefaultHandlerFactory.RetrieveHandlerFor(rowType);
                            var retrieveRequest = DefaultHandlerFactory.RetrieveRequestFor(rowType);
                            var saveHandler = DefaultHandlerFactory.SaveHandlerFor(rowType);
                            var saveRequest = DefaultHandlerFactory.SaveRequestFor(rowType);
                            currentRow = currentRow.CreateNew();
                            if (primaryKeyIsInList)
                            {
                                primaryKeyValue = Convert.ToInt32(worksheet.Cells[row, importKeyColumn, row, importKeyColumn].Value);
                                var criteria = new Criteria(primaryKeyColumnAlias) == new ValueCriteria(primaryKeyValue);
                                SqlQuery sqlQuery = new SqlQuery();
                                sqlQuery.Select("*");
                                sqlQuery.From(tableName);
                                sqlQuery.Where(criteria);
                                var results = connection.Query(sqlQuery);
                                if (results.Count() > 0)
                                {
                                    currentRow = (Row)results;
                                    currentRow.TrackWithChecks = true;
                                    primaryKeyFound = true;
                                }
                                //retrieveRequest.EntityId = primaryKeyValue;
                                //{
                                //    var retrieveResponse = retrieveHandler.Process(connection, retrieveRequest);
                                //    if (retrieveResponse != null)
                                //    {
                                //        currentRow = (Row)retrieveResponse.Entity;
                                //        currentRow.TrackWithChecks = true;
                                //        primaryKeyFound = true;
                                //    }
                                //}
                            }
                            var importedRow = worksheet.Cells[row, worksheetStart.Column, 1, worksheetEnd.Column];
                            for (int i = 0; i < importedHeaders.Count(); i++)
                            {
                                PropertyInfo propertyInfo = currentRow.GetType().GetProperty(importedHeaders[i].PKColumn);
                                Type targetDataType = propertyInfo.GetType();
                                var sourceValue = worksheet.Cells[row, Convert.ToInt32(importedHeaders[i].PKSchema)].Value;

                                // Import Columns
                                if (!(importedHeaders[i].PKColumn.ToUpper() == primaryKeyColumnAlias.ToUpper() && primaryKeyIsIdentity))
                                {
                                    if (sourceValue != null && sourceValue.ToString() != "NULL")
                                    {
                                        try
                                        {
                                            if (propertyInfo.PropertyType == typeof(String))
                                            {
                                                propertyInfo.SetValue(currentRow, ChangeType<String>(sourceValue.ToString().Trim()), null);
                                            }
                                            else if (propertyInfo.PropertyType == typeof(Int32?))
                                            {
                                                propertyInfo.SetValue(currentRow, ChangeType<Int32?>(sourceValue), null);
                                            }
                                            else if (propertyInfo.PropertyType == typeof(Decimal?))
                                            {
                                                propertyInfo.SetValue(currentRow, ChangeType<Decimal?>(sourceValue), null);
                                            }
                                            else if (propertyInfo.PropertyType == typeof(Boolean?))
                                            {
                                                propertyInfo.SetValue(currentRow, ChangeType<Boolean?>(sourceValue), null);
                                            }
                                            else if (propertyInfo.PropertyType == typeof(Int64?))
                                            {
                                                propertyInfo.SetValue(currentRow, ChangeType<Int64?>(sourceValue), null);
                                            }
                                            else if (propertyInfo.PropertyType == typeof(DateTime?))
                                            {
                                                propertyInfo.SetValue(currentRow, ChangeType<DateTime?>(sourceValue), null);
                                            }
                                        }
                                        catch (Exception ex)
                                        {
                                            columnErrors += 1;
                                            errorList.Add("Error converting " + importedHeaders[i].PKColumn + " in column" + i.ToString() + " - " + ex.Message);
                                        }
                                    }
                                }
                            }
                            saveRequest.Entity = currentRow;
                            Serenity.Data.IUnitOfWork unitOfWork = new Serenity.Data.UnitOfWork(connection);
                            if (primaryKeyFound)
                            {
                                saveRequest.EntityId = primaryKeyValue;
                                var saveResponse = saveHandler.Process(unitOfWork, saveRequest, SaveRequestType.Update);
                                importWizardHistoryRow.RowsUpdated += 1;
                            }
                            else
                            {
                                var primaryKey = unitOfWork.Connection.InsertAndGetID(currentRow);
                                var saveResponse = saveHandler.Process(unitOfWork, saveRequest, SaveRequestType.Create);
                                importWizardHistoryRow.RowsInserted += 1;
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        rowErrors += 1;
                        errorList.Add("Error on row " + row.ToString() + " - " + ex.Message);
                    }
                }
            }
            ep.Dispose();
            importWizardHistoryRow.ErrorList = errorList.ToJson();
            return importWizardHistoryRow;
        }

        public static T ChangeType<T>(object value)
        {
            var t = typeof(T);

            if (t.IsGenericType && t.GetGenericTypeDefinition().Equals(typeof(Nullable<>)))
            {
                if (value == null)
                {
                    return default;
                }

                t = Nullable.GetUnderlyingType(t);
            }

            return (T)Convert.ChangeType(value, t);
        }

        [Serializable]
        public class FileNames
        {
            public string OriginalName { get; set; }
            public string FileName { get; set; }
        }

        public class FieldInfoPair
        {
            public Serenity.Data.Schema.FieldInfo SourceFileInfo { get; set; }
            public int ImportColumn { get; set; }
        }

        private static Row GetInstance(Type rowType)
        {
            return (Row)Activator.CreateInstance(rowType);
        }

        private static object GetRepository(string entityName)
        {
            var repositoryName = entityName.Replace("Entities", "Repositories");
            repositoryName = repositoryName.Replace("Row", "Repository");
            Type respositorytype = Assembly.GetExecutingAssembly().GetType(repositoryName);
            object instance = Activator.CreateInstance(respositorytype);
            // Optional generic implementation
            //List<MethodInfo> repositoryMethods = respositorytype.GetMethods().ToList();
            //string methodName = "Retrieve";
            //MethodInfo repositoryMethod = respositorytype.GetMethod(methodName);
            //ListRequest listRequest = new ListRequest();
            //repositoryMethod.Invoke(instance, new object[0]);
            return instance;
        }

        /// <summary>
        ///  get local sql server instance names from registry, search both WOW64 and WOW3264 hives
        /// </summary>
        /// <returns>a list of local sql server instance names</returns>
        public static IList<string> GetLocalSqlServerInstanceNames()
        {
            RegistryValueDataReader registryValueDataReader = new RegistryValueDataReader();

            string[] instances64Bit = registryValueDataReader.ReadRegistryValueData(RegistryHive.Wow64,
                                                                                    Registry.LocalMachine,
                                                                                    @"SOFTWARE\Microsoft\Microsoft SQL Server",
                                                                                    "InstalledInstances");

            string[] instances32Bit = registryValueDataReader.ReadRegistryValueData(RegistryHive.Wow6432,
                                                                                    Registry.LocalMachine,
                                                                                    @"SOFTWARE\Microsoft\Microsoft SQL Server",
                                                                                    "InstalledInstances");

            //FormatLocalSqlInstanceNames(ref instances64Bit);
            //FormatLocalSqlInstanceNames(ref instances32Bit);

            IList<string> localInstanceNames = new List<string>(instances64Bit);

            localInstanceNames = localInstanceNames.Union(instances32Bit).ToList();

            return localInstanceNames;
        }

        public enum RegistryHive
        {
            Wow64,
            Wow6432
        }

        public class RegistryValueDataReader
        {
            private static readonly int KEY_WOW64_32KEY = 0x200;
            private static readonly int KEY_WOW64_64KEY = 0x100;

            private static readonly UIntPtr HKEY_LOCAL_MACHINE = (UIntPtr)0x80000002;

            private static readonly int KEY_QUERY_VALUE = 0x1;

            [DllImport("advapi32.dll", CharSet = CharSet.Unicode, EntryPoint = "RegOpenKeyEx")]
            static extern int RegOpenKeyEx(
                        UIntPtr hKey,
                        string subKey,
                        uint options,
                        int sam,
                        out IntPtr phkResult);


            [DllImport("advapi32.dll", SetLastError = true)]
            static extern int RegQueryValueEx(
                        IntPtr hKey,
                        string lpValueName,
                        int lpReserved,
                        out uint lpType,
                        IntPtr lpData,
                        ref uint lpcbData);

            private static int GetRegistryHiveKey(RegistryHive registryHive)
            {
                return registryHive == RegistryHive.Wow64 ? KEY_WOW64_64KEY : KEY_WOW64_32KEY;
            }

            private static UIntPtr GetRegistryKeyUIntPtr(RegistryKey registry)
            {
                if (registry == Registry.LocalMachine)
                {
                    return HKEY_LOCAL_MACHINE;
                }

                return UIntPtr.Zero;
            }

            public string[] ReadRegistryValueData(RegistryHive registryHive, RegistryKey registryKey, string subKey, string valueName)
            {
                string[] instanceNames = new string[0];

                int key = GetRegistryHiveKey(registryHive);
                UIntPtr registryKeyUIntPtr = GetRegistryKeyUIntPtr(registryKey);

                IntPtr hResult;

                int res = RegOpenKeyEx(registryKeyUIntPtr, subKey, 0, KEY_QUERY_VALUE | key, out hResult);

                if (res == 0)
                {
                    uint type;
                    uint dataLen = 0;

                    RegQueryValueEx(hResult, valueName, 0, out type, IntPtr.Zero, ref dataLen);

                    byte[] databuff = new byte[dataLen];
                    byte[] temp = new byte[dataLen];

                    List<String> values = new List<string>();

                    GCHandle handle = GCHandle.Alloc(databuff, GCHandleType.Pinned);
                    try
                    {
                        RegQueryValueEx(hResult, valueName, 0, out type, handle.AddrOfPinnedObject(), ref dataLen);
                    }
                    finally
                    {
                        handle.Free();
                    }

                    int i = 0;
                    int j = 0;

                    while (i < databuff.Length)
                    {
                        if (databuff[i] == '\0')
                        {
                            j = 0;
                            string str = Encoding.Default.GetString(temp).Trim('\0');

                            if (!string.IsNullOrEmpty(str))
                            {
                                values.Add(str);
                            }

                            temp = new byte[dataLen];
                        }
                        else
                        {
                            temp[j++] = databuff[i];
                        }

                        ++i;
                    }

                    instanceNames = new string[values.Count];
                    values.CopyTo(instanceNames);
                }

                return instanceNames;
            }
        }        

        private static IList<string> GetRemoteSqlServerInstanceNames()
        {
            IList<string> remoteInstanceNames = new List<string>();
            ListServers(SqlClientFactory.Instance);

            return remoteInstanceNames;
        }

        private static void ListServers(DbProviderFactory factory)
        {
            // This procedure is provider-agnostic, and can list
            // instances of any provider's servers. Of course,
            // not all providers can create a data source enumerator,
            // so it's best to check the CanCreateDataSourceEnumerator
            // property before attempting to list the data sources.
            if (factory.CanCreateDataSourceEnumerator)
            {
                DbDataSourceEnumerator instance =
                    factory.CreateDataSourceEnumerator();
                DataTable table = instance.GetDataSources();

                foreach (DataRow row in table.Rows)
                {
                    Console.WriteLine("{0}\\{1}",
                        row["ServerName"], row["InstanceName"]);
                }
            }
        }
    }    
}
