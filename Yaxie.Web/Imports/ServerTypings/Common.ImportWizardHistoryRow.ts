namespace Yaxie.Common {
    export interface ImportWizardHistoryRow {
        ImportWizardHistoryId?: number;
        ImportWizardId?: number;
        RunDateTime?: string;
        OriginalFileName?: string;
        TempFileName?: string;
        ErrorList?: string;
        Results?: string;
        RowsInserted?: number;
        RowsUpdated?: number;
        ImportWizardImportTypeId?: number;
        ImportWizardImportSourceId?: number;
        ImportWizardDescription?: string;
        ImportWizardLastRunDate?: string;
        ImportWizardFieldMatchList?: string;
        ImportWizardFieldMatchDisplay?: string;
        ImportWizardFieldDelimiterId?: number;
        ImportWizardStartAtRow?: number;
        ImportWizardEndAtRow?: number;
        ImportWizardRowErrorCount?: number;
        ImportWizardColumnErrorCount?: number;
        ImportWizardKeyType?: string;
        ImportWizardKeyColumn?: number;
        ImportWizardMatchOnLabels?: boolean;
        ImportWizardMatchOnFieldNames?: boolean;
        ImportWizardSourceDirectory?: string;
        ImportWizardTargetDatabase?: string;
        ImportWizardImportFileList?: string;
        ImportWizardNoteId?: number;
    }

    export namespace ImportWizardHistoryRow {
        export const idProperty = 'ImportWizardHistoryId';
        export const nameProperty = 'OriginalFileName';
        export const localTextPrefix = 'Common.ImportWizardHistory';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ImportWizardHistoryId = "ImportWizardHistoryId",
            ImportWizardId = "ImportWizardId",
            RunDateTime = "RunDateTime",
            OriginalFileName = "OriginalFileName",
            TempFileName = "TempFileName",
            ErrorList = "ErrorList",
            Results = "Results",
            RowsInserted = "RowsInserted",
            RowsUpdated = "RowsUpdated",
            ImportWizardImportTypeId = "ImportWizardImportTypeId",
            ImportWizardImportSourceId = "ImportWizardImportSourceId",
            ImportWizardDescription = "ImportWizardDescription",
            ImportWizardLastRunDate = "ImportWizardLastRunDate",
            ImportWizardFieldMatchList = "ImportWizardFieldMatchList",
            ImportWizardFieldMatchDisplay = "ImportWizardFieldMatchDisplay",
            ImportWizardFieldDelimiterId = "ImportWizardFieldDelimiterId",
            ImportWizardStartAtRow = "ImportWizardStartAtRow",
            ImportWizardEndAtRow = "ImportWizardEndAtRow",
            ImportWizardRowErrorCount = "ImportWizardRowErrorCount",
            ImportWizardColumnErrorCount = "ImportWizardColumnErrorCount",
            ImportWizardKeyType = "ImportWizardKeyType",
            ImportWizardKeyColumn = "ImportWizardKeyColumn",
            ImportWizardMatchOnLabels = "ImportWizardMatchOnLabels",
            ImportWizardMatchOnFieldNames = "ImportWizardMatchOnFieldNames",
            ImportWizardSourceDirectory = "ImportWizardSourceDirectory",
            ImportWizardTargetDatabase = "ImportWizardTargetDatabase",
            ImportWizardImportFileList = "ImportWizardImportFileList",
            ImportWizardNoteId = "ImportWizardNoteId"
        }
    }
}
