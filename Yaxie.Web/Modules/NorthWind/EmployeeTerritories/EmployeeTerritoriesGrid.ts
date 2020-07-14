
namespace Yaxie.NorthWind {

    @Serenity.Decorators.registerClass()
    export class EmployeeTerritoriesGrid extends Serenity.EntityGrid<EmployeeTerritoriesRow, any> {
        protected getColumnsKey() { return 'NorthWind.EmployeeTerritories'; }
        protected getDialogType() { return EmployeeTerritoriesDialog; }
        protected getIdProperty() { return EmployeeTerritoriesRow.idProperty; }
        protected getInsertPermission() { return EmployeeTerritoriesRow.insertPermission; }
        protected getLocalTextPrefix() { return EmployeeTerritoriesRow.localTextPrefix; }
        protected getService() { return EmployeeTerritoriesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}