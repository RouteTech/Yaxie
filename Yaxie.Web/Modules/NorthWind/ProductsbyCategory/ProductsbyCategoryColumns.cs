
namespace Yaxie.NorthWind.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("NorthWind.ProductsbyCategory")]
    [BasedOnRow(typeof(Entities.ProductsbyCategoryRow), CheckNames = true)]
    public class ProductsbyCategoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String CategoryName { get; set; }
        public String ProductName { get; set; }
        public String QuantityPerUnit { get; set; }
        public Int16 UnitsInStock { get; set; }
        public Boolean Discontinued { get; set; }
    }
}