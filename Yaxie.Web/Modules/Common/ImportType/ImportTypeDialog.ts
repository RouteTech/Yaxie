
namespace Yaxie.Common {

    @Serenity.Decorators.registerClass()
    export class ImportTypeDialog extends Serenity.EntityDialog<ImportTypeRow, any> {
        protected getFormKey() { return ImportTypeForm.formKey; }
        protected getIdProperty() { return ImportTypeRow.idProperty; }
        protected getLocalTextPrefix() { return ImportTypeRow.localTextPrefix; }
        protected getNameProperty() { return ImportTypeRow.nameProperty; }
        protected getService() { return ImportTypeService.baseUrl; }
        protected getDeletePermission() { return ImportTypeRow.deletePermission; }
        protected getInsertPermission() { return ImportTypeRow.insertPermission; }
        protected getUpdatePermission() { return ImportTypeRow.updatePermission; }

        protected form = new ImportTypeForm(this.idPrefix);

    }
}