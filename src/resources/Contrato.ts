import Resource from './Resource';
import {
  IContratoCadastrarAnexoResponse,
  IContratoDesbloquearResponse,
  IContratoConsultaLinhaMovelResponse,
  ITrocaFormaPagamentoResponse,
  IAlterarDiaDeVencimentoResponse,
} from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import {
  IContratoCadastrarAnexoRequest,
  IContratoDesbloquearRequest,
  IContratoConsultaLinhaMovelRequest,
  ITrocaFormaPagamentoRequest,
  IAlterarDiaDeVencimentoRequest,
} from './interface/ISimetraRequest';
import SimetraError from './SimetraError';
export default class Contrato extends Resource {
  constructor(config: IConfig) {
    super(config);
  }

  public async cadastrarAnexo({
    COD_CNTR,
    SEQ_CONTRATO_ANEXO_TIPO,
    ANEXO_BUFFER,
    ANEXO_NOME,
  }: IContratoCadastrarAnexoRequest): Promise<
    IContratoCadastrarAnexoResponse | any
  > {
    const { data } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_CONTRATO_CADASTRAR_ANEXO' },
      data: {
        COD_CNTR,
        SEQ_CONTRATO_ANEXO_TIPO,
        ANEXO_BUFFER,
        ANEXO_NOME,
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem);
    }

    return data;
  }

  public async desbloquear({
    COD_CNTR,
  }: IContratoDesbloquearRequest): Promise<IContratoDesbloquearResponse | any> {
    const { data } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_CONTRATO_DESBLOQUEAR' },
      data: {
        COD_CNTR,
        MOTIVO_DESBLOQUEIO: 'DESBLOQUEIO TEMPORARIO',
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem);
    }

    return data;
  }

  public async consultarContratoLinhaMovel({
    COD_CNTR,
    DATA_CONSUMO,
    SEQ_LINHA,
  }: IContratoConsultaLinhaMovelRequest): Promise<
    IContratoConsultaLinhaMovelResponse
  > {
    const { data } = await this.callApi({
      method: 'post',
      params: {
        sNomeProc: 'FITTELECOM_CONTRATO_CONSULTAR_CONSUMO_LINHA_MOVEL',
      },
      data: {
        COD_CNTR,
        DATA_CONSUMO,
        SEQ_LINHA,
      },
    });

    return data;
  }

  public async trocarFormaPagamento({
    COD_CNTR,
    FORM_PAGTO,
    BANDEIRACARTAO,
    CVVCARTAO,
    DATAVALIDADECARTAO,
    NOMECARTAO,
    NUMEROCARTAO,
    IND_BOLETO_FISICO,
  }: ITrocaFormaPagamentoRequest): Promise<ITrocaFormaPagamentoResponse> {
    const { data } = await this.callApi({
      method: 'post',
      params: {
        sNomeProc: 'FITTELECOM_CONTRATO_ALTERAR_FORMA_PAGAMENTO',
      },
      data: {
        COD_CNTR,
        FORM_PAGTO,
        BANDEIRACARTAO,
        CVVCARTAO,
        DATAVALIDADECARTAO,
        NOMECARTAO,
        NUMEROCARTAO,
        IND_BOLETO_FISICO,
      },
    });

    return data;
  }

  public async alterarDiaDeVencimento({
    CNPJ_CPF_CLIE,
    COD_CNTR,
    DIA_VENC,
  }: IAlterarDiaDeVencimentoRequest): Promise<IAlterarDiaDeVencimentoResponse> {
    const { data } = await this.callApi({
      method: 'post',
      params: {
        sNomeProc: 'FITTELECOM_CONTRATO_ALTERAR_DATA_VENCIMENTO',
      },
      data: {
        CNPJ_CPF_CLIE,
        COD_CNTR,
        DIA_VENC,
      },
    });

    return data;
  }
}
