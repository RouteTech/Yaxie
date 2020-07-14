
namespace Yaxie.NorthWind {

    @Serenity.Decorators.registerClass()
    export class OrderDetailsGrid extends Serenity.EntityGrid<OrderDetailsRow, any> {
        protected getColumnsKey() { return 'NorthWind.OrderDetails'; }
        protected getDialogType() { return OrderDetailsDialog; }
        protected getIdProperty() { return OrderDetailsRow.idProperty; }
        protected getInsertPermission() { return OrderDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return OrderDetailsRow.localTextPrefix; }
        protected getService() { return OrderDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}