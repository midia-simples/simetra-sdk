import Resource from './Resource';
import IConfig from './interface/IConfig';
import SimetraError from './SimetraError';
import {
  IHabilitacaoProvisoriaConsultaRequest,
  IHabilitacaoProvisoriaDesbloquearRequest,
} from './interface/ISimetraRequest';
import {
  IHabilitacaoProvisoriaConsultaResponse,
  IHabilitacaoProvisoriaDesbloquearResponse,
} from './interface/ISimetraResponse';

export default class HabilitacaoProvisoria extends Resource {
  constructor(config: IConfig) {
    super(config);
  }

  public async consulta({
    CLIENTE_CNPJ_CPF,
  }: IHabilitacaoProvisoriaConsultaRequest): Promise<
    IHabilitacaoProvisoriaConsultaResponse | any
  > {
    const { data } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_PROMESSA_PAGAMENTO_CONSULTAR' },
      data: {
        CLIENTE_CNPJ_CPF,
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem);
    }

    return data;
  }

  public async desbloquear({
    CLIENTE_CNPJ_CPF,
    COD_CNTR,
  }: IHabilitacaoProvisoriaDesbloquearRequest): Promise<
    IHabilitacaoProvisoriaDesbloquearResponse | any
  > {
    const { data } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'NETWORK_PROMESSA_PAGAMENTO_DESBLOQUEAR' },
      data: {
        CLIENTE_CNPJ_CPF,
        COD_CNTR,
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem);
    }

    return data;
  }
}
