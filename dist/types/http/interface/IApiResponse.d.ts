import IRequest from './IRequest';
export default interface IApiResponse<T = any> {
    data: T;
    status: number;
    request: IRequest;
}
