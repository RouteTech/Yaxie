
namespace Yaxie.Common.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Common.ImportWizardHistory")]
    [BasedOnRow(typeof(Entities.ImportWizardHistoryRow), CheckNames = true)]
    public class ImportWizardHistoryForm
    {
        public Int32 ImportWizardId { get; set; }
        public DateTime RunDateTime { get; set; }
        public String OriginalFileName { get; set; }
        public String TempFileName { get; set; }
        [TextAreaEditor(Rows = 5)]
        public String ErrorList { get; set; }
        [TextAreaEditor(Rows = 5)]
        public String Results { get; set; }
        public Int32 RowsInserted { get; set; }
        public Int32 RowsUpdated { get; set; }

    }
}