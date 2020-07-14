namespace Yaxie.NorthWind {
    export interface CustomerDetailsForm {
        LastContactDate: Serenity.DateEditor;
        LastContactedBy: Serenity.IntegerEditor;
        Email: Serenity.StringEditor;
        SendBulletin: Serenity.BooleanEditor;
    }

    export class CustomerDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'NorthWind.CustomerDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomerDetailsForm.init)  {
                CustomerDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.StringEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(CustomerDetailsForm, [
                    'LastContactDate', w0,
                    'LastContactedBy', w1,
                    'Email', w2,
                    'SendBulletin', w3
                ]);
            }
        }
    }
}
