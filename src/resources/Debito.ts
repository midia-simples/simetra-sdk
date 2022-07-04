import Resource from './Resource';

import IConfig from './interface/IConfig';

import SimetraError from './SimetraError';

import {
  IDebitoCadastrarContaResponse,
  IDebitoConsultarContaResponse,
} from './interface/ISimetraResponse';
import {
  IDebitoCadastrarContaRequest,
  IDebitoConsultarContaRequest,
} from './interface/ISimetraRequest';

export default class Debito extends Resource {
  constructor(config: IConfig) {
    super(config);
  }

  public async cadastrarConta({
    AGENCIA_DIGITO,
    AGENCIA_NRO,
    COD_CLIE,
    CONTA_DIGITO,
    CONTA_NRO,
    NOME_BANCO,
  }: IDebitoCadastrarContaRequest): Promise<IDebitoCadastrarContaResponse> {
    const { data, request } = await this.callApi({
      method: 'post',
      params: {
        sNomeProc: 'FITTELECOM_CONTRATO_CADASTRAR_DEBITO_EM_CONTA',
      },
      data: {
        AGENCIA_DIGITO,
        AGENCIA_NRO,
        COD_CLIE,
        CONTA_DIGITO,
        CONTA_NRO,
        NOME_BANCO,
      },
    });

    if (!(String(data.retorno.codigo) === '0')) {
      throw new SimetraError(data.retorno.mensagem, data, request);
    }

    return data;
  }

  public async consultarConta({
    COD_CLIE,
  }: IDebitoConsultarContaRequest): Promise<IDebitoConsultarContaResponse> {
    const { data, request } = await this.callApi({
      method: 'post',
      params: {
        sNomeProc: 'FITTELECOM_CLIENTE_CONSULTAR_DEBITO_EM_CONTA',
      },
      data: {
        COD_CLIE,
      },
    });

    if (!(String(data.retorno.codigo) === '0')) {
      throw new SimetraError(data.retorno.mensagem, data, request);
    }

    return data;
  }
}
