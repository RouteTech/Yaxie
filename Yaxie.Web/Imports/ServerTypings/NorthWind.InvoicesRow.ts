namespace Yaxie.NorthWind {
    export interface InvoicesRow {
        ShipName?: string;
        ShipAddress?: string;
        ShipCity?: string;
        ShipRegion?: string;
        ShipPostalCode?: string;
        ShipCountry?: string;
        CustomerId?: string;
        CustomerName?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Salesperson?: string;
        OrderId?: number;
        OrderDate?: string;
        RequiredDate?: string;
        ShippedDate?: string;
        ShipperName?: string;
        ProductId?: number;
        ProductName?: string;
        UnitPrice?: number;
        Quantity?: number;
        Discount?: number;
        ExtendedPrice?: number;
        Freight?: number;
    }

    export namespace InvoicesRow {
        export const idProperty = 'ShipName';
        export const nameProperty = 'ShipName';
        export const localTextPrefix = 'NorthWind.Invoices';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ShipName = "ShipName",
            ShipAddress = "ShipAddress",
            ShipCity = "ShipCity",
            ShipRegion = "ShipRegion",
            ShipPostalCode = "ShipPostalCode",
            ShipCountry = "ShipCountry",
            CustomerId = "CustomerId",
            CustomerName = "CustomerName",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            Salesperson = "Salesperson",
            OrderId = "OrderId",
            OrderDate = "OrderDate",
            RequiredDate = "RequiredDate",
            ShippedDate = "ShippedDate",
            ShipperName = "ShipperName",
            ProductId = "ProductId",
            ProductName = "ProductName",
            UnitPrice = "UnitPrice",
            Quantity = "Quantity",
            Discount = "Discount",
            ExtendedPrice = "ExtendedPrice",
            Freight = "Freight"
        }
    }
}
