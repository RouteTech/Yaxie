﻿using Mapster;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Win32;
using Newtonsoft.Json;
using OfficeOpenXml;
using Serenity;
using Serenity.Data;
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

        public ListResponse<TableFieldInfo> GetTableHeaders(GetTableHeaderListRequest request)
        {
            ListResponse<TableFieldInfo> response = new ListResponse<TableFieldInfo>();
            string entityName = request.TableName;

            Type rowType = Type.GetType(entityName);
            if (rowType == null)
                throw new ArgumentOutOfRangeException("Table not found");
            var LocalServers = GetLocalSqlServerInstanceNames();
            var RemoteServers = GetRemoteSqlServerInstanceNames();
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
        public ListResponse<string> GetExcelColumnList(GetExcelColumnListRequest request)
        {
            ListResponse<string> response = new ListResponse<string>();
            if (request != null && request.ImportFileList != null)
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
                response.Entities = excelColumnList;
                ep.Dispose();
            }
            return response;
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

        [HttpPost]
        public ExcelImportResponse ExcelImport(IUnitOfWork uow, ExcelImportRequest request)
        {
            request.CheckNotNull();
            int columnErrors = 0;
            int rowErrors = 0;
            var response = new ExcelImportResponse
            {
                ErrorList = new List<string>()
            };
            int importWizardID = Convert.ToInt32(request.ImportWizardID);
            string fileName;
            ImportWizardRow importWizardRow = uow.Connection.TryById<ImportWizardRow>(importWizardID);
            if (importWizardRow == null)
            {
                response.ErrorList.Add("Import Wizard row with id " + importWizardID.ToString() + " not found.");
                return response;
            }
            if (importWizardRow.ImportFileList.IsEmptyOrNull())
            {
                response.ErrorList.Add("Import Wizard file list is empty.");
                return response;
            }
            var fileNameList = JsonConvert.DeserializeObject<List<FileNames>>(importWizardRow.ImportFileList.ToString(), JsonSettings.Tolerant);
            foreach (var item in fileNameList)
            {
                fileName = item.FileName;
                Check.NotNullOrWhiteSpace("fileName", fileName);
                UploadHelper.CheckFileNameSecurity(fileName);
                ExcelPackage.LicenseContext = LicenseContext.NonCommercial;
                ExcelPackage ep = new ExcelPackage();
                using (var fs = new FileStream(UploadHelper.DbFilePath(fileName), FileMode.Open, FileAccess.Read))
                    ep.Load(fs);
                if (ep.Workbook.Worksheets.Count == 0)
                {
                    response.ErrorList.Add(fileName + " contains no worksheets.");
                    return response;
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
                    response.ErrorList.Add("Row type " + entityName + " not found.");
                    return response;
                }
                Row currentRow = GetInstance(rowType);
                var connectionKey = currentRow.GetType().GetCustomAttribute<ConnectionKeyAttribute>().Value;
                if (connectionKey == null)
                {
                    response.ErrorList.Add("Row type " + entityName + " connection key not found.");
                    return response;
                }
                Field[] primaryKeyFields = currentRow.GetFields().PrimaryKeys;
                bool primaryKeyIsIdentity = false;
                string primaryKeyColumnAlias = string.Empty;
                int primaryKeyColumnNumber = 0;
                int primaryKeyValue = 0;
                bool primaryKeyIsInList = false;
                if (primaryKeyFields == null)
                {
                    rowErrors += 1;
                    response.ErrorList.Add("No primary key found for target table.");
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
                                var retrieveHandler = DefaultHandlerFactory.RetrieveHandlerFor(rowType);
                                var retrieveRequest = DefaultHandlerFactory.RetrieveRequestFor(rowType);
                                var saveHandler = DefaultHandlerFactory.SaveHandlerFor(rowType);
                                currentRow = currentRow.CreateNew();
                                if (primaryKeyIsInList)
                                {
                                    primaryKeyValue = Convert.ToInt32(worksheet.Cells[row, importKeyColumn, row, importKeyColumn].Value);
                                    retrieveRequest.EntityId = primaryKeyValue;
                                    {
                                        var retrieveResponse = retrieveHandler.Process(connection, retrieveRequest);
                                        if (retrieveResponse != null)
                                        {
                                            currentRow = (Row)retrieveResponse.Entity;
                                            currentRow.TrackWithChecks = true;
                                            primaryKeyFound = true;
                                        }
                                    }
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
                                                response.ErrorList.Add("Error converting " + importedHeaders[i].PKColumn + " in column" + i.ToString() + " - " + ex.Message);
                                            }
                                        }
                                    }
                                }
                                var saveRequest = DefaultHandlerFactory.SaveRequestFor(rowType);
                                saveRequest.Entity = currentRow;
                                if (primaryKeyFound)
                                {
                                    saveRequest.EntityId = primaryKeyValue;
                                    IUnitOfWork unitOfWork = new UnitOfWork(connection);
                                    var saveResponse = saveHandler.Process(unitOfWork, saveRequest, SaveRequestType.Update);
                                    response.Updated += 1;
                                }
                                else
                                {
                                    var saveResponse = saveHandler.Process(uow, saveRequest, SaveRequestType.Create);
                                    response.Inserted += 1;
                                }
                            }
                        }
                        catch (Exception ex)
                        {
                            rowErrors += 1;
                            response.ErrorList.Add("Error on row " + row.ToString() + " - " + ex.Message);
                        }
                    }
                }
                ep.Dispose();
            }
            if (columnErrors <= importWizardRow.ColumnErrorCount && rowErrors <= importWizardRow.RowErrorCount)
            {
                response.ErrorList.Add("Records Inserted : " + response.Inserted.ToString());
                response.ErrorList.Add("Records Updated  : " + response.Updated.ToString());
            }
            importWizardRow.ErrorList = JsonConvert.SerializeObject(response.ErrorList); // ToDo better save and presentation
            importWizardRow.LastRunDate = DateTime.Now;
            uow.Connection.UpdateById<ImportWizardRow>(importWizardRow);
            return response;
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
