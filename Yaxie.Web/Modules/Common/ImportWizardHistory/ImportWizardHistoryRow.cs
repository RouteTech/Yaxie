
namespace Yaxie.Common.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Common"), TableName("[dbo].[ImportWizardHistory]")]
    [DisplayName("Import Wizard History"), InstanceName("Import Wizard History")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ImportWizardHistoryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Import Wizard History Id"), Identity]
        public Int32? ImportWizardHistoryId
        {
            get { return Fields.ImportWizardHistoryId[this]; }
            set { Fields.ImportWizardHistoryId[this] = value; }
        }

        [DisplayName("Import Wizard"), ForeignKey("[dbo].[ImportWizard]", "ImportWizardId"), LeftJoin("jImportWizard"), TextualField("ImportWizardDescription")]
        public Int32? ImportWizardId
        {
            get { return Fields.ImportWizardId[this]; }
            set { Fields.ImportWizardId[this] = value; }
        }

        [DisplayName("Run Date Time"), NotNull]
        public DateTime? RunDateTime
        {
            get { return Fields.RunDateTime[this]; }
            set { Fields.RunDateTime[this] = value; }
        }

        [DisplayName("Original File Name"), NotNull, QuickSearch]
        public String OriginalFileName
        {
            get { return Fields.OriginalFileName[this]; }
            set { Fields.OriginalFileName[this] = value; }
        }

        [DisplayName("Temp File Name"), NotNull]
        public String TempFileName
        {
            get { return Fields.TempFileName[this]; }
            set { Fields.TempFileName[this] = value; }
        }

        [DisplayName("Error List")]
        public String ErrorList
        {
            get { return Fields.ErrorList[this]; }
            set { Fields.ErrorList[this] = value; }
        }

        [DisplayName("Results")]
        public String Results
        {
            get { return Fields.Results[this]; }
            set { Fields.Results[this] = value; }
        }

        [DisplayName("Rows Inserted")]
        public Int32? RowsInserted
        {
            get { return Fields.RowsInserted[this]; }
            set { Fields.RowsInserted[this] = value; }
        }
        [DisplayName("Rows Updated")]
        public Int32? RowsUpdated
        {
            get { return Fields.RowsUpdated[this]; }
            set { Fields.RowsUpdated[this] = value; }
        }

        [DisplayName("Import Wizard Import Type Id"), Expression("jImportWizard.[ImportTypeId]")]
        public Int32? ImportWizardImportTypeId
        {
            get { return Fields.ImportWizardImportTypeId[this]; }
            set { Fields.ImportWizardImportTypeId[this] = value; }
        }

        [DisplayName("Import Wizard Import Source Id"), Expression("jImportWizard.[ImportSourceId]")]
        public Int32? ImportWizardImportSourceId
        {
            get { return Fields.ImportWizardImportSourceId[this]; }
            set { Fields.ImportWizardImportSourceId[this] = value; }
        }

        [DisplayName("Import Wizard Description"), Expression("jImportWizard.[Description]")]
        public String ImportWizardDescription
        {
            get { return Fields.ImportWizardDescription[this]; }
            set { Fields.ImportWizardDescription[this] = value; }
        }

        [DisplayName("Import Wizard Last Run Date"), Expression("jImportWizard.[LastRunDate]")]
        public DateTime? ImportWizardLastRunDate
        {
            get { return Fields.ImportWizardLastRunDate[this]; }
            set { Fields.ImportWizardLastRunDate[this] = value; }
        }

        [DisplayName("Import Wizard Field Match List"), Expression("jImportWizard.[FieldMatchList]")]
        public String ImportWizardFieldMatchList
        {
            get { return Fields.ImportWizardFieldMatchList[this]; }
            set { Fields.ImportWizardFieldMatchList[this] = value; }
        }

        [DisplayName("Import Wizard Field Match Display"), Expression("jImportWizard.[FieldMatchDisplay]")]
        public String ImportWizardFieldMatchDisplay
        {
            get { return Fields.ImportWizardFieldMatchDisplay[this]; }
            set { Fields.ImportWizardFieldMatchDisplay[this] = value; }
        }

        [DisplayName("Import Wizard Field Delimiter Id"), Expression("jImportWizard.[FieldDelimiterId]")]
        public Int32? ImportWizardFieldDelimiterId
        {
            get { return Fields.ImportWizardFieldDelimiterId[this]; }
            set { Fields.ImportWizardFieldDelimiterId[this] = value; }
        }

        [DisplayName("Import Wizard Start At Row"), Expression("jImportWizard.[StartAtRow]")]
        public Int32? ImportWizardStartAtRow
        {
            get { return Fields.ImportWizardStartAtRow[this]; }
            set { Fields.ImportWizardStartAtRow[this] = value; }
        }

        [DisplayName("Import Wizard End At Row"), Expression("jImportWizard.[EndAtRow]")]
        public Int32? ImportWizardEndAtRow
        {
            get { return Fields.ImportWizardEndAtRow[this]; }
            set { Fields.ImportWizardEndAtRow[this] = value; }
        }

        [DisplayName("Import Wizard Row Error Count"), Expression("jImportWizard.[RowErrorCount]")]
        public Int32? ImportWizardRowErrorCount
        {
            get { return Fields.ImportWizardRowErrorCount[this]; }
            set { Fields.ImportWizardRowErrorCount[this] = value; }
        }

        [DisplayName("Import Wizard Column Error Count"), Expression("jImportWizard.[ColumnErrorCount]")]
        public Int32? ImportWizardColumnErrorCount
        {
            get { return Fields.ImportWizardColumnErrorCount[this]; }
            set { Fields.ImportWizardColumnErrorCount[this] = value; }
        }

        [DisplayName("Import Wizard Key Type"), Expression("jImportWizard.[KeyType]")]
        public String ImportWizardKeyType
        {
            get { return Fields.ImportWizardKeyType[this]; }
            set { Fields.ImportWizardKeyType[this] = value; }
        }

        [DisplayName("Import Wizard Key Column"), Expression("jImportWizard.[KeyColumn]")]
        public Int32? ImportWizardKeyColumn
        {
            get { return Fields.ImportWizardKeyColumn[this]; }
            set { Fields.ImportWizardKeyColumn[this] = value; }
        }

        [DisplayName("Import Wizard Match On Labels"), Expression("jImportWizard.[MatchOnLabels]")]
        public Boolean? ImportWizardMatchOnLabels
        {
            get { return Fields.ImportWizardMatchOnLabels[this]; }
            set { Fields.ImportWizardMatchOnLabels[this] = value; }
        }

        [DisplayName("Import Wizard Match On Field Names"), Expression("jImportWizard.[MatchOnFieldNames]")]
        public Boolean? ImportWizardMatchOnFieldNames
        {
            get { return Fields.ImportWizardMatchOnFieldNames[this]; }
            set { Fields.ImportWizardMatchOnFieldNames[this] = value; }
        }

        [DisplayName("Import Wizard Source Directory"), Expression("jImportWizard.[SourceDirectory]")]
        public String ImportWizardSourceDirectory
        {
            get { return Fields.ImportWizardSourceDirectory[this]; }
            set { Fields.ImportWizardSourceDirectory[this] = value; }
        }

        [DisplayName("Import Wizard Target Database"), Expression("jImportWizard.[TargetDatabase]")]
        public String ImportWizardTargetDatabase
        {
            get { return Fields.ImportWizardTargetDatabase[this]; }
            set { Fields.ImportWizardTargetDatabase[this] = value; }
        }

        [DisplayName("Import Wizard Import File List"), Expression("jImportWizard.[ImportFileList]")]
        public String ImportWizardImportFileList
        {
            get { return Fields.ImportWizardImportFileList[this]; }
            set { Fields.ImportWizardImportFileList[this] = value; }
        }

        [DisplayName("Import Wizard Note Id"), Expression("jImportWizard.[NoteId]")]
        public Int32? ImportWizardNoteId
        {
            get { return Fields.ImportWizardNoteId[this]; }
            set { Fields.ImportWizardNoteId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ImportWizardHistoryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.OriginalFileName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ImportWizardHistoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ImportWizardHistoryId;
            public Int32Field ImportWizardId;
            public DateTimeField RunDateTime;
            public StringField OriginalFileName;
            public StringField TempFileName;
            public StringField ErrorList;
            public StringField Results;
            public Int32Field RowsInserted;
            public Int32Field RowsUpdated;

            public Int32Field ImportWizardImportTypeId;
            public Int32Field ImportWizardImportSourceId;
            public StringField ImportWizardDescription;
            public DateTimeField ImportWizardLastRunDate;
            public StringField ImportWizardFieldMatchList;
            public StringField ImportWizardFieldMatchDisplay;
            public Int32Field ImportWizardFieldDelimiterId;
            public Int32Field ImportWizardStartAtRow;
            public Int32Field ImportWizardEndAtRow;
            public Int32Field ImportWizardRowErrorCount;
            public Int32Field ImportWizardColumnErrorCount;
            public StringField ImportWizardKeyType;
            public Int32Field ImportWizardKeyColumn;
            public BooleanField ImportWizardMatchOnLabels;
            public BooleanField ImportWizardMatchOnFieldNames;
            public StringField ImportWizardSourceDirectory;
            public StringField ImportWizardTargetDatabase;
            public StringField ImportWizardImportFileList;
            public Int32Field ImportWizardNoteId;
        }
    }
}
