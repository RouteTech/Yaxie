
namespace Yaxie.Common {

    @Serenity.Decorators.registerClass()
    export class ImportWizardFieldMatchGrid extends Serenity.EntityGrid<ImportWizardRow, any> {
        protected getColumnsKey() { return 'Common.ImportWizard'; }
        protected getDialogType() { return ImportWizardDialog; }
        protected getIdProperty() { return ImportWizardRow.idProperty; }
        protected getLocalTextPrefix() { return ImportWizardRow.localTextPrefix; }
        protected getService() { return ImportWizardService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}