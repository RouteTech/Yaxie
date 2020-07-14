namespace Yaxie.Common {
    export interface SerializeListResponse extends Serenity.ListResponse<string> {
        FieldMatchJson?: string;
        FieldMatchList?: FieldMatch[];
        FieldMatchDisplay?: string[];
    }
}
