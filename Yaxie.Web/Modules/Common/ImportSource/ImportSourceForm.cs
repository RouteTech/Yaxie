
namespace Yaxie.Common.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Common.ImportSource")]
    [BasedOnRow(typeof(Entities.ImportSourceRow), CheckNames = true)]
    public class ImportSourceForm
    {
        public String Description { get; set; }
    }
}