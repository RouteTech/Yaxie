
namespace Yaxie.Common.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Common"), TableName("[dbo].[ImportType]")]
    [DisplayName("Import Type"), InstanceName("Import Type")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class ImportTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Import Type Id"), Identity]
        public Int32? ImportTypeId
        {
            get { return Fields.ImportTypeId[this]; }
            set { Fields.ImportTypeId[this] = value; }
        }

        [DisplayName("Description"), Size(255), QuickSearch]
        [Required]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ImportTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ImportTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ImportTypeId;
            public StringField Description;
        }
    }
}
