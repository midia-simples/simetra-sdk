import Resource from './Resource';
import {
  IContratoCadastrarAnexoResponse,
  IContratoDesbloquearResponse,
  IContratoConsultaLinhaMovelResponse,
  ITrocaFormaPagamentoResponse,
  IAlterarDiaDeVencimentoResponse,
  IConsultarDiasDeVencimentoResponse,
  IAlterarWifiResponse,
  ITituloPixGerarBoletoResponse,
  IAlterarFormaDePagamentoGrupoResponse,
} from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import {
  IContratoCadastrarAnexoRequest,
  IContratoDesbloquearRequest,
  IContratoConsultaLinhaMovelRequest,
  ITrocaFormaPagamentoRequest,
  IAlterarDiaDeVencimentoRequest,
  IAlterarWifiRequest,
  ITituloPixGerarBoletoRequest,
  IAlterarFormaDePagamentoGrupoRequest,
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
    const { data, request } = await this.callApi({
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
      throw new SimetraError(data.retorno.mensagem, data, request);
    }

    return data;
  }

  public async desbloquear({
    COD_CNTR,
  }: IContratoDesbloquearRequest): Promise<IContratoDesbloquearResponse | any> {
    const { data, request } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_CONTRATO_DESBLOQUEAR' },
      data: {
        COD_CNTR,
        MOTIVO_DESBLOQUEIO: 'DESBLOQUEIO TEMPORARIO',
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem, data, request);
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

  public async alterarWifi({
    COD_CLIE,
    COD_CNTR,
    COD_CNTR_ITEM,
    COD_PROTOCOLO,
    NOM_WIFI_NOVO,
    SEN_WIFI_NOVO,
  }: IAlterarWifiRequest): Promise<IAlterarWifiResponse> {
    const { data } = await this.callApi({
      method: 'post',
      params: {
        sNomeProc: 'FITTELECOM_CONTRATO_ALTERAR_WIFI',
      },
      data: {
        COD_CLIE,
        COD_CNTR,
        COD_CNTR_ITEM,
        COD_PROTOCOLO,
        NOM_WIFI_NOVO,
        SEN_WIFI_NOVO,
      },
    });

    return data;
  }

  public async consultarDiasDeVencimento(): Promise<
    IConsultarDiasDeVencimentoResponse
  > {
    const { data } = await this.callApi({
      method: 'get',
      params: {
        sNomeProc: 'FITTELECOM_PARAMETRO_DIAS_VENCIMENTO_CONSULTAR',
      },
    });

    return data;
  }

  public async tituloPixGerarBoleto({
    COD_CLIE,
    COD_CNTR_TITL,
  }: ITituloPixGerarBoletoRequest): Promise<ITituloPixGerarBoletoResponse> {
    const { data, request } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_PIX_GERAR_BOLETO' },
      data: {
        COD_CLIE,
        COD_CNTR_TITL,
      },
    });

    if (!(String(data.retorno.codigo) === '0')) {
      throw new SimetraError(data.retorno.mensagem, data, request);
    }

    return data;
  }

  public async alterarFormaDePagamentoGrupo({
    COD_CNTR,
    FORM_PAGTO,
    COD_CLIE_CARTAO,
    COD_CLIE_DEBITO_EM_CONTA,
    IND_BOLETO_FISICO,
  }: IAlterarFormaDePagamentoGrupoRequest): Promise<
    IAlterarFormaDePagamentoGrupoResponse
  > {
    const { data, request } = await this.callApi({
      method: 'post',
      params: {
        sNomeProc: 'FITTELECOM_CONTRATO_ALTERAR_FORMA_PAGAMENTO_GRUPO',
      },
      data: {
        COD_CNTR,
        FORM_PAGTO,
        COD_CLIE_CARTAO,
        COD_CLIE_DEBITO_EM_CONTA,
        IND_BOLETO_FISICO,
      },
    });

    if (!(String(data.retorno.codigo) === '0')) {
      throw new SimetraError(data.retorno.mensagem, data, request);
    }

    return data;
  }
}
