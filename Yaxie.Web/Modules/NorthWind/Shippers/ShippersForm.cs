
namespace Yaxie.NorthWind.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("NorthWind.Shippers")]
    [BasedOnRow(typeof(Entities.ShippersRow), CheckNames = true)]
    public class ShippersForm
    {
        public String CompanyName { get; set; }
        public String Phone { get; set; }
    }
}