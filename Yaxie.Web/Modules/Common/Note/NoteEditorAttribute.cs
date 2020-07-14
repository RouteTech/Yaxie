using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Yaxie.Common.Entities
{
    public partial class NoteEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Yaxie.Common.NoteEditor";

        public NoteEditorAttribute()
            : base(Key)
        {
        }
    }
}