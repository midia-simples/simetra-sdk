import IHttpConfig from './interface/IHttpConfig';
import IApiResponse from './interface/IApiResponse';
import IRequest from './interface/IRequest';
declare class HttpClient {
    private readonly client;
    constructor(config: IHttpConfig);
    request({ method, url, params, data: dataParam, headers, }: IRequest): Promise<IApiResponse>;
}
export default HttpClient;
