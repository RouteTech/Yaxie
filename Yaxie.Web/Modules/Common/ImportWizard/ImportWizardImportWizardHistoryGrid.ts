/// <reference path="../ImportWizardHistory/ImportWizardHistoryGrid.ts" />

namespace Yaxie.Common {
    import fld = ImportWizardHistoryRow.Fields;

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()

    export class ImportWizardImportWizardHistoryGrid extends ImportWizardHistoryGrid {
        protected getDialogType() { return ImportWizardImportWizardHistoryDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            return super.getColumns().filter(x => x.field !== fld.ImportWizardHistoryId);
        }

        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected addButtonClick() {
            this.editItem({ ImportWizardId: this.ImportWizardId });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.ImportWizardId;
        }

        private _importWizardId: number;

        get ImportWizardId() {
            return this._importWizardId;
        }

        set ImportWizardId(value: number) {
            if (this._importWizardId !== value) {
                this._importWizardId = value;
                this.setEquality('ImportWizardId', value);
                this.refresh();
            }
        }
    }
}