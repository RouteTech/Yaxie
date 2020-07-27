namespace Yaxie.Common {
    export namespace ImportWizardService {
        export const baseUrl = 'Common/ImportWizard';

        export declare function Create(request: Serenity.SaveRequest<ImportWizardRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ImportWizardRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ImportWizardRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ImportWizardRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ImportWizardBulkAction(request: ImportWizardBulkActionRequest, onSuccess?: (response: ImportWizardBulkActionResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetTableHeaders(request: GetTableHeaderListRequest, onSuccess?: (response: Serenity.ListResponse<TableFieldInfo>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetExcelColumnList(request: GetExcelColumnListRequest, onSuccess?: (response: GetExcelColumnListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function SerializeList(request: SerializeListRequest, onSuccess?: (response: SerializeListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Common/ImportWizard/Create",
            Update = "Common/ImportWizard/Update",
            Delete = "Common/ImportWizard/Delete",
            Retrieve = "Common/ImportWizard/Retrieve",
            List = "Common/ImportWizard/List",
            ImportWizardBulkAction = "Common/ImportWizard/ImportWizardBulkAction",
            GetTableHeaders = "Common/ImportWizard/GetTableHeaders",
            GetExcelColumnList = "Common/ImportWizard/GetExcelColumnList",
            SerializeList = "Common/ImportWizard/SerializeList"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ImportWizardBulkAction', 
            'GetTableHeaders', 
            'GetExcelColumnList', 
            'SerializeList'
        ].forEach(x => {
            (<any>ImportWizardService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
