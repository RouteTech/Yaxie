namespace Yaxie.NorthWind {
    export interface TerritoriesForm {
        TerritoryId: Serenity.StringEditor;
        TerritoryDescription: Serenity.StringEditor;
        RegionId: Serenity.IntegerEditor;
    }

    export class TerritoriesForm extends Serenity.PrefixedContext {
        static formKey = 'NorthWind.Territories';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TerritoriesForm.init)  {
                TerritoriesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(TerritoriesForm, [
                    'TerritoryId', w0,
                    'TerritoryDescription', w0,
                    'RegionId', w1
                ]);
            }
        }
    }
}
