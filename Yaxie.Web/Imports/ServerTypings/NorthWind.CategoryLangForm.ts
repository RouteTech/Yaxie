namespace Yaxie.NorthWind {
    export interface CategoryLangForm {
        CategoryId: Serenity.IntegerEditor;
        LanguageId: Serenity.IntegerEditor;
        CategoryName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class CategoryLangForm extends Serenity.PrefixedContext {
        static formKey = 'NorthWind.CategoryLang';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CategoryLangForm.init)  {
                CategoryLangForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(CategoryLangForm, [
                    'CategoryId', w0,
                    'LanguageId', w0,
                    'CategoryName', w1,
                    'Description', w1
                ]);
            }
        }
    }
}
