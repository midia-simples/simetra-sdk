import Resource from './Resource';

import IConfig from './interface/IConfig';

import SimetraError from './SimetraError';

import { IDebitoCadastrarContaResponse } from './interface/ISimetraResponse';
import { IDebitoCadastrarContaRequest } from './interface/ISimetraRequest';

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
}
