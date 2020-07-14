
namespace Yaxie.NorthWind {

    @Serenity.Decorators.registerClass()
    export class InvoicesGrid extends Serenity.EntityGrid<InvoicesRow, any> {
        protected getColumnsKey() { return 'NorthWind.Invoices'; }
        protected getDialogType() { return InvoicesDialog; }
        protected getIdProperty() { return InvoicesRow.idProperty; }
        protected getInsertPermission() { return InvoicesRow.insertPermission; }
        protected getLocalTextPrefix() { return InvoicesRow.localTextPrefix; }
        protected getService() { return InvoicesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}