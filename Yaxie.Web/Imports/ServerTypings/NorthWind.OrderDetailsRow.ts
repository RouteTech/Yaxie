namespace Yaxie.NorthWind {
    export interface OrderDetailsRow {
        OrderId?: number;
        ProductId?: number;
        UnitPrice?: number;
        Quantity?: number;
        Discount?: number;
        DetailId?: number;
        OrderCustomerId?: string;
        OrderEmployeeId?: number;
        OrderOrderDate?: string;
        OrderRequiredDate?: string;
        OrderShippedDate?: string;
        OrderShipVia?: number;
        OrderFreight?: number;
        OrderShipName?: string;
        OrderShipAddress?: string;
        OrderShipCity?: string;
        OrderShipRegion?: string;
        OrderShipPostalCode?: string;
        OrderShipCountry?: string;
        ProductProductName?: string;
        ProductSupplierId?: number;
        ProductCategoryId?: number;
        ProductQuantityPerUnit?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductDiscontinued?: boolean;
        ProductProductImage?: string;
    }

    export namespace OrderDetailsRow {
        export const idProperty = 'DetailId';
        export const localTextPrefix = 'NorthWind.OrderDetails';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            OrderId = "OrderId",
            ProductId = "ProductId",
            UnitPrice = "UnitPrice",
            Quantity = "Quantity",
            Discount = "Discount",
            DetailId = "DetailId",
            OrderCustomerId = "OrderCustomerId",
            OrderEmployeeId = "OrderEmployeeId",
            OrderOrderDate = "OrderOrderDate",
            OrderRequiredDate = "OrderRequiredDate",
            OrderShippedDate = "OrderShippedDate",
            OrderShipVia = "OrderShipVia",
            OrderFreight = "OrderFreight",
            OrderShipName = "OrderShipName",
            OrderShipAddress = "OrderShipAddress",
            OrderShipCity = "OrderShipCity",
            OrderShipRegion = "OrderShipRegion",
            OrderShipPostalCode = "OrderShipPostalCode",
            OrderShipCountry = "OrderShipCountry",
            ProductProductName = "ProductProductName",
            ProductSupplierId = "ProductSupplierId",
            ProductCategoryId = "ProductCategoryId",
            ProductQuantityPerUnit = "ProductQuantityPerUnit",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductDiscontinued = "ProductDiscontinued",
            ProductProductImage = "ProductProductImage"
        }
    }
}
