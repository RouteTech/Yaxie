namespace Yaxie.Common {
    export interface ImportWizardBulkActionResponse extends Serenity.ServiceResponse {
        ImportWizardList?: ImportWizardRow[];
        MessageList?: string[];
    }
}
