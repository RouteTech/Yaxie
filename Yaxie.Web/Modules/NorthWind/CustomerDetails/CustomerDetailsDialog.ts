
namespace Yaxie.NorthWind {

    @Serenity.Decorators.registerClass()
    export class CustomerDetailsDialog extends Serenity.EntityDialog<CustomerDetailsRow, any> {
        protected getFormKey() { return CustomerDetailsForm.formKey; }
        protected getIdProperty() { return CustomerDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerDetailsRow.localTextPrefix; }
        protected getNameProperty() { return CustomerDetailsRow.nameProperty; }
        protected getService() { return CustomerDetailsService.baseUrl; }
        protected getDeletePermission() { return CustomerDetailsRow.deletePermission; }
        protected getInsertPermission() { return CustomerDetailsRow.insertPermission; }
        protected getUpdatePermission() { return CustomerDetailsRow.updatePermission; }

        protected form = new CustomerDetailsForm(this.idPrefix);

    }
}