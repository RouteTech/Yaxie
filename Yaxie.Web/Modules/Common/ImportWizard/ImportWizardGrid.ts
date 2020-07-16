/// <reference path="ImportWizardBulkAction.ts" />
namespace Yaxie.Common {

    @Serenity.Decorators.registerClass()
    export class ImportWizardGrid extends Serenity.EntityGrid<ImportWizardRow, any> {
        protected getColumnsKey() { return 'Common.ImportWizard'; }
        protected getDialogType() { return ImportWizardDialog; }
        protected getIdProperty() { return ImportWizardRow.idProperty; }
        protected getInsertPermission() { return ImportWizardRow.insertPermission; }
        protected getLocalTextPrefix() { return ImportWizardRow.localTextPrefix; }
        protected getService() { return ImportWizardService.baseUrl; }

        private rowSelection: Serenity.GridRowSelectionMixin;

        constructor(container: JQuery) {
            super(container);
        }

        protected createToolbarExtensions() {
            super.createToolbarExtensions();
            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            if (Authorization.hasPermission("Accounting:Excel")) {
                buttons.push(Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: ImportWizardService.baseUrl + '/ListExcel',
                    onViewSubmit: () => this.onViewSubmit(),
                    separator: true
                }))
            };

            buttons.push({
                title: 'Process Selected Imports',
                cssClass: 'send-button',
                onClick: () => {
                    if (!this.onViewSubmit()) {
                        return;
                    }

                    var action = new ImportWizardBulkAction();
                    action.done = () => this.rowSelection.resetCheckedAndRefresh();
                    action.execute(this.rowSelection.getSelectedKeys());
                }
            });

            return buttons;
        }

        protected getColumns() {
            var columns = super.getColumns();
            columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));
            return columns;
        }

        protected getViewOptions() {
            var opt = super.getViewOptions();
            opt.rowsPerPage = 2500;
            return opt;
        }
    }
}