
namespace Yaxie.NorthWind.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("NorthWind.Suppliers")]
    [BasedOnRow(typeof(Entities.SuppliersRow), CheckNames = true)]
    public class SuppliersForm
    {
        public String CompanyName { get; set; }
        public String ContactName { get; set; }
        public String ContactTitle { get; set; }
        public String Address { get; set; }
        public String City { get; set; }
        public String Region { get; set; }
        public String PostalCode { get; set; }
        public String Country { get; set; }
        public String Phone { get; set; }
        public String Fax { get; set; }
        public String HomePage { get; set; }
    }
}