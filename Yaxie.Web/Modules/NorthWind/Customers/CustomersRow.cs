
namespace Yaxie.NorthWind.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("NorthWind"), Module("NorthWind"), TableName("[dbo].[Customers]")]
    [DisplayName("Customers"), InstanceName("Customers")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CustomersRow : Row, IIdRow, INameRow
    {
        [DisplayName("Customer Id"), Column("CustomerID"), Size(5), PrimaryKey, QuickSearch]
        public String CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Company Name"), Size(40), NotNull]
        public String CompanyName
        {
            get { return Fields.CompanyName[this]; }
            set { Fields.CompanyName[this] = value; }
        }

        [DisplayName("Contact Name"), Size(30)]
        public String ContactName
        {
            get { return Fields.ContactName[this]; }
            set { Fields.ContactName[this] = value; }
        }

        [DisplayName("Contact Title"), Size(30)]
        public String ContactTitle
        {
            get { return Fields.ContactTitle[this]; }
            set { Fields.ContactTitle[this] = value; }
        }

        [DisplayName("Address"), Size(60)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("City"), Size(15)]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("Region"), Size(15)]
        public String Region
        {
            get { return Fields.Region[this]; }
            set { Fields.Region[this] = value; }
        }

        [DisplayName("Postal Code"), Size(10)]
        public String PostalCode
        {
            get { return Fields.PostalCode[this]; }
            set { Fields.PostalCode[this] = value; }
        }

        [DisplayName("Country"), Size(15)]
        public String Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }

        [DisplayName("Phone"), Size(24)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("Fax"), Size(24)]
        public String Fax
        {
            get { return Fields.Fax[this]; }
            set { Fields.Fax[this] = value; }
        }

        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CustomerId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField CustomerId;
            public StringField CompanyName;
            public StringField ContactName;
            public StringField ContactTitle;
            public StringField Address;
            public StringField City;
            public StringField Region;
            public StringField PostalCode;
            public StringField Country;
            public StringField Phone;
            public StringField Fax;
            public Int32Field Id;
        }
    }
}
