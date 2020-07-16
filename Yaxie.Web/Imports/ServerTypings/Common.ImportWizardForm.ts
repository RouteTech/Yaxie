namespace Yaxie.Common {
    export interface ImportWizardForm {
        ImportWizardId: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        ImportTypeId: Serenity.LookupEditor;
        TargetDatabase: Serenity.LookupEditor;
        ImportFileList: Serenity.MultipleImageUploadEditor;
        StartAtRow: Serenity.IntegerEditor;
        EndAtRow: Serenity.IntegerEditor;
        FieldDelimiterId: Serenity.RadioButtonEditor;
        ImportSourceId: Serenity.LookupEditor;
        RowErrorCount: Serenity.IntegerEditor;
        ColumnErrorCount: Serenity.IntegerEditor;
        KeyType: Serenity.StringEditor;
        KeyColumn: Serenity.IntegerEditor;
        MatchOnLabels: Serenity.BooleanEditor;
        MatchOnFieldNames: Serenity.BooleanEditor;
        FieldMatchDisplay: Serenity.TextAreaEditor;
        FieldMatchList: Serenity.StringEditor;
        SourceDirectory: Serenity.StringEditor;
        LastRunDate: Serenity.DateTimeEditor;
    }

    export class ImportWizardForm extends Serenity.PrefixedContext {
        static formKey = 'Common.ImportWizard';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ImportWizardForm.init)  {
                ImportWizardForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.LookupEditor;
                var w3 = s.MultipleImageUploadEditor;
                var w4 = s.RadioButtonEditor;
                var w5 = s.BooleanEditor;
                var w6 = s.TextAreaEditor;
                var w7 = s.DateTimeEditor;

                Q.initFormType(ImportWizardForm, [
                    'ImportWizardId', w0,
                    'Description', w1,
                    'ImportTypeId', w2,
                    'TargetDatabase', w2,
                    'ImportFileList', w3,
                    'StartAtRow', w0,
                    'EndAtRow', w0,
                    'FieldDelimiterId', w4,
                    'ImportSourceId', w2,
                    'RowErrorCount', w0,
                    'ColumnErrorCount', w0,
                    'KeyType', w1,
                    'KeyColumn', w0,
                    'MatchOnLabels', w5,
                    'MatchOnFieldNames', w5,
                    'FieldMatchDisplay', w6,
                    'FieldMatchList', w1,
                    'SourceDirectory', w1,
                    'LastRunDate', w7
                ]);
            }
        }
    }
}
