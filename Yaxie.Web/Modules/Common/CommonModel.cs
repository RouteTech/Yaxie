using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Collections.Generic;

namespace Yaxie.Common
{
    #region Requests / Responses

    public class GetExcelColumnListRequest : ListRequest
    {
        public List<UploadFileNames> ImportFileList { get; set; }
        public string FileName { get; set; }
    }

    public class GetTableHeaderListRequest : ListRequest
    {
        public string TableName { get; set; }
    }   

    public class SerializeListRequest : ListRequest
    {
        public List<string> DropColumnList { get; set; }
        public string TableName { get; set; }
    }

    public class SerializeListResponse : ListResponse<string>
    {
        public string FieldMatchJson { get; set; }
        public List<FieldMatch> FieldMatchList { get; set; }
        public List<string> FieldMatchDisplay { get; set; }
    }

    //[{"OriginalName":"Import.xlsx","Filename":"temporary/83f30bbffc9f4872b8d8277489447d5c.xlsx"}]
    public class UploadFileNames
    {
        public string OriginalName { get; set; }
        public string Filename { get; set; }
    }

    public class TableFieldInfo
    {
        public string Name { get; set; }
        public string Title { get; set; }
        public string Type { get; set; }
        public string ColumnAlias { get; set; }
        public string Caption { get; set; }
        public object DefaultValue { get; set; }
        public int Size { get; set; }
    }

    public class FieldMatch
    {
        public int SourceColumnNumber { get; set; }
        public string SourceColumnLabel { get; set; }
        public string SourceFieldName { get; set; }
        public int TableColumnNumber { get; set; }
        public string TableColumnLabel { get; set; }
        public string TableFieldName { get; set; }
        public Type TableFieldType { get; set; }
    }

    #endregion
}