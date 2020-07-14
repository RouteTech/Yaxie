
namespace Yaxie.NorthWind {

    @Serenity.Decorators.registerClass()
    export class CategoryLangGrid extends Serenity.EntityGrid<CategoryLangRow, any> {
        protected getColumnsKey() { return 'NorthWind.CategoryLang'; }
        protected getDialogType() { return CategoryLangDialog; }
        protected getIdProperty() { return CategoryLangRow.idProperty; }
        protected getInsertPermission() { return CategoryLangRow.insertPermission; }
        protected getLocalTextPrefix() { return CategoryLangRow.localTextPrefix; }
        protected getService() { return CategoryLangService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}