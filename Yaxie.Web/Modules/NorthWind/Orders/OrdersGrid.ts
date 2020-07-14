
namespace Yaxie.NorthWind {

    @Serenity.Decorators.registerClass()
    export class OrdersGrid extends Serenity.EntityGrid<OrdersRow, any> {
        protected getColumnsKey() { return 'NorthWind.Orders'; }
        protected getDialogType() { return OrdersDialog; }
        protected getIdProperty() { return OrdersRow.idProperty; }
        protected getInsertPermission() { return OrdersRow.insertPermission; }
        protected getLocalTextPrefix() { return OrdersRow.localTextPrefix; }
        protected getService() { return OrdersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}