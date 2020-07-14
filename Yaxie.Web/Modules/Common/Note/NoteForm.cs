
namespace Yaxie.Common.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Common.Note")]
    [BasedOnRow(typeof(Entities.NoteRow), CheckNames = true)]
    public class NoteForm
    {
        public String EntityType { get; set; }
        public Int64 EntityId { get; set; }
        public String NoteText { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public String InsertUserDisplayName { get; set; }
    }
}