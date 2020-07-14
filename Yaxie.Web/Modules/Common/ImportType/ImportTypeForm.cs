
namespace Yaxie.Common.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Common.ImportType")]
    [BasedOnRow(typeof(Entities.ImportTypeRow), CheckNames = true)]
    public class ImportTypeForm
    {
        public String Description { get; set; }
    }
}