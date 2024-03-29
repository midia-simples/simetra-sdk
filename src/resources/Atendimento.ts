import Resource from './Resource';
import {
  IAtendimentoCadastrarResponse,
  IAtendimentoDelegarResponse,
  IAtendimentoConsultaResponse,
  IInteragirAppMeuAmericanetResponse,
  IAtendimentoCadastrarAnexoResponse,
} from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import {
  IAtendimentoCadastrarRequest,
  IAtendimentoDelegarRequest,
  IAtendimentoConsultaRequest,
  IInteragirAppMeuAmericanetRequest,
  IAtendimentoCadastrarAnexoRequest,
} from './interface/ISimetraRequest';
import SimetraError from './SimetraError';

export default class Atendimento extends Resource {
  constructor(config: IConfig) {
    super(config);
  }

  public async consulta({
    PROTOCOLO,
    CNPJ_CPF_CLIE,
  }: IAtendimentoConsultaRequest): Promise<IAtendimentoConsultaResponse | any> {
    const { data, request } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_CHAMADO_CONSULTAR' },
      data: { PROTOCOLO, CNPJ_CPF_CLIE },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem, data, request);
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
    const { data, request } = await this.callApi({
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
      throw new SimetraError(data.retorno.mensagem, data, request);
    }

    return data;
  }

  public async delegar({
    SEQ_CHAMADO,
    COD_FLUXO_PARA,
    DES_DETALHE,
  }: IAtendimentoDelegarRequest): Promise<IAtendimentoDelegarResponse | any> {
    const { data, request } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_CHAMADO_DELEGAR' },
      data: {
        SEQ_CHAMADO,
        COD_FLUXO_PARA,
        DES_DETALHE,
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem, data, request);
    }

    return data;
  }

  public async InteragirAppMeuAmericanet({
    DES_DETALHE,
    SEQ_CHAMADO,
  }: IInteragirAppMeuAmericanetRequest): Promise<
    IInteragirAppMeuAmericanetResponse
  > {
    const { data, request } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_CHAMADO_INTERAGIR' },
      data: {
        DES_DETALHE,
        SEQ_CHAMADO,
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem, data, request);
    }

    return data;
  }

  public async CadastrarAnexo({
    SEQ_CHAMADO,
    ANEXO_BUFFER,
    ANEXO_NOME,
    SEQ_CHAMADO_ANEXO_TIPO,
  }: IAtendimentoCadastrarAnexoRequest): Promise<
    IAtendimentoCadastrarAnexoResponse
  > {
    const { data, request } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_CHAMADO_ANEXO' },
      data: {
        SEQ_CHAMADO,
        ANEXO_BUFFER,
        ANEXO_NOME,
        SEQ_CHAMADO_ANEXO_TIPO,
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem, data, request);
    }

    return data;
  }
}
