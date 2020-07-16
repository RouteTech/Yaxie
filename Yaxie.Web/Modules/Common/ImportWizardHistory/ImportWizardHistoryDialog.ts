
namespace Yaxie.Common {

    @Serenity.Decorators.registerClass()
    export class ImportWizardHistoryDialog extends Serenity.EntityDialog<ImportWizardHistoryRow, any> {
        protected getFormKey() { return ImportWizardHistoryForm.formKey; }
        protected getIdProperty() { return ImportWizardHistoryRow.idProperty; }
        protected getLocalTextPrefix() { return ImportWizardHistoryRow.localTextPrefix; }
        protected getNameProperty() { return ImportWizardHistoryRow.nameProperty; }
        protected getService() { return ImportWizardHistoryService.baseUrl; }
        protected getDeletePermission() { return ImportWizardHistoryRow.deletePermission; }
        protected getInsertPermission() { return ImportWizardHistoryRow.insertPermission; }
        protected getUpdatePermission() { return ImportWizardHistoryRow.updatePermission; }

        protected form = new ImportWizardHistoryForm(this.idPrefix);

    }
}