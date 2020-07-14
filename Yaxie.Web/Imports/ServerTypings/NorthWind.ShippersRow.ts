namespace Yaxie.NorthWind {
    export interface ShippersRow {
        ShipperId?: number;
        CompanyName?: string;
        Phone?: string;
    }

    export namespace ShippersRow {
        export const idProperty = 'ShipperId';
        export const nameProperty = 'CompanyName';
        export const localTextPrefix = 'NorthWind.Shippers';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ShipperId = "ShipperId",
            CompanyName = "CompanyName",
            Phone = "Phone"
        }
    }
}
