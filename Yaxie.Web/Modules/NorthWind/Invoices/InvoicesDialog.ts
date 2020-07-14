
namespace Yaxie.NorthWind {

    @Serenity.Decorators.registerClass()
    export class InvoicesDialog extends Serenity.EntityDialog<InvoicesRow, any> {
        protected getFormKey() { return InvoicesForm.formKey; }
        protected getIdProperty() { return InvoicesRow.idProperty; }
        protected getLocalTextPrefix() { return InvoicesRow.localTextPrefix; }
        protected getNameProperty() { return InvoicesRow.nameProperty; }
        protected getService() { return InvoicesService.baseUrl; }
        protected getDeletePermission() { return InvoicesRow.deletePermission; }
        protected getInsertPermission() { return InvoicesRow.insertPermission; }
        protected getUpdatePermission() { return InvoicesRow.updatePermission; }

        protected form = new InvoicesForm(this.idPrefix);

    }
}