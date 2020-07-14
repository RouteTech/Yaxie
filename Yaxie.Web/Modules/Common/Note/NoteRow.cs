
namespace Yaxie.Common.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Common"), TableName("[dbo].[Note]")]
    [DisplayName("Note"), InstanceName("Note")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class NoteRow : Row, IIdRow, INameRow
    {
        [DisplayName("Note Id"), Identity]
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

        [DisplayName("Entity Id"), NotNull]
        public Int64? EntityId
        {
            get { return Fields.EntityId[this]; }
            set { Fields.EntityId[this] = value; }
        }

        [DisplayName("Note Text"), NotNull]
        public String NoteText
        {
            get { return Fields.NoteText[this]; }
            set { Fields.NoteText[this] = value; }
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

        [DisplayName("Insert User Display Name"), Size(60), NotNull]
        public String InsertUserDisplayName
        {
            get { return Fields.InsertUserDisplayName[this]; }
            set { Fields.InsertUserDisplayName[this] = value; }
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

        public NoteRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field NoteId;
            public StringField EntityType;
            public Int64Field EntityId;
            public StringField NoteText;
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
            public StringField InsertUserDisplayName;
        }
    }
}
