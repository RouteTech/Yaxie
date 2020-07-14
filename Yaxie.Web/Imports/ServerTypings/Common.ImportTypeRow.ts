namespace Yaxie.Common {
    export interface ImportTypeRow {
        ImportTypeId?: number;
        Description?: string;
    }

    export namespace ImportTypeRow {
        export const idProperty = 'ImportTypeId';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Common.ImportType';
        export const lookupKey = 'Common.ImportType';

        export function getLookup(): Q.Lookup<ImportTypeRow> {
            return Q.getLookup<ImportTypeRow>('Common.ImportType');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ImportTypeId = "ImportTypeId",
            Description = "Description"
        }
    }
}
