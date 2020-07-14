
namespace Yaxie.NorthWind {

    @Serenity.Decorators.registerClass()
    export class CustomerDetailsGrid extends Serenity.EntityGrid<CustomerDetailsRow, any> {
        protected getColumnsKey() { return 'NorthWind.CustomerDetails'; }
        protected getDialogType() { return CustomerDetailsDialog; }
        protected getIdProperty() { return CustomerDetailsRow.idProperty; }
        protected getInsertPermission() { return CustomerDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return CustomerDetailsRow.localTextPrefix; }
        protected getService() { return CustomerDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}