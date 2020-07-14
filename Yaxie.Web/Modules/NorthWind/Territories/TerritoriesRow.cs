
namespace Yaxie.NorthWind.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("NorthWind"), Module("NorthWind"), TableName("[dbo].[Territories]")]
    [DisplayName("Territories"), InstanceName("Territories")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TerritoriesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Territory Id"), Column("TerritoryID"), Size(20), PrimaryKey, QuickSearch]
        public String TerritoryId
        {
            get { return Fields.TerritoryId[this]; }
            set { Fields.TerritoryId[this] = value; }
        }

        [DisplayName("Territory Description"), Size(50), NotNull]
        public String TerritoryDescription
        {
            get { return Fields.TerritoryDescription[this]; }
            set { Fields.TerritoryDescription[this] = value; }
        }

        [DisplayName("Region"), Column("RegionID"), NotNull, ForeignKey("[dbo].[Region]", "RegionID"), LeftJoin("jRegion"), TextualField("RegionRegionDescription")]
        public Int32? RegionId
        {
            get { return Fields.RegionId[this]; }
            set { Fields.RegionId[this] = value; }
        }

        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Region Region Description"), Expression("jRegion.[RegionDescription]")]
        public String RegionRegionDescription
        {
            get { return Fields.RegionRegionDescription[this]; }
            set { Fields.RegionRegionDescription[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TerritoryId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TerritoriesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField TerritoryId;
            public StringField TerritoryDescription;
            public Int32Field RegionId;
            public Int32Field Id;

            public StringField RegionRegionDescription;
        }
    }
}
