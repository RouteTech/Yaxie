namespace Yaxie.NorthWind {
    export interface RegionForm {
        RegionDescription: Serenity.StringEditor;
    }

    export class RegionForm extends Serenity.PrefixedContext {
        static formKey = 'NorthWind.Region';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RegionForm.init)  {
                RegionForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(RegionForm, [
                    'RegionDescription', w0
                ]);
            }
        }
    }
}
