
namespace Yaxie.NorthWind {

    @Serenity.Decorators.registerClass()
    export class ProductsbyCategoryDialog extends Serenity.EntityDialog<ProductsbyCategoryRow, any> {
        protected getFormKey() { return ProductsbyCategoryForm.formKey; }
        protected getIdProperty() { return ProductsbyCategoryRow.idProperty; }
        protected getLocalTextPrefix() { return ProductsbyCategoryRow.localTextPrefix; }
        protected getNameProperty() { return ProductsbyCategoryRow.nameProperty; }
        protected getService() { return ProductsbyCategoryService.baseUrl; }
        protected getDeletePermission() { return ProductsbyCategoryRow.deletePermission; }
        protected getInsertPermission() { return ProductsbyCategoryRow.insertPermission; }
        protected getUpdatePermission() { return ProductsbyCategoryRow.updatePermission; }

        protected form = new ProductsbyCategoryForm(this.idPrefix);

    }
}