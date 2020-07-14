
namespace Yaxie.NorthWind.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("NorthWind.Invoices")]
    [BasedOnRow(typeof(Entities.InvoicesRow), CheckNames = true)]
    public class InvoicesForm
    {
        public String ShipAddress { get; set; }
        public String ShipCity { get; set; }
        public String ShipRegion { get; set; }
        public String ShipPostalCode { get; set; }
        public String ShipCountry { get; set; }
        public String CustomerId { get; set; }
        public String CustomerName { get; set; }
        public String Address { get; set; }
        public String City { get; set; }
        public String Region { get; set; }
        public String PostalCode { get; set; }
        public String Country { get; set; }
        public String Salesperson { get; set; }
        public Int32 OrderId { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime RequiredDate { get; set; }
        public DateTime ShippedDate { get; set; }
        public String ShipperName { get; set; }
        public Int32 ProductId { get; set; }
        public String ProductName { get; set; }
        public Decimal UnitPrice { get; set; }
        public Int16 Quantity { get; set; }
        public Single Discount { get; set; }
        public Decimal ExtendedPrice { get; set; }
        public Decimal Freight { get; set; }
    }
}