
namespace Yaxie.Common.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Common.ImportWizard")]
    [BasedOnRow(typeof(Entities.ImportWizardRow), CheckNames = true)]
    public class ImportWizardColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ImportWizardId { get; set; }
        public String ImportTypeDescription { get; set; }
        [EditLink]
        public String Description { get; set; }
        public DateTime LastRunDate { get; set; }
    }
}