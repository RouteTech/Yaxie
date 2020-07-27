namespace Yaxie.Common {
    export interface ImportWizardHistoryForm {
        ImportWizardId: Serenity.IntegerEditor;
        OriginalFileName: Serenity.StringEditor;
        TempFileName: Serenity.StringEditor;
        ErrorList: Serenity.TextAreaEditor;
        Results: Serenity.TextAreaEditor;
        RowsInserted: Serenity.IntegerEditor;
        RowsUpdated: Serenity.IntegerEditor;
    }

    export class ImportWizardHistoryForm extends Serenity.PrefixedContext {
        static formKey = 'Common.ImportWizardHistory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ImportWizardHistoryForm.init)  {
                ImportWizardHistoryForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(ImportWizardHistoryForm, [
                    'ImportWizardId', w0,
                    'OriginalFileName', w1,
                    'TempFileName', w1,
                    'ErrorList', w2,
                    'Results', w2,
                    'RowsInserted', w0,
                    'RowsUpdated', w0
                ]);
            }
        }
    }
}
