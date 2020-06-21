import IApiResponse from './interface/IApiResponse';
import IRequest from './interface/IRequest';
export default class ApiError {
    status: number | undefined;
    data: any;
    request: IRequest;
    constructor({ data, status, request }: IApiResponse);
}
