
namespace Yaxie.NorthWind.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("NorthWind"), Module("NorthWind"), TableName("[dbo].[Region]")]
    [DisplayName("Region"), InstanceName("Region")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class RegionRow : Row, IIdRow, INameRow
    {
        [DisplayName("Region Id"), Column("RegionID"), PrimaryKey]
        public Int32? RegionId
        {
            get { return Fields.RegionId[this]; }
            set { Fields.RegionId[this] = value; }
        }

        [DisplayName("Region Description"), Size(50), NotNull, QuickSearch]
        public String RegionDescription
        {
            get { return Fields.RegionDescription[this]; }
            set { Fields.RegionDescription[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.RegionId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.RegionDescription; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RegionRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RegionId;
            public StringField RegionDescription;
        }
    }
}
