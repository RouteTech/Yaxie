namespace Yaxie.NorthWind {
    export interface CategoryLangRow {
        Id?: number;
        CategoryId?: number;
        LanguageId?: number;
        CategoryName?: string;
        Description?: string;
    }

    export namespace CategoryLangRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CategoryName';
        export const localTextPrefix = 'NorthWind.CategoryLang';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            CategoryId = "CategoryId",
            LanguageId = "LanguageId",
            CategoryName = "CategoryName",
            Description = "Description"
        }
    }
}
