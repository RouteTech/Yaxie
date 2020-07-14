namespace Yaxie.NorthWind {
    export interface CategoriesForm {
        CategoryName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Picture: Serenity.StringEditor;
    }

    export class CategoriesForm extends Serenity.PrefixedContext {
        static formKey = 'NorthWind.Categories';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CategoriesForm.init)  {
                CategoriesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CategoriesForm, [
                    'CategoryName', w0,
                    'Description', w0,
                    'Picture', w0
                ]);
            }
        }
    }
}
