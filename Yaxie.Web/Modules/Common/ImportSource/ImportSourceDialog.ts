
namespace Yaxie.Common {

    @Serenity.Decorators.registerClass()
    export class ImportSourceDialog extends Serenity.EntityDialog<ImportSourceRow, any> {
        protected getFormKey() { return ImportSourceForm.formKey; }
        protected getIdProperty() { return ImportSourceRow.idProperty; }
        protected getLocalTextPrefix() { return ImportSourceRow.localTextPrefix; }
        protected getNameProperty() { return ImportSourceRow.nameProperty; }
        protected getService() { return ImportSourceService.baseUrl; }
        protected getDeletePermission() { return ImportSourceRow.deletePermission; }
        protected getInsertPermission() { return ImportSourceRow.insertPermission; }
        protected getUpdatePermission() { return ImportSourceRow.updatePermission; }

        protected form = new ImportSourceForm(this.idPrefix);

    }
}