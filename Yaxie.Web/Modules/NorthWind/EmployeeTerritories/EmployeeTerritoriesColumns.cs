
namespace Yaxie.NorthWind.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("NorthWind.EmployeeTerritories")]
    [BasedOnRow(typeof(Entities.EmployeeTerritoriesRow), CheckNames = true)]
    public class EmployeeTerritoriesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String EmployeeLastName { get; set; }
        [EditLink]
        public String TerritoryTerritoryDescription { get; set; }
    }
}