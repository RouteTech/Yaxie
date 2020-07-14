
namespace Yaxie.NorthWind.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("NorthWind.Territories")]
    [BasedOnRow(typeof(Entities.TerritoriesRow), CheckNames = true)]
    public class TerritoriesColumns
    {
        [EditLink]
        public String TerritoryId { get; set; }
        public String TerritoryDescription { get; set; }
        public String RegionRegionDescription { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
    }
}