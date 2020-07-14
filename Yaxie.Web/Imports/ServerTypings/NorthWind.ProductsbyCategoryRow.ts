namespace Yaxie.NorthWind {
    export interface ProductsbyCategoryRow {
        CategoryName?: string;
        ProductName?: string;
        QuantityPerUnit?: string;
        UnitsInStock?: number;
        Discontinued?: boolean;
    }

    export namespace ProductsbyCategoryRow {
        export const idProperty = 'CategoryName';
        export const nameProperty = 'CategoryName';
        export const localTextPrefix = 'NorthWind.ProductsbyCategory';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CategoryName = "CategoryName",
            ProductName = "ProductName",
            QuantityPerUnit = "QuantityPerUnit",
            UnitsInStock = "UnitsInStock",
            Discontinued = "Discontinued"
        }
    }
}
