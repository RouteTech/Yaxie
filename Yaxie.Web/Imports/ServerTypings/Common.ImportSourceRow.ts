namespace Yaxie.Common {
    export interface ImportSourceRow {
        ImportSourceId?: number;
        Description?: string;
    }

    export namespace ImportSourceRow {
        export const idProperty = 'ImportSourceId';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Common.ImportSource';
        export const lookupKey = 'Common.ImportSource';

        export function getLookup(): Q.Lookup<ImportSourceRow> {
            return Q.getLookup<ImportSourceRow>('Common.ImportSource');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ImportSourceId = "ImportSourceId",
            Description = "Description"
        }
    }
}
