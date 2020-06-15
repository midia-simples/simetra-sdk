import Resource from './Resource';
import {
  IClientAtualizarResponse,
  IClientConsultaResponse,
} from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import {
  IClientAtualizarRequest,
  IClientConsultaRequest,
} from './interface/ISimetraRequest';
import SimetraError from './SimetraError';

export default class Cliente extends Resource {
  constructor(config: IConfig) {
    super(config);
  }

  public async consulta({
    CNPJ_CPF_CLIE,
  }: IClientConsultaRequest): Promise<IClientConsultaResponse | any> {
    const { data } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_CLIENTE_CONSULTAR' },
      data: {
        CNPJ_CPF_CLIE,
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem);
    }

    return data;
  }

  public async atualizar({
    CNPJ_CPF_CLIE,
    COD_CLIE,
    EMAIL,
    TELEFONE1,
    TELEFONE2,
    TELEFONE3,
    TELEFONE4,
  }: IClientAtualizarRequest): Promise<IClientAtualizarResponse | any> {
    const { data } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_CLIENTE_ATUALIZAR' },
      data: {
        CNPJ_CPF_CLIE,
        COD_CLIE,
        EMAIL,
        TELEFONE1,
        TELEFONE2,
        TELEFONE3,
        TELEFONE4,
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem);
    }

    return data;
  }
}
