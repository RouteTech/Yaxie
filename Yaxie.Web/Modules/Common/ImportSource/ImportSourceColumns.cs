
namespace Yaxie.Common.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Common.ImportSource")]
    [BasedOnRow(typeof(Entities.ImportSourceRow), CheckNames = true)]
    public class ImportSourceColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ImportSourceId { get; set; }
        [EditLink]
        public String Description { get; set; }
    }
}