namespace Yaxie.Common {
    export interface NoteForm {
        EntityType: Serenity.StringEditor;
        EntityId: Serenity.StringEditor;
        NoteText: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserDisplayName: Serenity.StringEditor;
    }

    export class NoteForm extends Serenity.PrefixedContext {
        static formKey = 'Common.Note';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NoteForm.init)  {
                NoteForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(NoteForm, [
                    'EntityType', w0,
                    'EntityId', w0,
                    'NoteText', w0,
                    'InsertUserId', w1,
                    'InsertDate', w2,
                    'InsertUserDisplayName', w0
                ]);
            }
        }
    }
}
