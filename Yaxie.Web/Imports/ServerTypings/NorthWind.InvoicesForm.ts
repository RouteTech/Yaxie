namespace Yaxie.NorthWind {
    export interface InvoicesForm {
        ShipAddress: Serenity.StringEditor;
        ShipCity: Serenity.StringEditor;
        ShipRegion: Serenity.StringEditor;
        ShipPostalCode: Serenity.StringEditor;
        ShipCountry: Serenity.StringEditor;
        CustomerId: Serenity.StringEditor;
        CustomerName: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        Salesperson: Serenity.StringEditor;
        OrderId: Serenity.IntegerEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.DateEditor;
        ShippedDate: Serenity.DateEditor;
        ShipperName: Serenity.StringEditor;
        ProductId: Serenity.IntegerEditor;
        ProductName: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Discount: Serenity.DecimalEditor;
        ExtendedPrice: Serenity.DecimalEditor;
        Freight: Serenity.DecimalEditor;
    }

    export class InvoicesForm extends Serenity.PrefixedContext {
        static formKey = 'NorthWind.Invoices';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvoicesForm.init)  {
                InvoicesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(InvoicesForm, [
                    'ShipAddress', w0,
                    'ShipCity', w0,
                    'ShipRegion', w0,
                    'ShipPostalCode', w0,
                    'ShipCountry', w0,
                    'CustomerId', w0,
                    'CustomerName', w0,
                    'Address', w0,
                    'City', w0,
                    'Region', w0,
                    'PostalCode', w0,
                    'Country', w0,
                    'Salesperson', w0,
                    'OrderId', w1,
                    'OrderDate', w2,
                    'RequiredDate', w2,
                    'ShippedDate', w2,
                    'ShipperName', w0,
                    'ProductId', w1,
                    'ProductName', w0,
                    'UnitPrice', w3,
                    'Quantity', w1,
                    'Discount', w3,
                    'ExtendedPrice', w3,
                    'Freight', w3
                ]);
            }
        }
    }
}
