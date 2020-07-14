namespace Yaxie.NorthWind {
    export interface CustomersForm {
        CustomerId: Serenity.StringEditor;
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
    }

    export class CustomersForm extends Serenity.PrefixedContext {
        static formKey = 'NorthWind.Customers';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomersForm.init)  {
                CustomersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CustomersForm, [
                    'CustomerId', w0,
                    'CompanyName', w0,
                    'ContactName', w0,
                    'ContactTitle', w0,
                    'Address', w0,
                    'City', w0,
                    'Region', w0,
                    'PostalCode', w0,
                    'Country', w0,
                    'Phone', w0,
                    'Fax', w0
                ]);
            }
        }
    }
}
