
namespace Yaxie.Common {

    @Serenity.Decorators.registerClass()
    export class ImportWizardHistoryGrid extends Serenity.EntityGrid<ImportWizardHistoryRow, any> {
        protected getColumnsKey() { return 'Common.ImportWizardHistory'; }
        protected getDialogType() { return ImportWizardHistoryDialog; }
        protected getIdProperty() { return ImportWizardHistoryRow.idProperty; }
        protected getInsertPermission() { return ImportWizardHistoryRow.insertPermission; }
        protected getLocalTextPrefix() { return ImportWizardHistoryRow.localTextPrefix; }
        protected getService() { return ImportWizardHistoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}