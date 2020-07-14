namespace Yaxie.NorthWind {
    export interface EmployeesForm {
        LastName: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        TitleOfCourtesy: Serenity.StringEditor;
        BirthDate: Serenity.DateEditor;
        HireDate: Serenity.DateEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        HomePhone: Serenity.StringEditor;
        Extension: Serenity.StringEditor;
        Photo: Serenity.StringEditor;
        Notes: Serenity.StringEditor;
        ReportsTo: Serenity.IntegerEditor;
        PhotoPath: Serenity.StringEditor;
    }

    export class EmployeesForm extends Serenity.PrefixedContext {
        static formKey = 'NorthWind.Employees';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeesForm.init)  {
                EmployeesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(EmployeesForm, [
                    'LastName', w0,
                    'FirstName', w0,
                    'Title', w0,
                    'TitleOfCourtesy', w0,
                    'BirthDate', w1,
                    'HireDate', w1,
                    'Address', w0,
                    'City', w0,
                    'Region', w0,
                    'PostalCode', w0,
                    'Country', w0,
                    'HomePhone', w0,
                    'Extension', w0,
                    'Photo', w0,
                    'Notes', w0,
                    'ReportsTo', w2,
                    'PhotoPath', w0
                ]);
            }
        }
    }
}
