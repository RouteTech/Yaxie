
namespace Yaxie.Common {

    @Serenity.Decorators.registerClass()
    export class ImportTypeGrid extends Serenity.EntityGrid<ImportTypeRow, any> {
        protected getColumnsKey() { return 'Common.ImportType'; }
        protected getDialogType() { return ImportTypeDialog; }
        protected getIdProperty() { return ImportTypeRow.idProperty; }
        protected getInsertPermission() { return ImportTypeRow.insertPermission; }
        protected getLocalTextPrefix() { return ImportTypeRow.localTextPrefix; }
        protected getService() { return ImportTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}