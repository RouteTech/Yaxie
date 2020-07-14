
namespace Yaxie.NorthWind.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("NorthWind"), Module("NorthWind"), TableName("[dbo].[Products by Category]")]
    [DisplayName("Productsby Category"), InstanceName("Productsby Category")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ProductsbyCategoryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Category Name"), Size(15), NotNull, QuickSearch]
        public String CategoryName
        {
            get { return Fields.CategoryName[this]; }
            set { Fields.CategoryName[this] = value; }
        }

        [DisplayName("Product Name"), Size(40), NotNull]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }

        [DisplayName("Quantity Per Unit"), Size(20)]
        public String QuantityPerUnit
        {
            get { return Fields.QuantityPerUnit[this]; }
            set { Fields.QuantityPerUnit[this] = value; }
        }

        [DisplayName("Units In Stock")]
        public Int16? UnitsInStock
        {
            get { return Fields.UnitsInStock[this]; }
            set { Fields.UnitsInStock[this] = value; }
        }

        [DisplayName("Discontinued"), NotNull]
        public Boolean? Discontinued
        {
            get { return Fields.Discontinued[this]; }
            set { Fields.Discontinued[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CategoryName; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CategoryName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductsbyCategoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField CategoryName;
            public StringField ProductName;
            public StringField QuantityPerUnit;
            public Int16Field UnitsInStock;
            public BooleanField Discontinued;
        }
    }
}
