
namespace Yaxie.NorthWind {

    @Serenity.Decorators.registerClass()
    export class EmployeeTerritoriesDialog extends Serenity.EntityDialog<EmployeeTerritoriesRow, any> {
        protected getFormKey() { return EmployeeTerritoriesForm.formKey; }
        protected getIdProperty() { return EmployeeTerritoriesRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeeTerritoriesRow.localTextPrefix; }
        protected getNameProperty() { return EmployeeTerritoriesRow.nameProperty; }
        protected getService() { return EmployeeTerritoriesService.baseUrl; }
        protected getDeletePermission() { return EmployeeTerritoriesRow.deletePermission; }
        protected getInsertPermission() { return EmployeeTerritoriesRow.insertPermission; }
        protected getUpdatePermission() { return EmployeeTerritoriesRow.updatePermission; }

        protected form = new EmployeeTerritoriesForm(this.idPrefix);

    }
}