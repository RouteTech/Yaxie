namespace Yaxie.Common {
    export interface ImportTypeForm {
        Description: Serenity.StringEditor;
    }

    export class ImportTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Common.ImportType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ImportTypeForm.init)  {
                ImportTypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ImportTypeForm, [
                    'Description', w0
                ]);
            }
        }
    }
}
