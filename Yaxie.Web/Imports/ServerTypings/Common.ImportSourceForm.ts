namespace Yaxie.Common {
    export interface ImportSourceForm {
        Description: Serenity.StringEditor;
    }

    export class ImportSourceForm extends Serenity.PrefixedContext {
        static formKey = 'Common.ImportSource';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ImportSourceForm.init)  {
                ImportSourceForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ImportSourceForm, [
                    'Description', w0
                ]);
            }
        }
    }
}
