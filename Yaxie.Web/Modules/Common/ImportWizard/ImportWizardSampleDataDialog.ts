
namespace Yaxie.Common
{
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()

    export class ImportWizardSampleDataDialog extends Serenity.TemplatedDialog<any> {
        data: any;
   
        constructor(data)
        {
            super();

            this.data = data;
        }        

        protected onDialogOpen()
        {
            super.onDialogOpen();                      

            var keys = [];

            document.write("<table border==\"1\"><tr>");
            for (var key in this.data[0]) {
                document.write('<td>' + key + '</td>');
            }
            document.write("</tr>");
            for (var i = 0; i < this.data.length; i++) {
                document.write('<tr>');
                for (key in this.data[i]) {
                    document.write('<td>' + this.data[i][key] + '</td>');
                }
                document.write('</tr>');
            }
            document.write("</table>");
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