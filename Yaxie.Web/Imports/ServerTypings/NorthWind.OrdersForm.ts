namespace Yaxie.NorthWind {
    export interface OrdersForm {
        CustomerId: Serenity.StringEditor;
        EmployeeId: Serenity.IntegerEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.DateEditor;
        ShippedDate: Serenity.DateEditor;
        ShipVia: Serenity.IntegerEditor;
        Freight: Serenity.DecimalEditor;
        ShipName: Serenity.StringEditor;
        ShipAddress: Serenity.StringEditor;
        ShipCity: Serenity.StringEditor;
        ShipRegion: Serenity.StringEditor;
        ShipPostalCode: Serenity.StringEditor;
        ShipCountry: Serenity.StringEditor;
    }

    export class OrdersForm extends Serenity.PrefixedContext {
        static formKey = 'NorthWind.Orders';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrdersForm.init)  {
                OrdersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(OrdersForm, [
                    'CustomerId', w0,
                    'EmployeeId', w1,
                    'OrderDate', w2,
                    'RequiredDate', w2,
                    'ShippedDate', w2,
                    'ShipVia', w1,
                    'Freight', w3,
                    'ShipName', w0,
                    'ShipAddress', w0,
                    'ShipCity', w0,
                    'ShipRegion', w0,
                    'ShipPostalCode', w0,
                    'ShipCountry', w0
                ]);
            }
        }
    }
}
