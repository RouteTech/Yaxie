
namespace Yaxie.NorthWind.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("NorthWind.EmployeeTerritories")]
    [BasedOnRow(typeof(Entities.EmployeeTerritoriesRow), CheckNames = true)]
    public class EmployeeTerritoriesForm
    {
        public String TerritoryId { get; set; }
    }
}