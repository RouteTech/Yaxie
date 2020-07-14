
namespace Yaxie.NorthWind {

    @Serenity.Decorators.registerClass()
    export class RegionGrid extends Serenity.EntityGrid<RegionRow, any> {
        protected getColumnsKey() { return 'NorthWind.Region'; }
        protected getDialogType() { return RegionDialog; }
        protected getIdProperty() { return RegionRow.idProperty; }
        protected getInsertPermission() { return RegionRow.insertPermission; }
        protected getLocalTextPrefix() { return RegionRow.localTextPrefix; }
        protected getService() { return RegionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}