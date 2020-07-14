namespace Yaxie.NorthWind {
    export interface TerritoriesRow {
        TerritoryId?: string;
        TerritoryDescription?: string;
        RegionId?: number;
        Id?: number;
        RegionRegionDescription?: string;
    }

    export namespace TerritoriesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'TerritoryId';
        export const localTextPrefix = 'NorthWind.Territories';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            TerritoryId = "TerritoryId",
            TerritoryDescription = "TerritoryDescription",
            RegionId = "RegionId",
            Id = "Id",
            RegionRegionDescription = "RegionRegionDescription"
        }
    }
}
