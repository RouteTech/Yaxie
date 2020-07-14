
namespace Yaxie.NorthWind {

    @Serenity.Decorators.registerClass()
    export class OrderDetailsDialog extends Serenity.EntityDialog<OrderDetailsRow, any> {
        protected getFormKey() { return OrderDetailsForm.formKey; }
        protected getIdProperty() { return OrderDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return OrderDetailsRow.localTextPrefix; }
        protected getService() { return OrderDetailsService.baseUrl; }
        protected getDeletePermission() { return OrderDetailsRow.deletePermission; }
        protected getInsertPermission() { return OrderDetailsRow.insertPermission; }
        protected getUpdatePermission() { return OrderDetailsRow.updatePermission; }

        protected form = new OrderDetailsForm(this.idPrefix);

    }
}