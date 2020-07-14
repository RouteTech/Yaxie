﻿
namespace Yaxie.NorthWind.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("NorthWind.Notes")]
    [BasedOnRow(typeof(Entities.NotesRow), CheckNames = true)]
    public class NotesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 NoteId { get; set; }
        [EditLink]
        public String EntityType { get; set; }
        public Int64 EntityId { get; set; }
        public String Text { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
    }
}