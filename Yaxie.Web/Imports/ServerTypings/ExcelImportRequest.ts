namespace Yaxie {
    export interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
        ImportWizardID?: number;
    }
}
