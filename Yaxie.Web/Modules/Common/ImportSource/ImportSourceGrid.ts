
namespace Yaxie.Common {

    @Serenity.Decorators.registerClass()
    export class ImportSourceGrid extends Serenity.EntityGrid<ImportSourceRow, any> {
        protected getColumnsKey() { return 'Common.ImportSource'; }
        protected getDialogType() { return ImportSourceDialog; }
        protected getIdProperty() { return ImportSourceRow.idProperty; }
        protected getInsertPermission() { return ImportSourceRow.insertPermission; }
        protected getLocalTextPrefix() { return ImportSourceRow.localTextPrefix; }
        protected getService() { return ImportSourceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}