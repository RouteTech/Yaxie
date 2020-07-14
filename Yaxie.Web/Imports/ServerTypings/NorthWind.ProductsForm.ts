namespace Yaxie.NorthWind {
    export interface ProductsForm {
        ProductName: Serenity.StringEditor;
        SupplierId: Serenity.IntegerEditor;
        CategoryId: Serenity.IntegerEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
        Discontinued: Serenity.BooleanEditor;
        ProductImage: Serenity.StringEditor;
    }

    export class ProductsForm extends Serenity.PrefixedContext {
        static formKey = 'NorthWind.Products';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductsForm.init)  {
                ProductsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(ProductsForm, [
                    'ProductName', w0,
                    'SupplierId', w1,
                    'CategoryId', w1,
                    'QuantityPerUnit', w0,
                    'UnitPrice', w2,
                    'UnitsInStock', w1,
                    'UnitsOnOrder', w1,
                    'ReorderLevel', w1,
                    'Discontinued', w3,
                    'ProductImage', w0
                ]);
            }
        }
    }
}
