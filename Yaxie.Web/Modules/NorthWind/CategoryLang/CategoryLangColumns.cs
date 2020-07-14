
namespace Yaxie.NorthWind.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("NorthWind.CategoryLang")]
    [BasedOnRow(typeof(Entities.CategoryLangRow), CheckNames = true)]
    public class CategoryLangColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 CategoryId { get; set; }
        public Int32 LanguageId { get; set; }
        [EditLink]
        public String CategoryName { get; set; }
        public String Description { get; set; }
    }
}