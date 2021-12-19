import {ApiResponse} from "./ApiResponse";
import {ApiResponseResult} from "./ApiResponseResult";

type ListApiResponseType<Data> = {
    list: Data[];
};

export class ListApiResponse<Data> extends ApiResponse<ListApiResponseType<Data>> {
    constructor (
        list: Data[],
        result: ApiResponseResult
    ) {
        super({list}, result);
    }
}