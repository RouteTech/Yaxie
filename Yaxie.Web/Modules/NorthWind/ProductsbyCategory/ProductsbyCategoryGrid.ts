
namespace Yaxie.NorthWind {

    @Serenity.Decorators.registerClass()
    export class ProductsbyCategoryGrid extends Serenity.EntityGrid<ProductsbyCategoryRow, any> {
        protected getColumnsKey() { return 'NorthWind.ProductsbyCategory'; }
        protected getDialogType() { return ProductsbyCategoryDialog; }
        protected getIdProperty() { return ProductsbyCategoryRow.idProperty; }
        protected getInsertPermission() { return ProductsbyCategoryRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductsbyCategoryRow.localTextPrefix; }
        protected getService() { return ProductsbyCategoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}