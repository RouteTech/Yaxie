
namespace Yaxie.NorthWind.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("NorthWind"), Module("NorthWind"), TableName("[dbo].[Employees]")]
    [DisplayName("Employees"), InstanceName("Employees")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class EmployeesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Employee Id"), Column("EmployeeID"), Identity]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("Last Name"), Size(20), NotNull, QuickSearch]
        public String LastName
        {
            get { return Fields.LastName[this]; }
            set { Fields.LastName[this] = value; }
        }

        [DisplayName("First Name"), Size(10), NotNull]
        public String FirstName
        {
            get { return Fields.FirstName[this]; }
            set { Fields.FirstName[this] = value; }
        }

        [DisplayName("Title"), Size(30)]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Title Of Courtesy"), Size(25)]
        public String TitleOfCourtesy
        {
            get { return Fields.TitleOfCourtesy[this]; }
            set { Fields.TitleOfCourtesy[this] = value; }
        }

        [DisplayName("Birth Date")]
        public DateTime? BirthDate
        {
            get { return Fields.BirthDate[this]; }
            set { Fields.BirthDate[this] = value; }
        }

        [DisplayName("Hire Date")]
        public DateTime? HireDate
        {
            get { return Fields.HireDate[this]; }
            set { Fields.HireDate[this] = value; }
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

        [DisplayName("Home Phone"), Size(24)]
        public String HomePhone
        {
            get { return Fields.HomePhone[this]; }
            set { Fields.HomePhone[this] = value; }
        }

        [DisplayName("Extension"), Size(4)]
        public String Extension
        {
            get { return Fields.Extension[this]; }
            set { Fields.Extension[this] = value; }
        }

        [DisplayName("Photo"), Size(2147483647)]
        public Stream Photo
        {
            get { return Fields.Photo[this]; }
            set { Fields.Photo[this] = value; }
        }

        [DisplayName("Notes"), Size(1073741823)]
        public String Notes
        {
            get { return Fields.Notes[this]; }
            set { Fields.Notes[this] = value; }
        }

        [DisplayName("Reports To"), ForeignKey("[dbo].[Employees]", "EmployeeID"), LeftJoin("jReportsTo"), TextualField("ReportsToLastName")]
        public Int32? ReportsTo
        {
            get { return Fields.ReportsTo[this]; }
            set { Fields.ReportsTo[this] = value; }
        }

        [DisplayName("Photo Path"), Size(255)]
        public String PhotoPath
        {
            get { return Fields.PhotoPath[this]; }
            set { Fields.PhotoPath[this] = value; }
        }

        [DisplayName("Reports To Last Name"), Expression("jReportsTo.[LastName]")]
        public String ReportsToLastName
        {
            get { return Fields.ReportsToLastName[this]; }
            set { Fields.ReportsToLastName[this] = value; }
        }

        [DisplayName("Reports To First Name"), Expression("jReportsTo.[FirstName]")]
        public String ReportsToFirstName
        {
            get { return Fields.ReportsToFirstName[this]; }
            set { Fields.ReportsToFirstName[this] = value; }
        }

        [DisplayName("Reports To Title"), Expression("jReportsTo.[Title]")]
        public String ReportsToTitle
        {
            get { return Fields.ReportsToTitle[this]; }
            set { Fields.ReportsToTitle[this] = value; }
        }

        [DisplayName("Reports To Title Of Courtesy"), Expression("jReportsTo.[TitleOfCourtesy]")]
        public String ReportsToTitleOfCourtesy
        {
            get { return Fields.ReportsToTitleOfCourtesy[this]; }
            set { Fields.ReportsToTitleOfCourtesy[this] = value; }
        }

        [DisplayName("Reports To Birth Date"), Expression("jReportsTo.[BirthDate]")]
        public DateTime? ReportsToBirthDate
        {
            get { return Fields.ReportsToBirthDate[this]; }
            set { Fields.ReportsToBirthDate[this] = value; }
        }

        [DisplayName("Reports To Hire Date"), Expression("jReportsTo.[HireDate]")]
        public DateTime? ReportsToHireDate
        {
            get { return Fields.ReportsToHireDate[this]; }
            set { Fields.ReportsToHireDate[this] = value; }
        }

        [DisplayName("Reports To Address"), Expression("jReportsTo.[Address]")]
        public String ReportsToAddress
        {
            get { return Fields.ReportsToAddress[this]; }
            set { Fields.ReportsToAddress[this] = value; }
        }

        [DisplayName("Reports To City"), Expression("jReportsTo.[City]")]
        public String ReportsToCity
        {
            get { return Fields.ReportsToCity[this]; }
            set { Fields.ReportsToCity[this] = value; }
        }

        [DisplayName("Reports To Region"), Expression("jReportsTo.[Region]")]
        public String ReportsToRegion
        {
            get { return Fields.ReportsToRegion[this]; }
            set { Fields.ReportsToRegion[this] = value; }
        }

        [DisplayName("Reports To Postal Code"), Expression("jReportsTo.[PostalCode]")]
        public String ReportsToPostalCode
        {
            get { return Fields.ReportsToPostalCode[this]; }
            set { Fields.ReportsToPostalCode[this] = value; }
        }

        [DisplayName("Reports To Country"), Expression("jReportsTo.[Country]")]
        public String ReportsToCountry
        {
            get { return Fields.ReportsToCountry[this]; }
            set { Fields.ReportsToCountry[this] = value; }
        }

        [DisplayName("Reports To Home Phone"), Expression("jReportsTo.[HomePhone]")]
        public String ReportsToHomePhone
        {
            get { return Fields.ReportsToHomePhone[this]; }
            set { Fields.ReportsToHomePhone[this] = value; }
        }

        [DisplayName("Reports To Extension"), Expression("jReportsTo.[Extension]")]
        public String ReportsToExtension
        {
            get { return Fields.ReportsToExtension[this]; }
            set { Fields.ReportsToExtension[this] = value; }
        }

        [DisplayName("Reports To Photo"), Expression("jReportsTo.[Photo]")]
        public Stream ReportsToPhoto
        {
            get { return Fields.ReportsToPhoto[this]; }
            set { Fields.ReportsToPhoto[this] = value; }
        }

        [DisplayName("Reports To Notes"), Expression("jReportsTo.[Notes]")]
        public String ReportsToNotes
        {
            get { return Fields.ReportsToNotes[this]; }
            set { Fields.ReportsToNotes[this] = value; }
        }

        [DisplayName("Reports To"), Expression("jReportsTo.[ReportsTo]")]
        public Int32? ReportsTo1
        {
            get { return Fields.ReportsTo1[this]; }
            set { Fields.ReportsTo1[this] = value; }
        }

        [DisplayName("Reports To Photo Path"), Expression("jReportsTo.[PhotoPath]")]
        public String ReportsToPhotoPath
        {
            get { return Fields.ReportsToPhotoPath[this]; }
            set { Fields.ReportsToPhotoPath[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EmployeeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.LastName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmployeesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EmployeeId;
            public StringField LastName;
            public StringField FirstName;
            public StringField Title;
            public StringField TitleOfCourtesy;
            public DateTimeField BirthDate;
            public DateTimeField HireDate;
            public StringField Address;
            public StringField City;
            public StringField Region;
            public StringField PostalCode;
            public StringField Country;
            public StringField HomePhone;
            public StringField Extension;
            public StreamField Photo;
            public StringField Notes;
            public Int32Field ReportsTo;
            public StringField PhotoPath;

            public StringField ReportsToLastName;
            public StringField ReportsToFirstName;
            public StringField ReportsToTitle;
            public StringField ReportsToTitleOfCourtesy;
            public DateTimeField ReportsToBirthDate;
            public DateTimeField ReportsToHireDate;
            public StringField ReportsToAddress;
            public StringField ReportsToCity;
            public StringField ReportsToRegion;
            public StringField ReportsToPostalCode;
            public StringField ReportsToCountry;
            public StringField ReportsToHomePhone;
            public StringField ReportsToExtension;
            public StreamField ReportsToPhoto;
            public StringField ReportsToNotes;
            public Int32Field ReportsTo1;
            public StringField ReportsToPhotoPath;
        }
    }
}
