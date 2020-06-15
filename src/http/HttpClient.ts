import IHttpConfig from './interface/IHttpConfig';
import Axios, { AxiosInstance, AxiosRequestConfig } from 'Axios';
import IApiResponse from './interface/IApiResponse';
import ApiError from './ApiError';
import IRequest from './interface/IRequest';

class HttpClient {
  private readonly client: AxiosInstance;

  constructor(config: IHttpConfig) {
    this.client = Axios.create({
      baseURL: config.baseURI,
      timeout: 50000,
    });
  }

  public async request({
    method,
    url = '',
    params = {},
    data: dataParam = {},
    headers = {},
  }: IRequest): Promise<IApiResponse> {
    try {
      const axiosConfig: AxiosRequestConfig = {
        data: dataParam,
        url,
        params,
        method,
        headers,
      };

      const { data: dataResponse, status } = await this.client(axiosConfig);

      return {
        data: dataResponse,
        status,
        request: {
          method,
          url,
          params,
          data: dataParam,
          headers,
        },
      };
    } catch (error) {
      if (error.response) {
        const {
          response: { status, data },
        } = error;
        throw new ApiError({
          data,
          status,
          request: { method, url, params, data: dataParam, headers },
        });
      }
      throw new Error(error.message);
    }
  }
}

export default HttpClient;
