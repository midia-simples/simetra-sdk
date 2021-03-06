import Resource from './Resource';
import {
  IAtendimentoCadastrarResponse,
  IAtendimentoDelegarResponse,
  IAtendimentoConsultaResponse,
} from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import {
  IAtendimentoCadastrarRequest,
  IAtendimentoDelegarRequest,
  IAtendimentoConsultaRequest,
} from './interface/ISimetraRequest';
import SimetraError from './SimetraError';

export default class Atendimento extends Resource {
  constructor(config: IConfig) {
    super(config);
  }

  public async consulta({
    PROTOCOLO,
  }: IAtendimentoConsultaRequest): Promise<IAtendimentoConsultaResponse | any> {
    const { data } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_CHAMADO_CONSULTAR' },
      data: { PROTOCOLO },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem);
    }

    return data;
  }

  public async cadastrar({
    COD_CNTR,
    COD_CNTR_ITEM,
    COD_CHAMADO_FLUXO,
    TELEFONE1,
    TELEFONE2,
    DES_SOLICITANTE_EMAIL,
    DES_SOLICITACAO,
  }: IAtendimentoCadastrarRequest): Promise<
    IAtendimentoCadastrarResponse | any
  > {
    const { data } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_CHAMADO_CADASTRAR' },
      data: {
        COD_CNTR,
        COD_CNTR_ITEM,
        COD_CHAMADO_FLUXO,
        TELEFONE1,
        TELEFONE2,
        DES_SOLICITANTE_EMAIL,
        DES_SOLICITACAO,
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem);
    }

    return data;
  }

  public async delegar({
    SEQ_CHAMADO,
    COD_FLUXO_PARA,
    DES_DETALHE,
  }: IAtendimentoDelegarRequest): Promise<IAtendimentoDelegarResponse | any> {
    const { data } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_CHAMADO_DELEGAR' },
      data: {
        SEQ_CHAMADO,
        COD_FLUXO_PARA,
        DES_DETALHE,
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem);
    }

    return data;
  }
}
