
namespace Yaxie.NorthWind.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("NorthWind.Territories")]
    [BasedOnRow(typeof(Entities.TerritoriesRow), CheckNames = true)]
    public class TerritoriesForm
    {
        public String TerritoryId { get; set; }
        public String TerritoryDescription { get; set; }
        public Int32 RegionId { get; set; }
    }
}