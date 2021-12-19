import {ApiResponseResult} from "./ApiResponseResult";

export class ApiResponse<DATA> {
    constructor (
        private readonly data: DATA,
        private readonly result: ApiResponseResult
    ) {}
}