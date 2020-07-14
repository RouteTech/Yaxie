
namespace Yaxie.NorthWind {

    @Serenity.Decorators.registerClass()
    export class CategoryLangDialog extends Serenity.EntityDialog<CategoryLangRow, any> {
        protected getFormKey() { return CategoryLangForm.formKey; }
        protected getIdProperty() { return CategoryLangRow.idProperty; }
        protected getLocalTextPrefix() { return CategoryLangRow.localTextPrefix; }
        protected getNameProperty() { return CategoryLangRow.nameProperty; }
        protected getService() { return CategoryLangService.baseUrl; }
        protected getDeletePermission() { return CategoryLangRow.deletePermission; }
        protected getInsertPermission() { return CategoryLangRow.insertPermission; }
        protected getUpdatePermission() { return CategoryLangRow.updatePermission; }

        protected form = new CategoryLangForm(this.idPrefix);

    }
}