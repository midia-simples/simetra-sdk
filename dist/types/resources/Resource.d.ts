import IConfig from './interface/IConfig';
import IApiResponse from '../http/interface/IApiResponse';
import ICallApiParams from './interface/ICallApiParams';
export default class Resource {
    private readonly httpClient;
    private readonly config;
    constructor(config: IConfig);
    private paramsAuth;
    protected processResponse(response: IApiResponse): IApiResponse;
    protected callApi({ method, data, params, }: ICallApiParams): Promise<IApiResponse>;
}
