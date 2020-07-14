namespace Yaxie.NorthWind {
    export interface ProductLangForm {
        ProductId: Serenity.IntegerEditor;
        LanguageId: Serenity.IntegerEditor;
        ProductName: Serenity.StringEditor;
    }

    export class ProductLangForm extends Serenity.PrefixedContext {
        static formKey = 'NorthWind.ProductLang';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductLangForm.init)  {
                ProductLangForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(ProductLangForm, [
                    'ProductId', w0,
                    'LanguageId', w0,
                    'ProductName', w1
                ]);
            }
        }
    }
}
