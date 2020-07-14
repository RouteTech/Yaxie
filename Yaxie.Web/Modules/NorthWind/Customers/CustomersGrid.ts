
namespace Yaxie.NorthWind {

    @Serenity.Decorators.registerClass()
    export class CustomersGrid extends Serenity.EntityGrid<CustomersRow, any> {
        protected getColumnsKey() { return 'NorthWind.Customers'; }
        protected getDialogType() { return CustomersDialog; }
        protected getIdProperty() { return CustomersRow.idProperty; }
        protected getInsertPermission() { return CustomersRow.insertPermission; }
        protected getLocalTextPrefix() { return CustomersRow.localTextPrefix; }
        protected getService() { return CustomersService.baseUrl; }

        private rowSelection: Serenity.GridRowSelectionMixin;

        constructor(container: JQuery) {
            super(container);
        }

        protected createToolbarExtensions() {
            super.createToolbarExtensions();
            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            if (Authorization.hasPermission("Accounting:Excel")) {
                buttons.push(Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: CustomersService.baseUrl + '/ListExcel',
                    onViewSubmit: () => this.onViewSubmit(),
                    separator: true
                }))
            };


            buttons.push({
                title: 'Import from QuickBooks',
                cssClass: 'send-button',
                onClick: () => {
                    if (!this.onViewSubmit()) {
                        return;
                    }
                    window.location.href = Q.resolveUrl("~/QuickBooks/QuickBooks") + '/QuickBooksLogin?function=import&entity=account';
                }
            })


            buttons.push({
                title: 'Export to QuickBooks',
                cssClass: 'send-button',
                onClick: () => {
                    if (!this.onViewSubmit()) {
                        return;
                    }
                    var selected = this.rowSelection.getSelectedKeys();

                    if (selected.length == 0) {
                        Q.warning(Q.text("Please select some records"));
                    }
                    else {
                        var keys = selected.toString();
                        window.location.replace('/QuickBooks/QuickBooks/QuickBooksLogin?function=export&entity=account&keys=' + keys);
                    }
                    this.rowSelection.resetCheckedAndRefresh();
                }
            })

            return buttons;
        }

        protected getColumns() {
            var columns = super.getColumns();
            columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));
            return columns;
        }

        protected getViewOptions() {
            var opt = super.getViewOptions();
            opt.rowsPerPage = 100;
            return opt;
        }
    }
}