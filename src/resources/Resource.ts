import HttpClient from '../http/HttpClient';
import IConfig from './interface/IConfig';
import IApiResponse from '../http/interface/IApiResponse';
import ICallApiParams from './interface/ICallApiParams';
import SimetraError from './SimetraError';

export default class Resource {
  private readonly httpClient: HttpClient;
  private readonly config: IConfig;

  constructor(config: IConfig) {
    this.config = config;
    this.httpClient = new HttpClient({ baseURI: config.baseURI });
  }

  private paramsAuth(): Omit<IConfig, 'baseURI'> {
    const { usuario, senha } = this.config;
    return {
      usuario,
      senha,
    };
  }

  protected processResponse(response: IApiResponse): IApiResponse {
    try {
      const { data, request, status } = response;

      if (data.retorno === 'ACESSO NAO AUTORIZADO') {
        throw new SimetraError(
          'Acesso não autorizado, verifique as credencias informadas',
          data,
          request
        );
      }

      return {
        data,
        status,
        request,
      };
    } catch (error) {
      if (error instanceof SimetraError) {
        throw new Error(error.message);
      }
      throw new Error(
        'Erro desconhecido, verifique os parâmetros da sua requisição'
      );
    }
  }

  protected async callApi({
    method,
    data,
    params,
  }: ICallApiParams): Promise<IApiResponse> {
    if (
      data?.CNPJ_CPF_CLIE &&
      data.CNPJ_CPF_CLIE.replace(/[^0-9]+/g, '') === '29285909000115'
    ) {
      console.log(`CONSULTA SIMETRA API`, {
        params,
        data,
      });
      // if (name.startsWith('29285909000115')) {
    }
    // params: { sNomeProc: 'FITTELECOM_CLIENTE_CONSULTAR' },
    // data: {
    //   CNPJ_CPF_CLIE,
    //   COD_CNTR,
    const { usuario, senha } = this.paramsAuth();

    const response = await this.httpClient.request({
      method,
      data,
      params: {
        ...params,
        sUser: usuario,
        sSenha: senha,
      },
    });

    return this.processResponse(response);
  }
}
