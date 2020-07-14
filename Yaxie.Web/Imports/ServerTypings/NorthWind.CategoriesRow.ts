namespace Yaxie.NorthWind {
    export interface CategoriesRow {
        CategoryId?: number;
        CategoryName?: string;
        Description?: string;
        Picture?: number[];
    }

    export namespace CategoriesRow {
        export const idProperty = 'CategoryId';
        export const nameProperty = 'CategoryName';
        export const localTextPrefix = 'NorthWind.Categories';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CategoryId = "CategoryId",
            CategoryName = "CategoryName",
            Description = "Description",
            Picture = "Picture"
        }
    }
}
