
namespace Yaxie.Common {

    @Serenity.Decorators.registerClass()
    export class NoteDialog extends Serenity.EntityDialog<NoteRow, any> {
        protected getFormKey() { return NoteForm.formKey; }
        protected getIdProperty() { return NoteRow.idProperty; }
        protected getLocalTextPrefix() { return NoteRow.localTextPrefix; }
        protected getNameProperty() { return NoteRow.nameProperty; }
        protected getService() { return NoteService.baseUrl; }
        protected getDeletePermission() { return NoteRow.deletePermission; }
        protected getInsertPermission() { return NoteRow.insertPermission; }
        protected getUpdatePermission() { return NoteRow.updatePermission; }

        protected form = new NoteForm(this.idPrefix);

    }
}