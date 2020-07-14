using FluentMigrator;
using FluentMigrator.Runner.Extensions;
using System;

namespace Yaxie.Migrations.DefaultDB
{

    [Migration(20141103140001)]
    public class DefaultDB_20141103_140001_Yaxie : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId64("Note", "NoteId", s => s
                 .WithColumn("EntityType").AsString(MigrationConstants.NameLength).NotNullable()
                 .WithColumn("EntityId").AsInt64().NotNullable()
                 .WithColumn("NoteText").AsString(Int32.MaxValue).NotNullable()
                 .WithColumn("InsertUserId").AsInt32().NotNullable()
                 .WithColumn("InsertDate").AsDateTime().NotNullable()
                 .WithColumn("InsertUserDisplayName").AsString(60).NotNullable(), checkExists: true);

            Create.Table("ImportType").InSchema("dbo")
                .WithColumn("ImportTypeId").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("Description").AsString(MigrationConstants.DescriptionLength).Nullable();

            Create.Table("ImportSource").InSchema("dbo")
                .WithColumn("ImportSourceId").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("Description").AsString(MigrationConstants.DescriptionLength).Nullable();

            Create.Table("ImportWizard").InSchema("dbo")
                .WithColumn("ImportWizardId").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("ImportTypeId").AsInt32().NotNullable()
                    .ForeignKey("ImportType", "ImportTypeId")
                .WithColumn("ImportSourceId").AsInt32().Nullable()
                    .ForeignKey("ImportSource", "ImportSourceId")
                .WithColumn("Description").AsString(MigrationConstants.DescriptionLength).NotNullable()
                .WithColumn("LastRunDate").AsDateTime().Nullable()
                .WithColumn("FieldMatchList").AsString(Int32.MaxValue).Nullable()
                .WithColumn("FieldMatchDisplay").AsString(Int32.MaxValue).Nullable()
                .WithColumn("FieldDelimiterId").AsInt32().Nullable()
                .WithColumn("StartAtRow").AsInt32().Nullable()
                .WithColumn("EndAtRow").AsInt32().Nullable()
                .WithColumn("RowErrorCount").AsInt32().NotNullable()
                .WithColumn("ColumnErrorCount").AsInt32().NotNullable()
                .WithColumn("KeyType").AsString(10).Nullable()
                .WithColumn("KeyColumn").AsInt32().Nullable()
                .WithColumn("MatchOnLabels").AsBoolean().NotNullable()
                .WithColumn("MatchOnFieldNames").AsBoolean().NotNullable()
                .WithColumn("ArchiveFolder").AsString(MigrationConstants.PathLength).Nullable()
                .WithColumn("SourceDirectory").AsString(MigrationConstants.PathLength).Nullable()
                .WithColumn("TargetDatabase").AsString(MigrationConstants.PathLength).NotNullable()
                .WithColumn("ErrorList").AsString(Int32.MaxValue).Nullable()
                .WithColumn("ImportFileList").AsString(Int32.MaxValue).Nullable()
                .WithColumn("NoteId").AsInt32().Nullable();

            InsertImportTypes();
        }

        private void InsertImportTypes()
        {
            Insert.IntoTable("ImportType").WithIdentityInsert().Row(new
            {
                ImportTypeId = 1,
                Description = "Text File (TXT)"
            });

            Insert.IntoTable("ImportType").WithIdentityInsert().Row(new
            {
                ImportTypeId = 2,
                Description = "Comma Separated Value File (CSV)"
            });

            Insert.IntoTable("ImportType").WithIdentityInsert().Row(new
            {
                ImportTypeId = 3,
                Description = "Microsoft Access Database (MDB)"
            });

            Insert.IntoTable("ImportType").WithIdentityInsert().Row(new
            {
                ImportTypeId = 4,
                Description = "Microsoft Excel (XLSX)"
            });

            Insert.IntoTable("ImportType").WithIdentityInsert().Row(new
            {
                ImportTypeId = 5,
                Description = "Microsoft Excel 5.0 (XL5)"
            });

            Insert.IntoTable("ImportType").WithIdentityInsert().Row(new
            {
                ImportTypeId = 6,
                Description = "Microsoft Excel 97 (XLS)"
            });

            Insert.IntoTable("ImportType").WithIdentityInsert().Row(new
            {
                ImportTypeId = 7,
                Description = "Microsoft Excel 2.0,3.0,and 4.0 (XLS)"
            });

            Insert.IntoTable("ImportType").WithIdentityInsert().Row(new
            {
                ImportTypeId = 8,
                Description = "Framework II (FW2)"
            });

            Insert.IntoTable("ImportType").WithIdentityInsert().Row(new
            {
                ImportTypeId = 9,
                Description = "Multiplan 4.1 (MOD)"
            });

            Insert.IntoTable("ImportType").WithIdentityInsert().Row(new
            {
                ImportTypeId = 10,
                Description = "Paradox 3.5 and 4.0 (DB)"
            });

            Insert.IntoTable("ImportType").WithIdentityInsert().Row(new
            {
                ImportTypeId = 11,
                Description = "RapidFile (RPD)"
            });

            Insert.IntoTable("ImportType").WithIdentityInsert().Row(new
            {
                ImportTypeId = 12,
                Description = "Lotus 1-2-3 3.x (WK3)"
            });

            Insert.IntoTable("ImportType").WithIdentityInsert().Row(new
            {
                ImportTypeId = 13,
                Description = "Lotus 1-2-3 2.x (WK1)"
            });

            Insert.IntoTable("ImportType").WithIdentityInsert().Row(new
            {
                ImportTypeId = 14,
                Description = "Lotus 1-2-3 1-A (WKS)"
            });

            Insert.IntoTable("ImportType").WithIdentityInsert().Row(new
            {
                ImportTypeId = 15,
                Description = "Symphony 1.10(WR1)"
            });

            Insert.IntoTable("ImportType").WithIdentityInsert().Row(new
            {
                ImportTypeId = 16,
                Description = "Symphony 1.01(WRK)"
            });

            Insert.IntoTable("ImportType").WithIdentityInsert().Row(new
            {
                ImportTypeId = 17,
                Description = "QuickBooks OnLine"
            });

            Insert.IntoTable("ImportType").WithIdentityInsert().Row(new
            {
                ImportTypeId = 18,
                Description = "QuickBooks (IIF)"
            });

            Insert.IntoTable("ImportType").WithIdentityInsert().Row(new
            {
                ImportTypeId = 19,
                Description = "QuickBooks (SDK)"
            });
        }
    }
}