
/*************************************************************************************************
  Required Notice: Copyright (C) RouteTech.com. 
  This software is licensed under PolyForm Noncommercial License 1.0.0 
  and may only be used for noncommercial purposes 
  https://polyformproject.org/licenses/noncommercial/1.0.0/
  A commercial license to use this software can be purchased at https://routetech.com
 *************************************************************************************************
  Date               Author                       Change
 *************************************************************************************************
  01/01/2020         RouteTech.com           Initial release Yaxie
 *************************************************************************************************/
namespace Yaxie.Common.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Common"), TableName("[dbo].[ImportWizard]")]
    [DisplayName("Import Wizard"), InstanceName("Import Wizard")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class ImportWizardRow : Row, IIdRow, INameRow
    {
        [DisplayName("Import Wizard Id"), Identity]
        public Int32? ImportWizardId
        {
            get { return Fields.ImportWizardId[this]; }
            set { Fields.ImportWizardId[this] = value; }
        }

        [DisplayName("Import Type"), NotNull, ForeignKey("[dbo].[ImportType]", "ImportTypeId"), LeftJoin("jImportType"), TextualField("ImportTypeDescription")]
        [LookupEditor(typeof(ImportTypeRow), InplaceAdd = true, InplaceAddPermission = "Administration.General")]
        [DefaultValue(4), LookupInclude]
        public Int32? ImportTypeId
        {
            get { return Fields.ImportTypeId[this]; }
            set { Fields.ImportTypeId[this] = value; }
        }

        [DisplayName("Import Source Id")]
        [LookupEditor(typeof(ImportSourceRow), InplaceAdd = true, InplaceAddPermission = "Administration.General")]
        public Int32? ImportSourceId
        {
            get { return Fields.ImportSourceId[this]; }
            set { Fields.ImportSourceId[this] = value; }
        }

        [DisplayName("Description"), Size(255), NotNull, QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Last Run Date")]
        [DateTimeEditor]
        public DateTime? LastRunDate
        {
            get { return Fields.LastRunDate[this]; }
            set { Fields.LastRunDate[this] = value; }
        }

        [DisplayName("Field Match List")]
        [Required]
        public String FieldMatchList
        {
            get { return Fields.FieldMatchList[this]; }
            set { Fields.FieldMatchList[this] = value; }
        }

        [DisplayName("Field Delimiter Id")]
        [RadioButtonEditor(LookupKey = "DelimiterLookup")]
        public Int32? FieldDelimiterId
        {
            get { return Fields.FieldDelimiterId[this]; }
            set { Fields.FieldDelimiterId[this] = value; }
        }

        [DisplayName("Start At Row")]
        [IntegerEditor(AllowNegatives = false), DefaultValue(2)]
        public Int32? StartAtRow
        {
            get { return Fields.StartAtRow[this]; }
            set { Fields.StartAtRow[this] = value; }
        }

        [DisplayName("End At Row")]
        [IntegerEditor(AllowNegatives = false), DefaultValue(0)]
        public Int32? EndAtRow
        {
            get { return Fields.EndAtRow[this]; }
            set { Fields.EndAtRow[this] = value; }
        }

        [DisplayName("Row Error Count"), NotNull]
        [IntegerEditor, DefaultValue(0)]
        public Int32? RowErrorCount
        {
            get { return Fields.RowErrorCount[this]; }
            set { Fields.RowErrorCount[this] = value; }
        }

        [DisplayName("Column Error Count"), NotNull]
        [IntegerEditor, DefaultValue(0)]
        public Int32? ColumnErrorCount
        {
            get { return Fields.ColumnErrorCount[this]; }
            set { Fields.ColumnErrorCount[this] = value; }
        }

        [DisplayName("Key Type"), Size(10)]
        public String KeyType
        {
            get { return Fields.KeyType[this]; }
            set { Fields.KeyType[this] = value; }
        }

        [DisplayName("Key Column")]
        [IntegerEditor, DefaultValue(1)]
        public Int32? KeyColumn
        {
            get { return Fields.KeyColumn[this]; }
            set { Fields.KeyColumn[this] = value; }
        }

        [DisplayName("Match On Labels"), NotNull]
        [Required, DefaultValue(0)]
        public Boolean? MatchOnLabels
        {
            get { return Fields.MatchOnLabels[this]; }
            set { Fields.MatchOnLabels[this] = value; }
        }

        [DisplayName("Match On Field Names"), NotNull]
        [Required, DefaultValue(1)]
        public Boolean? MatchOnFieldNames
        {
            get { return Fields.MatchOnFieldNames[this]; }
            set { Fields.MatchOnFieldNames[this] = value; }
        }

        [DisplayName("Source Directory"), Size(255)]
        public String SourceDirectory
        {
            get { return Fields.SourceDirectory[this]; }
            set { Fields.SourceDirectory[this] = value; }
        }

        [DisplayName("Target Database"), Size(255), NotNull]
        [LookupEditor(typeof(Lookups.TableLookup))]
        public String TargetDatabase
        {
            get { return Fields.TargetDatabase[this]; }
            set { Fields.TargetDatabase[this] = value; }
        }

        [DisplayName("Import File List")]
        [MultipleFileUploadEditor]
        [Required]
        public String ImportFileList
        {
            get { return Fields.ImportFileList[this]; }
            set { Fields.ImportFileList[this] = value; }
        }

        [DisplayName("Import Type Description"), Expression("jImportType.[Description]")]
        public String ImportTypeDescription
        {
            get { return Fields.ImportTypeDescription[this]; }
            set { Fields.ImportTypeDescription[this] = value; }
        }

        [DisplayName("Field Matches")]
        public String FieldMatchDisplay
        {
            get { return Fields.FieldMatchDisplay[this]; }
            set { Fields.FieldMatchDisplay[this] = value; }
        }


        [NoteEditor, NotMapped]
        public List<NoteRow> NoteList
        {
            get { return Fields.NoteList[this]; }
            set { Fields.NoteList[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ImportWizardId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ImportWizardRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ImportWizardId;
            public Int32Field ImportTypeId;
            public Int32Field ImportSourceId;
            public StringField Description;
            public DateTimeField LastRunDate;
            public Int32Field FieldDelimiterId;
            public Int32Field StartAtRow;
            public Int32Field EndAtRow;
            public Int32Field RowErrorCount;
            public Int32Field ColumnErrorCount;
            public StringField KeyType;
            public Int32Field KeyColumn;
            public BooleanField MatchOnLabels;
            public BooleanField MatchOnFieldNames;
            public StringField SourceDirectory;
            public StringField TargetDatabase;
            public StringField ImportFileList;

            public StringField FieldMatchList;

            public StringField FieldMatchDisplay;
            public RowListField<NoteRow> NoteList;

            public StringField ImportTypeDescription;
        }
    }
}
