
namespace Yaxie.Common.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Serenity.Data.Mapping;

    [FormScript("Common.ImportWizard")]
    [BasedOnRow(typeof(Entities.ImportWizardRow), CheckNames = true)]
    public class ImportWizardForm
    {
        [Visible(false)]
        public Int32 ImportWizardId { get; set; }
        public String Description { get; set; }
        public Int32 ImportTypeId { get; set; }
        public String TargetDatabase { get; set; }
        [Required]
        public String[] ImportFileList { get; set; }
        [HalfWidth]
        public Int32 StartAtRow { get; set; }
        [HalfWidth]
        public Int32 EndAtRow { get; set; }
        [DefaultValue(2)]
        public Int32 FieldDelimiterId { get; set; }
        public Int32 ImportSourceId { get; set; }
        [HalfWidth]
        public Int32 RowErrorCount { get; set; }
        [HalfWidth]
        public Int32 ColumnErrorCount { get; set; }
        [HalfWidth]
        public String KeyType { get; set; }
        [HalfWidth]
        public Int32 KeyColumn { get; set; }
        [HalfWidth]
        public Boolean MatchOnLabels { get; set; }
        [HalfWidth]
        public Boolean MatchOnFieldNames { get; set; }
        [TextAreaEditor(Rows = 5)]
        [NotMapped, Required, ReadOnly(true)]
        public String[] FieldMatchDisplay { get; set; }
        [Visible(false)]
        public String[] FieldMatchList { get; set; }
        [Visible(false)]
        public String SourceDirectory { get; set; }
        public DateTime LastRunDate { get; set; }
        //[TextAreaEditor(Rows = 5)]
        //public String[] ErrorList { get; set; }
    }
}