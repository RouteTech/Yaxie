namespace Yaxie.Common {
    export interface SerializeListRequest extends Serenity.ListRequest {
        DropColumnList?: string[];
        TableName?: string;
    }
}
