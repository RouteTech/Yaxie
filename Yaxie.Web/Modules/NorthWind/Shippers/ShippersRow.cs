
namespace Yaxie.NorthWind.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("NorthWind"), Module("NorthWind"), TableName("[dbo].[Shippers]")]
    [DisplayName("Shippers"), InstanceName("Shippers")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ShippersRow : Row, IIdRow, INameRow
    {
        [DisplayName("Shipper Id"), Column("ShipperID"), Identity]
        public Int32? ShipperId
        {
            get { return Fields.ShipperId[this]; }
            set { Fields.ShipperId[this] = value; }
        }

        [DisplayName("Company Name"), Size(40), NotNull, QuickSearch]
        public String CompanyName
        {
            get { return Fields.CompanyName[this]; }
            set { Fields.CompanyName[this] = value; }
        }

        [DisplayName("Phone"), Size(24)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ShipperId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CompanyName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ShippersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ShipperId;
            public StringField CompanyName;
            public StringField Phone;
        }
    }
}
