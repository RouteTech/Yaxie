namespace Yaxie.NorthWind {
    export interface RegionRow {
        RegionId?: number;
        RegionDescription?: string;
    }

    export namespace RegionRow {
        export const idProperty = 'RegionId';
        export const nameProperty = 'RegionDescription';
        export const localTextPrefix = 'NorthWind.Region';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            RegionId = "RegionId",
            RegionDescription = "RegionDescription"
        }
    }
}
