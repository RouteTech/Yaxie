namespace Yaxie.Common {
    export interface GetExcelColumnListRequest extends Serenity.ListRequest {
        ImportFileList?: UploadFileNames[];
        FileName?: string;
        SampleRecords?: number;
    }
}
