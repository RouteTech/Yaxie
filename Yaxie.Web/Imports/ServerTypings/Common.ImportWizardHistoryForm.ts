namespace Yaxie.Common {
    export interface ImportWizardHistoryForm {
        ImportWizardId: Serenity.IntegerEditor;
        RunDateTime: Serenity.DateEditor;
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
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(ImportWizardHistoryForm, [
                    'ImportWizardId', w0,
                    'RunDateTime', w1,
                    'OriginalFileName', w2,
                    'TempFileName', w2,
                    'ErrorList', w3,
                    'Results', w3,
                    'RowsInserted', w0,
                    'RowsUpdated', w0
                ]);
            }
        }
    }
}
