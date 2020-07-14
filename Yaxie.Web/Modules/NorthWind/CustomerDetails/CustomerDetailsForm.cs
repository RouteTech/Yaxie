
namespace Yaxie.NorthWind.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("NorthWind.CustomerDetails")]
    [BasedOnRow(typeof(Entities.CustomerDetailsRow), CheckNames = true)]
    public class CustomerDetailsForm
    {
        public DateTime LastContactDate { get; set; }
        public Int32 LastContactedBy { get; set; }
        public String Email { get; set; }
        public Boolean SendBulletin { get; set; }
    }
}