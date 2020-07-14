namespace Yaxie.NorthWind {
    export interface EmployeeTerritoriesForm {
        TerritoryId: Serenity.StringEditor;
    }

    export class EmployeeTerritoriesForm extends Serenity.PrefixedContext {
        static formKey = 'NorthWind.EmployeeTerritories';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeeTerritoriesForm.init)  {
                EmployeeTerritoriesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(EmployeeTerritoriesForm, [
                    'TerritoryId', w0
                ]);
            }
        }
    }
}
