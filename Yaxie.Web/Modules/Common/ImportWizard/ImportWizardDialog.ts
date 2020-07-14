
namespace Yaxie.Common {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class ImportWizardDialog extends Serenity.EntityDialog<ImportWizardRow, any> {
        protected getFormKey() { return ImportWizardForm.formKey; }
        protected getIdProperty() { return ImportWizardRow.idProperty; }
        protected getLocalTextPrefix() { return ImportWizardRow.localTextPrefix; }
        protected getNameProperty() { return ImportWizardRow.nameProperty; }
        protected getService() { return ImportWizardService.baseUrl; }
        protected getDeletePermission() { return ImportWizardRow.deletePermission; }
        protected getInsertPermission() { return ImportWizardRow.insertPermission; }
        protected getUpdatePermission() { return ImportWizardRow.updatePermission; }

        protected form = new ImportWizardForm(this.idPrefix);
        protected ImportFile: string;

        private loadedState: string;

        constructor() {
            super();
            $('<a class="inplace-button inplace-action"><b><i class="fa fa-magic text-red"></i></b></a>')
                .attr("title", "Match Excel Columns to Table Columns")
                .insertBefore(this.form.FieldMatchDisplay.element)
                .click(e => {
                    var excelColumnList = [];
                    var dropColumnList = [];
                    var tableColumnList = [];
                    Yaxie.Common.ImportWizardService.GetExcelColumnList({
                        ImportFileList: this.form.ImportFileList.value
                    }, response => {
                        excelColumnList = response.Entities;
                    },
                        {
                            async: false
                        });

                    Yaxie.Common.ImportWizardService.GetTableHeaders(
                        {
                            TableName: this.form.TargetDatabase.value
                        },
                        response => {
                            tableColumnList = response.Entities;
                        },
                        {
                            async: false
                        });

                    var dialog = new ImportWizardFieldMatchDialog(excelColumnList, tableColumnList);

                    dialog.element.on('dialogclose', () => {
                        var dropColumnElement = document.getElementById('dropcolumns').getElementsByTagName("li");
                        for (var i = 0; i < dropColumnElement.length; i++) {
                            this.form.FieldMatchDisplay[i] = dropColumnElement[i].innerText;
                            dropColumnList[i] = dropColumnElement[i].innerText;
                        }
                        Yaxie.Common.ImportWizardService.SerializeList({
                            DropColumnList: dropColumnList,
                            TableName: this.form.TargetDatabase.value
                        }, response => {
                            var fieldMatchJson = response.FieldMatchJson;
                            var fieldMatchList = response.FieldMatchList;
                            var fieldMatchDisplay = response.FieldMatchDisplay;
                            for (var i = 0; i < fieldMatchDisplay.length; i++) {
                                this.form.FieldMatchDisplay.value = this.form.FieldMatchDisplay.value + fieldMatchDisplay[i] + "\n";
                                }
                                this.form.FieldMatchList.value = fieldMatchJson;
                        },
                            {
                                async: false
                            });
                        dialog = null;
                    });
                    dialog.dialogOpen();
                });

            this.tabs.on('tabsactivate', (e, i) => {
                this.arrange();
            });
            this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));
            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
            this.tabs.bind('tabsactivate', () => this.arrange());

        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();
            buttons.push({
                title: 'Execute Import',
                cssClass: 'send-button',
                onClick: () => {
                    if (!this.form.ImportFileList) {
                        Q.alert("You must enter a valid file name before you can import it.")
                    }
                    Common.ImportWizardService.ExcelImport({
                        ImportWizardID: this.getWizardID()
                    }, response => {
                        this.dialogClose();
                    });
                }
            });
            return buttons;
        }

        protected getWizardID(): number {
            return this.form.ImportWizardId.value;
        }

        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }
    }
}