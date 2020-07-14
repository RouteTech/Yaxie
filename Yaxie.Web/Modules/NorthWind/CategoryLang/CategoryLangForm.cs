
namespace Yaxie.NorthWind.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("NorthWind.CategoryLang")]
    [BasedOnRow(typeof(Entities.CategoryLangRow), CheckNames = true)]
    public class CategoryLangForm
    {
        public Int32 CategoryId { get; set; }
        public Int32 LanguageId { get; set; }
        public String CategoryName { get; set; }
        public String Description { get; set; }
    }
}