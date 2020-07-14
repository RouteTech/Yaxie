
namespace Yaxie.NorthWind.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("NorthWind.Region")]
    [BasedOnRow(typeof(Entities.RegionRow), CheckNames = true)]
    public class RegionForm
    {
        public String RegionDescription { get; set; }
    }
}