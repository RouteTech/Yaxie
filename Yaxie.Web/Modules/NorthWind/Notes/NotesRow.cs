﻿
namespace Yaxie.NorthWind.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("NorthWind"), Module("NorthWind"), TableName("[dbo].[Notes]")]
    [DisplayName("Notes"), InstanceName("Notes")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class NotesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Note Id"), Column("NoteID"), Identity]
        public Int64? NoteId
        {
            get { return Fields.NoteId[this]; }
            set { Fields.NoteId[this] = value; }
        }

        [DisplayName("Entity Type"), Size(100), NotNull, QuickSearch]
        public String EntityType
        {
            get { return Fields.EntityType[this]; }
            set { Fields.EntityType[this] = value; }
        }

        [DisplayName("Entity Id"), Column("EntityID"), NotNull]
        public Int64? EntityId
        {
            get { return Fields.EntityId[this]; }
            set { Fields.EntityId[this] = value; }
        }

        [DisplayName("Text"), NotNull]
        public String Text
        {
            get { return Fields.Text[this]; }
            set { Fields.Text[this] = value; }
        }

        [DisplayName("Insert User Id"), NotNull]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }

        [DisplayName("Insert Date"), NotNull]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.NoteId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EntityType; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public NotesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field NoteId;
            public StringField EntityType;
            public Int64Field EntityId;
            public StringField Text;
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
        }
    }
}
