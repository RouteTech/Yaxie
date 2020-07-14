
namespace Yaxie.Common
{
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()

    export class ImportWizardFieldMatchDialog extends Serenity.TemplatedDialog<any> {

        public ImportFile: string;
        public importFileList: any;
        public tableName: string;

        public excelColumnList = [];
        public tableColumnList = [];
        public dropColumnList = [];

        public matchList = [];

        constructor(ExcelColumnList, TableColumnList)
        {
            super();

            this.excelColumnList = ExcelColumnList
            this.tableColumnList = TableColumnList;            

        }        

        protected onDialogOpen()
        {
            super.onDialogOpen();                      

            var excelColumns = document.getElementById("excelcolumns");
            for (var i = 0; i < this.excelColumnList.length; i++)
            {
                var liExcel = document.createElement("li");
                var fieldName = this.excelColumnList[i];
                liExcel.id = "Excel" + i;
                liExcel.value = i;
                liExcel.classList.add("draggable");
                liExcel.classList.add("item");
                liExcel.innerText = fieldName;
                excelColumns.append(liExcel);
            }

            var dropDiv = document.getElementById("dropcolumns");
            for (var i = 0; i < this.tableColumnList.length; i++)
            {
                var liDrop = document.createElement("li");
                liDrop.id = "Drop" + i;
                liDrop.value = i;
                liDrop.classList.add("droppable");
                liDrop.classList.add("item");
                var found = this.excelColumnList.filter(col => {
                    return col === this.tableColumnList[i].Name || col === this.tableColumnList[i].Title;
                });
                if (found) {
                    liDrop.innerText = found[0];
                }
                else {
                    liDrop.innerText = "Drop Matching Field Here";
                }
                liDrop.draggable = true;
                dropDiv.append(liDrop);
            }

            var tableDiv = document.getElementById("tablecolumns");
            for (var i = 0; i < this.tableColumnList.length; i++)
            {
                var liTable = document.createElement("li");
                liTable.id = "Table" + i;
                liTable.value = i;
                liTable.classList.add("item");
                liTable.innerText = this.tableColumnList[i].Name + " : " + this.tableColumnList[i].Title + " (" + this.tableColumnList[i].Type + ") ";
                tableDiv.append(liTable);
            }          

            for (var i = 0; i < this.excelColumnList.length; i++)
            {
                $("#" + "Excel" + i).draggable({
                    revert: "invalid",
                    helper: "clone"
                });
                $("#" + "Excel" + i).data('matchRow', { key: i, value: this.excelColumnList[i] });
                $("#" + "Excel" + i).droppable({
                    drop: function (event, ui)
                    {
                        $(this)
                            .addClass("ui-state-highlight")
                            .html("excel id " + ui.draggable.find('select').attr('id') + " dropped ");
                    }
                });
            }                

            for (var i = 0; i < this.tableColumnList.length; i++)
            {
                $("#" + "Drop" + i).draggable();
                $("#" + "Drop" + i).droppable({
                    drop: function (event, ui)
                    {
                        var xx = ui.draggable.data('matchRow');
                        var cloneItem = ui.draggable.clone();
                        var excelColumnName = cloneItem.html()
                        var excelColumnNumber = cloneItem.val();
                        var tableColumnName = $(this).html();
                        var tableColumnNumber = $(this).val();                        
                        var message = "Excel Column " + excelColumnNumber + " : " + excelColumnName + " dropped on Table Column " + tableColumnNumber + " : " + tableColumnName;
                        //Q.alert(message);
                        $(this)
                            .addClass("ui-state-highlight")
                            .addClass('has-drop')
                            .html(cloneItem.html());
                    }
                });
            }      
        }  
      
        protected arrange()
        {
            super.arrange();
        }       

        protected getDialogOptions()
        {
            var opt = super.getDialogOptions();
            opt.title = 'Field Name';
            return opt;
        }         
    }
}