/// <reference path="../ImportWizardHistory/ImportWizardHistoryDialog.ts" />

namespace Yaxie.Common {

    @Serenity.Decorators.registerClass()
    export class ImportWizardImportWizardHistoryDialog extends ImportWizardHistoryDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.ImportWizardId, true);
        }
    }
}