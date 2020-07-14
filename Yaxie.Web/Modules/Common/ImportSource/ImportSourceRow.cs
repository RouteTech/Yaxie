
namespace Yaxie.Common.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Common"), TableName("[dbo].[ImportSource]")]
    [DisplayName("Import Source"), InstanceName("Import Source")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript()]
    public sealed class ImportSourceRow : Row, IIdRow, INameRow
    {
        [DisplayName("Import Source Id"), Identity]
        public Int32? ImportSourceId
        {
            get { return Fields.ImportSourceId[this]; }
            set { Fields.ImportSourceId[this] = value; }
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
            get { return Fields.ImportSourceId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ImportSourceRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ImportSourceId;
            public StringField Description;
        }
    }
}
