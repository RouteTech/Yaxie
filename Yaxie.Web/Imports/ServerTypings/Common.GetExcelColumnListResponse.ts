namespace Yaxie.Common {
    export interface GetExcelColumnListResponse extends Serenity.ServiceResponse {
        SampleDataHTML?: string;
        ExcelColumnList?: string[];
        SampleDataList?: string[];
    }
}
