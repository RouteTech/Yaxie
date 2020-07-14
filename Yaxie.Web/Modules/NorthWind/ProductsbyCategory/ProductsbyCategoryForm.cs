
namespace Yaxie.NorthWind.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("NorthWind.ProductsbyCategory")]
    [BasedOnRow(typeof(Entities.ProductsbyCategoryRow), CheckNames = true)]
    public class ProductsbyCategoryForm
    {
        public String ProductName { get; set; }
        public String QuantityPerUnit { get; set; }
        public Int16 UnitsInStock { get; set; }
        public Boolean Discontinued { get; set; }
    }
}