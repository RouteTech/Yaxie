namespace Yaxie.Common {
    export interface ImportWizardBulkActionResponse extends Serenity.ServiceResponse {
        ImportWizardHistoryList?: number[];
        MessageList?: string[];
    }
}
