using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Extensibility;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Yaxie.Lookups
{
    [LookupScript("DelimiterLookup")]
    public class DelimiterLookup : RowLookupScript<DelimiterLookup.DelimiterRow>
    {
        public DelimiterLookup()
        {
            IdField = DelimiterRow.Fields.DelimiterId.PropertyName;
            TextField = DelimiterRow.Fields.Name.PropertyName;
            Permission = "*";
        }

        protected override List<DelimiterRow> GetItems()
        {
            List<DelimiterRow> delimiterList = new List<DelimiterRow>();
            DelimiterRow delimiterRow = new DelimiterRow
            {
                DelimiterId = 1,
                Name = "Comma separated values"
            };
            delimiterList.Add(delimiterRow);
            delimiterRow = new DelimiterRow
            {
                DelimiterId = 2,
                Name = "Tab separated values"
            };
            delimiterList.Add(delimiterRow);
            delimiterRow = new DelimiterRow
            {
                DelimiterId = 3,
                Name = "Space separated values"
            };
            delimiterList.Add(delimiterRow);
            return delimiterList;
        }

        public sealed class DelimiterRow : Row, IIdRow, INameRow
        {
            [DisplayName("Delimiter Id"), Identity]
            public Int32? DelimiterId
            {
                get { return Fields.DelimiterId[this]; }
                set { Fields.DelimiterId[this] = value; }
            }

            [DisplayName("Name"), Size(100), NotNull, QuickSearch]
            public String Name
            {
                get { return Fields.Name[this]; }
                set { Fields.Name[this] = value; }
            }          

            IIdField IIdRow.IdField
            {
                get { return Fields.DelimiterId; }
            }

            StringField INameRow.NameField
            {
                get { return Fields.Name; }
            }

            public static readonly RowFields Fields = new RowFields().Init();

            public DelimiterRow()
                : base(Fields)
            {
            }

            public class RowFields : RowFieldsBase
            {
                public Int32Field DelimiterId;
                public StringField Name;
            }
        }
    }
}
