
namespace Yaxie.NorthWind.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("NorthWind"), Module("NorthWind"), TableName("[dbo].[Orders]")]
    [DisplayName("Orders"), InstanceName("Orders")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class OrdersRow : Row, IIdRow, INameRow
    {
        [DisplayName("Order Id"), Column("OrderID"), Identity]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("Customer"), Column("CustomerID"), Size(5), ForeignKey("[dbo].[Customers]", "CustomerID"), LeftJoin("jCustomer"), QuickSearch, TextualField("CustomerCompanyName")]
        public String CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Employee"), Column("EmployeeID"), ForeignKey("[dbo].[Employees]", "EmployeeID"), LeftJoin("jEmployee"), TextualField("EmployeeLastName")]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
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

        [DisplayName("Ship Via"), ForeignKey("[dbo].[Shippers]", "ShipperID"), LeftJoin("jShipVia"), TextualField("ShipViaCompanyName")]
        public Int32? ShipVia
        {
            get { return Fields.ShipVia[this]; }
            set { Fields.ShipVia[this] = value; }
        }

        [DisplayName("Freight"), Size(19), Scale(4)]
        public Decimal? Freight
        {
            get { return Fields.Freight[this]; }
            set { Fields.Freight[this] = value; }
        }

        [DisplayName("Ship Name"), Size(40)]
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

        [DisplayName("Customer Company Name"), Expression("jCustomer.[CompanyName]")]
        public String CustomerCompanyName
        {
            get { return Fields.CustomerCompanyName[this]; }
            set { Fields.CustomerCompanyName[this] = value; }
        }

        [DisplayName("Customer Contact Name"), Expression("jCustomer.[ContactName]")]
        public String CustomerContactName
        {
            get { return Fields.CustomerContactName[this]; }
            set { Fields.CustomerContactName[this] = value; }
        }

        [DisplayName("Customer Contact Title"), Expression("jCustomer.[ContactTitle]")]
        public String CustomerContactTitle
        {
            get { return Fields.CustomerContactTitle[this]; }
            set { Fields.CustomerContactTitle[this] = value; }
        }

        [DisplayName("Customer Address"), Expression("jCustomer.[Address]")]
        public String CustomerAddress
        {
            get { return Fields.CustomerAddress[this]; }
            set { Fields.CustomerAddress[this] = value; }
        }

        [DisplayName("Customer City"), Expression("jCustomer.[City]")]
        public String CustomerCity
        {
            get { return Fields.CustomerCity[this]; }
            set { Fields.CustomerCity[this] = value; }
        }

        [DisplayName("Customer Region"), Expression("jCustomer.[Region]")]
        public String CustomerRegion
        {
            get { return Fields.CustomerRegion[this]; }
            set { Fields.CustomerRegion[this] = value; }
        }

        [DisplayName("Customer Postal Code"), Expression("jCustomer.[PostalCode]")]
        public String CustomerPostalCode
        {
            get { return Fields.CustomerPostalCode[this]; }
            set { Fields.CustomerPostalCode[this] = value; }
        }

        [DisplayName("Customer Country"), Expression("jCustomer.[Country]")]
        public String CustomerCountry
        {
            get { return Fields.CustomerCountry[this]; }
            set { Fields.CustomerCountry[this] = value; }
        }

        [DisplayName("Customer Phone"), Expression("jCustomer.[Phone]")]
        public String CustomerPhone
        {
            get { return Fields.CustomerPhone[this]; }
            set { Fields.CustomerPhone[this] = value; }
        }

        [DisplayName("Customer Fax"), Expression("jCustomer.[Fax]")]
        public String CustomerFax
        {
            get { return Fields.CustomerFax[this]; }
            set { Fields.CustomerFax[this] = value; }
        }

        [DisplayName("Customer Id"), Expression("jCustomer.[ID]")]
        public Int32? CustomerId1
        {
            get { return Fields.CustomerId1[this]; }
            set { Fields.CustomerId1[this] = value; }
        }

        [DisplayName("Employee Last Name"), Expression("jEmployee.[LastName]")]
        public String EmployeeLastName
        {
            get { return Fields.EmployeeLastName[this]; }
            set { Fields.EmployeeLastName[this] = value; }
        }

        [DisplayName("Employee First Name"), Expression("jEmployee.[FirstName]")]
        public String EmployeeFirstName
        {
            get { return Fields.EmployeeFirstName[this]; }
            set { Fields.EmployeeFirstName[this] = value; }
        }

        [DisplayName("Employee Title"), Expression("jEmployee.[Title]")]
        public String EmployeeTitle
        {
            get { return Fields.EmployeeTitle[this]; }
            set { Fields.EmployeeTitle[this] = value; }
        }

        [DisplayName("Employee Title Of Courtesy"), Expression("jEmployee.[TitleOfCourtesy]")]
        public String EmployeeTitleOfCourtesy
        {
            get { return Fields.EmployeeTitleOfCourtesy[this]; }
            set { Fields.EmployeeTitleOfCourtesy[this] = value; }
        }

        [DisplayName("Employee Birth Date"), Expression("jEmployee.[BirthDate]")]
        public DateTime? EmployeeBirthDate
        {
            get { return Fields.EmployeeBirthDate[this]; }
            set { Fields.EmployeeBirthDate[this] = value; }
        }

        [DisplayName("Employee Hire Date"), Expression("jEmployee.[HireDate]")]
        public DateTime? EmployeeHireDate
        {
            get { return Fields.EmployeeHireDate[this]; }
            set { Fields.EmployeeHireDate[this] = value; }
        }

        [DisplayName("Employee Address"), Expression("jEmployee.[Address]")]
        public String EmployeeAddress
        {
            get { return Fields.EmployeeAddress[this]; }
            set { Fields.EmployeeAddress[this] = value; }
        }

        [DisplayName("Employee City"), Expression("jEmployee.[City]")]
        public String EmployeeCity
        {
            get { return Fields.EmployeeCity[this]; }
            set { Fields.EmployeeCity[this] = value; }
        }

        [DisplayName("Employee Region"), Expression("jEmployee.[Region]")]
        public String EmployeeRegion
        {
            get { return Fields.EmployeeRegion[this]; }
            set { Fields.EmployeeRegion[this] = value; }
        }

        [DisplayName("Employee Postal Code"), Expression("jEmployee.[PostalCode]")]
        public String EmployeePostalCode
        {
            get { return Fields.EmployeePostalCode[this]; }
            set { Fields.EmployeePostalCode[this] = value; }
        }

        [DisplayName("Employee Country"), Expression("jEmployee.[Country]")]
        public String EmployeeCountry
        {
            get { return Fields.EmployeeCountry[this]; }
            set { Fields.EmployeeCountry[this] = value; }
        }

        [DisplayName("Employee Home Phone"), Expression("jEmployee.[HomePhone]")]
        public String EmployeeHomePhone
        {
            get { return Fields.EmployeeHomePhone[this]; }
            set { Fields.EmployeeHomePhone[this] = value; }
        }

        [DisplayName("Employee Extension"), Expression("jEmployee.[Extension]")]
        public String EmployeeExtension
        {
            get { return Fields.EmployeeExtension[this]; }
            set { Fields.EmployeeExtension[this] = value; }
        }

        [DisplayName("Employee Photo"), Expression("jEmployee.[Photo]")]
        public Stream EmployeePhoto
        {
            get { return Fields.EmployeePhoto[this]; }
            set { Fields.EmployeePhoto[this] = value; }
        }

        [DisplayName("Employee Notes"), Expression("jEmployee.[Notes]")]
        public String EmployeeNotes
        {
            get { return Fields.EmployeeNotes[this]; }
            set { Fields.EmployeeNotes[this] = value; }
        }

        [DisplayName("Employee Reports To"), Expression("jEmployee.[ReportsTo]")]
        public Int32? EmployeeReportsTo
        {
            get { return Fields.EmployeeReportsTo[this]; }
            set { Fields.EmployeeReportsTo[this] = value; }
        }

        [DisplayName("Employee Photo Path"), Expression("jEmployee.[PhotoPath]")]
        public String EmployeePhotoPath
        {
            get { return Fields.EmployeePhotoPath[this]; }
            set { Fields.EmployeePhotoPath[this] = value; }
        }

        [DisplayName("Ship Via Company Name"), Expression("jShipVia.[CompanyName]")]
        public String ShipViaCompanyName
        {
            get { return Fields.ShipViaCompanyName[this]; }
            set { Fields.ShipViaCompanyName[this] = value; }
        }

        [DisplayName("Ship Via Phone"), Expression("jShipVia.[Phone]")]
        public String ShipViaPhone
        {
            get { return Fields.ShipViaPhone[this]; }
            set { Fields.ShipViaPhone[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OrderId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CustomerId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrdersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OrderId;
            public StringField CustomerId;
            public Int32Field EmployeeId;
            public DateTimeField OrderDate;
            public DateTimeField RequiredDate;
            public DateTimeField ShippedDate;
            public Int32Field ShipVia;
            public DecimalField Freight;
            public StringField ShipName;
            public StringField ShipAddress;
            public StringField ShipCity;
            public StringField ShipRegion;
            public StringField ShipPostalCode;
            public StringField ShipCountry;

            public StringField CustomerCompanyName;
            public StringField CustomerContactName;
            public StringField CustomerContactTitle;
            public StringField CustomerAddress;
            public StringField CustomerCity;
            public StringField CustomerRegion;
            public StringField CustomerPostalCode;
            public StringField CustomerCountry;
            public StringField CustomerPhone;
            public StringField CustomerFax;
            public Int32Field CustomerId1;

            public StringField EmployeeLastName;
            public StringField EmployeeFirstName;
            public StringField EmployeeTitle;
            public StringField EmployeeTitleOfCourtesy;
            public DateTimeField EmployeeBirthDate;
            public DateTimeField EmployeeHireDate;
            public StringField EmployeeAddress;
            public StringField EmployeeCity;
            public StringField EmployeeRegion;
            public StringField EmployeePostalCode;
            public StringField EmployeeCountry;
            public StringField EmployeeHomePhone;
            public StringField EmployeeExtension;
            public StreamField EmployeePhoto;
            public StringField EmployeeNotes;
            public Int32Field EmployeeReportsTo;
            public StringField EmployeePhotoPath;

            public StringField ShipViaCompanyName;
            public StringField ShipViaPhone;
        }
    }
}
