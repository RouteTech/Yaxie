
namespace Yaxie.Common.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Common.ImportWizardHistory")]
    [BasedOnRow(typeof(Entities.ImportWizardHistoryRow), CheckNames = true)]
    public class ImportWizardHistoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ImportWizardHistoryId { get; set; }
        [EditLink]
        public String ImportWizardDescription { get; set; }
        public DateTime RunDateTime { get; set; }
        public String OriginalFileName { get; set; }
    }
}