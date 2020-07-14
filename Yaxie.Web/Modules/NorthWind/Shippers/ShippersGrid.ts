
namespace Yaxie.NorthWind {

    @Serenity.Decorators.registerClass()
    export class ShippersGrid extends Serenity.EntityGrid<ShippersRow, any> {
        protected getColumnsKey() { return 'NorthWind.Shippers'; }
        protected getDialogType() { return ShippersDialog; }
        protected getIdProperty() { return ShippersRow.idProperty; }
        protected getInsertPermission() { return ShippersRow.insertPermission; }
        protected getLocalTextPrefix() { return ShippersRow.localTextPrefix; }
        protected getService() { return ShippersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}