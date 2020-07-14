
namespace Yaxie.NorthWind.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("NorthWind.CustomerDetails")]
    [BasedOnRow(typeof(Entities.CustomerDetailsRow), CheckNames = true)]
    public class CustomerDetailsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public DateTime LastContactDate { get; set; }
        public String LastContactedByLastName { get; set; }
        [EditLink]
        public String Email { get; set; }
        public Boolean SendBulletin { get; set; }
    }
}