
namespace Yaxie.NorthWind.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("NorthWind"), Module("NorthWind"), TableName("[dbo].[Invoices]")]
    [DisplayName("Invoices"), InstanceName("Invoices")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class InvoicesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Ship Name"), Size(40), QuickSearch]
        public String ShipName
        {
            get { return Fields.ShipName[this]; }
            set { Fields.ShipName[this] = value; }
        }

        [DisplayName("Ship Address"), Size(60)]
        public String ShipAddress
        {
            get { return Fields.ShipAddress[this]; }
            set { Fields.ShipAddress[this] = value; }
        }

        [DisplayName("Ship City"), Size(15)]
        public String ShipCity
        {
            get { return Fields.ShipCity[this]; }
            set { Fields.ShipCity[this] = value; }
        }

        [DisplayName("Ship Region"), Size(15)]
        public String ShipRegion
        {
            get { return Fields.ShipRegion[this]; }
            set { Fields.ShipRegion[this] = value; }
        }

        [DisplayName("Ship Postal Code"), Size(10)]
        public String ShipPostalCode
        {
            get { return Fields.ShipPostalCode[this]; }
            set { Fields.ShipPostalCode[this] = value; }
        }

        [DisplayName("Ship Country"), Size(15)]
        public String ShipCountry
        {
            get { return Fields.ShipCountry[this]; }
            set { Fields.ShipCountry[this] = value; }
        }

        [DisplayName("Customer Id"), Column("CustomerID"), Size(5)]
        public String CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Customer Name"), Size(40), NotNull]
        public String CustomerName
        {
            get { return Fields.CustomerName[this]; }
            set { Fields.CustomerName[this] = value; }
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

        [DisplayName("Salesperson"), Size(31), NotNull]
        public String Salesperson
        {
            get { return Fields.Salesperson[this]; }
            set { Fields.Salesperson[this] = value; }
        }

        [DisplayName("Order Id"), Column("OrderID"), NotNull]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("Order Date")]
        public DateTime? OrderDate
        {
            get { return Fields.OrderDate[this]; }
            set { Fields.OrderDate[this] = value; }
        }

        [DisplayName("Required Date")]
        public DateTime? RequiredDate
        {
            get { return Fields.RequiredDate[this]; }
            set { Fields.RequiredDate[this] = value; }
        }

        [DisplayName("Shipped Date")]
        public DateTime? ShippedDate
        {
            get { return Fields.ShippedDate[this]; }
            set { Fields.ShippedDate[this] = value; }
        }

        [DisplayName("Shipper Name"), Size(40), NotNull]
        public String ShipperName
        {
            get { return Fields.ShipperName[this]; }
            set { Fields.ShipperName[this] = value; }
        }

        [DisplayName("Product Id"), Column("ProductID"), NotNull]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Product Name"), Size(40), NotNull]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }

        [DisplayName("Unit Price"), Size(19), Scale(4), NotNull]
        public Decimal? UnitPrice
        {
            get { return Fields.UnitPrice[this]; }
            set { Fields.UnitPrice[this] = value; }
        }

        [DisplayName("Quantity"), NotNull]
        public Int16? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Discount"), NotNull]
        public Single? Discount
        {
            get { return Fields.Discount[this]; }
            set { Fields.Discount[this] = value; }
        }

        [DisplayName("Extended Price"), Size(19), Scale(4)]
        public Decimal? ExtendedPrice
        {
            get { return Fields.ExtendedPrice[this]; }
            set { Fields.ExtendedPrice[this] = value; }
        }

        [DisplayName("Freight"), Size(19), Scale(4)]
        public Decimal? Freight
        {
            get { return Fields.Freight[this]; }
            set { Fields.Freight[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ShipName; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ShipName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InvoicesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField ShipName;
            public StringField ShipAddress;
            public StringField ShipCity;
            public StringField ShipRegion;
            public StringField ShipPostalCode;
            public StringField ShipCountry;
            public StringField CustomerId;
            public StringField CustomerName;
            public StringField Address;
            public StringField City;
            public StringField Region;
            public StringField PostalCode;
            public StringField Country;
            public StringField Salesperson;
            public Int32Field OrderId;
            public DateTimeField OrderDate;
            public DateTimeField RequiredDate;
            public DateTimeField ShippedDate;
            public StringField ShipperName;
            public Int32Field ProductId;
            public StringField ProductName;
            public DecimalField UnitPrice;
            public Int16Field Quantity;
            public SingleField Discount;
            public DecimalField ExtendedPrice;
            public DecimalField Freight;
        }
    }
}
