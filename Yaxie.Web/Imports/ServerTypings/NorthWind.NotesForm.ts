namespace Yaxie.NorthWind {
    export interface NotesForm {
        EntityType: Serenity.StringEditor;
        EntityId: Serenity.StringEditor;
        Text: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
    }

    export class NotesForm extends Serenity.PrefixedContext {
        static formKey = 'NorthWind.Notes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NotesForm.init)  {
                NotesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(NotesForm, [
                    'EntityType', w0,
                    'EntityId', w0,
                    'Text', w0,
                    'InsertUserId', w1,
                    'InsertDate', w2
                ]);
            }
        }
    }
}
