
namespace Yaxie.NorthWind {

    @Serenity.Decorators.registerClass()
    export class NotesGrid extends Serenity.EntityGrid<NotesRow, any> {
        protected getColumnsKey() { return 'NorthWind.Notes'; }
        protected getDialogType() { return NotesDialog; }
        protected getIdProperty() { return NotesRow.idProperty; }
        protected getInsertPermission() { return NotesRow.insertPermission; }
        protected getLocalTextPrefix() { return NotesRow.localTextPrefix; }
        protected getService() { return NotesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}