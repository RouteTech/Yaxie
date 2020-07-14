
namespace Yaxie.Common.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Common.Note")]
    [BasedOnRow(typeof(Entities.NoteRow), CheckNames = true)]
    public class NoteColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 NoteId { get; set; }
        [EditLink]
        public String EntityType { get; set; }
        public Int64 EntityId { get; set; }
        public String NoteText { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public String InsertUserDisplayName { get; set; }
    }
}