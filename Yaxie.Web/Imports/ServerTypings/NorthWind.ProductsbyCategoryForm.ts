namespace Yaxie.NorthWind {
    export interface ProductsbyCategoryForm {
        ProductName: Serenity.StringEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitsInStock: Serenity.IntegerEditor;
        Discontinued: Serenity.BooleanEditor;
    }

    export class ProductsbyCategoryForm extends Serenity.PrefixedContext {
        static formKey = 'NorthWind.ProductsbyCategory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductsbyCategoryForm.init)  {
                ProductsbyCategoryForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(ProductsbyCategoryForm, [
                    'ProductName', w0,
                    'QuantityPerUnit', w0,
                    'UnitsInStock', w1,
                    'Discontinued', w2
                ]);
            }
        }
    }
}
