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
    [LookupScript]
    public class TableLookup : RowLookupScript<TableLookup.TableRow>
    {
        public TableLookup()
        {
            IdField = TableRow.Fields.TableId.PropertyName;
            TextField = TableRow.Fields.Name.PropertyName;
            Permission = "*";
        }

        protected override List<TableRow> GetItems()
        {
            List<TableRow> tableList = new List<TableRow>();

            foreach (var assembly in ExtensibilityHelper.SelfAssemblies)
                foreach (var type in assembly.GetTypes())
                    if (!type.IsAbstract &&
                        type.IsSubclassOf(typeof(Row)))
                    {
                        var instance = (Row)Activator.CreateInstance(type);
                        Type instanceType = instance.GetType();
                        TableRow tableRow = new TableRow
                        {
                            TableId = instanceType.FullName,
                            Name = instanceType.Name.Substring(0,instanceType.Name.IndexOf("Row"))
                        };
                        tableList.Add(tableRow);
                    }
            

            return tableList;
        }

        [ReadPermission(Administration.PermissionKeys.Read)]
        public sealed class TableRow : Row, IIdRow, INameRow
        {
            [DisplayName("Table Id"), Identity]
            public String TableId
            {
                get { return Fields.TableId[this]; }
                set { Fields.TableId[this] = value; }
            }

            [DisplayName("Name"), Size(100), NotNull, QuickSearch]
            public String Name
            {
                get { return Fields.Name[this]; }
                set { Fields.Name[this] = value; }
            }          

            IIdField IIdRow.IdField
            {
                get { return Fields.TableId; }
            }

            StringField INameRow.NameField
            {
                get { return Fields.Name; }
            }

            public static readonly RowFields Fields = new RowFields().Init();

            public TableRow()
                : base(Fields)
            {
            }

            public class RowFields : RowFieldsBase
            {
                public StringField TableId;
                public StringField Name;
            }
        }
    }
}
