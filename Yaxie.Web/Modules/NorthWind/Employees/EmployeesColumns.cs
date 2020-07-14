
namespace Yaxie.NorthWind.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("NorthWind.Employees")]
    [BasedOnRow(typeof(Entities.EmployeesRow), CheckNames = true)]
    public class EmployeesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EmployeeId { get; set; }
        [EditLink]
        public String LastName { get; set; }
        public String FirstName { get; set; }
        public String Title { get; set; }
        public String TitleOfCourtesy { get; set; }
        public DateTime BirthDate { get; set; }
        public DateTime HireDate { get; set; }
        public String Address { get; set; }
        public String City { get; set; }
        public String Region { get; set; }
        public String PostalCode { get; set; }
        public String Country { get; set; }
        public String HomePhone { get; set; }
        public String Extension { get; set; }
        public Stream Photo { get; set; }
        public String Notes { get; set; }
        public String ReportsToLastName { get; set; }
        public String PhotoPath { get; set; }
    }
}