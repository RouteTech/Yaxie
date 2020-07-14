namespace Yaxie.NorthWind {
    export interface OrderDetailsForm {
        OrderId: Serenity.IntegerEditor;
        ProductId: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Discount: Serenity.DecimalEditor;
    }

    export class OrderDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'NorthWind.OrderDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrderDetailsForm.init)  {
                OrderDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(OrderDetailsForm, [
                    'OrderId', w0,
                    'ProductId', w0,
                    'UnitPrice', w1,
                    'Quantity', w0,
                    'Discount', w1
                ]);
            }
        }
    }
}
