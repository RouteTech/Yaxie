namespace Yaxie.Common {
    export interface ImportWizardRow {
        ImportWizardId?: number;
        ImportTypeId?: number;
        ImportSourceId?: number;
        Description?: string;
        LastRunDate?: string;
        FieldDelimiterId?: number;
        StartAtRow?: number;
        EndAtRow?: number;
        RowErrorCount?: number;
        ColumnErrorCount?: number;
        KeyType?: string;
        KeyColumn?: number;
        MatchOnLabels?: boolean;
        MatchOnFieldNames?: boolean;
        ArchiveFolder?: string;
        SourceDirectory?: string;
        TargetDatabase?: string;
        ErrorList?: string;
        ImportFileList?: string;
        FieldMatchList?: string;
        FieldMatchDisplay?: string;
        NoteList?: NoteRow[];
        ImportTypeDescription?: string;
    }

    export namespace ImportWizardRow {
        export const idProperty = 'ImportWizardId';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Common.ImportWizard';
        export const lookupKey = 'Common.ImportWizard';

        export function getLookup(): Q.Lookup<ImportWizardRow> {
            return Q.getLookup<ImportWizardRow>('Common.ImportWizard');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ImportWizardId = "ImportWizardId",
            ImportTypeId = "ImportTypeId",
            ImportSourceId = "ImportSourceId",
            Description = "Description",
            LastRunDate = "LastRunDate",
            FieldDelimiterId = "FieldDelimiterId",
            StartAtRow = "StartAtRow",
            EndAtRow = "EndAtRow",
            RowErrorCount = "RowErrorCount",
            ColumnErrorCount = "ColumnErrorCount",
            KeyType = "KeyType",
            KeyColumn = "KeyColumn",
            MatchOnLabels = "MatchOnLabels",
            MatchOnFieldNames = "MatchOnFieldNames",
            ArchiveFolder = "ArchiveFolder",
            SourceDirectory = "SourceDirectory",
            TargetDatabase = "TargetDatabase",
            ErrorList = "ErrorList",
            ImportFileList = "ImportFileList",
            FieldMatchList = "FieldMatchList",
            FieldMatchDisplay = "FieldMatchDisplay",
            NoteList = "NoteList",
            ImportTypeDescription = "ImportTypeDescription"
        }
    }
}
