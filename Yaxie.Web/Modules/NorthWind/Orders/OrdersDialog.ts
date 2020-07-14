
namespace Yaxie.NorthWind {

    @Serenity.Decorators.registerClass()
    export class OrdersDialog extends Serenity.EntityDialog<OrdersRow, any> {
        protected getFormKey() { return OrdersForm.formKey; }
        protected getIdProperty() { return OrdersRow.idProperty; }
        protected getLocalTextPrefix() { return OrdersRow.localTextPrefix; }
        protected getNameProperty() { return OrdersRow.nameProperty; }
        protected getService() { return OrdersService.baseUrl; }
        protected getDeletePermission() { return OrdersRow.deletePermission; }
        protected getInsertPermission() { return OrdersRow.insertPermission; }
        protected getUpdatePermission() { return OrdersRow.updatePermission; }

        protected form = new OrdersForm(this.idPrefix);

    }
}