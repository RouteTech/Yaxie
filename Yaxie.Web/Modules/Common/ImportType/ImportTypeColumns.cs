
namespace Yaxie.Common.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Common.ImportType")]
    [BasedOnRow(typeof(Entities.ImportTypeRow), CheckNames = true)]
    public class ImportTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ImportTypeId { get; set; }
        [EditLink]
        public String Description { get; set; }
    }
}