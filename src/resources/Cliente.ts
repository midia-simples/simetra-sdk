import Resource from './Resource';
import {
  IClientAtualizarResponse,
  IClientConsultaResponse,
  IClientCadastrarContratoResponse,
  IClientLoginResponse,
  IClientCadastrarVindiResponse,
  IClientConsultaCadastroVindiResponse,
  IClienteCartaoCadastrarNovoResponse,
} from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import {
  IClientAtualizarRequest,
  IClientConsultaRequest,
  IClientCadastrarContratoRequest,
  IClientLoginRequest,
  IClientCadastrarVindiRequest,
  IClientConsultaCadastroVindiRequest,
  IClienteCartaoCadastrarNovoRequest,
} from './interface/ISimetraRequest';
import SimetraError from './SimetraError';

export default class Cliente extends Resource {
  constructor(config: IConfig) {
    super(config);
  }

  public async consulta({
    CNPJ_CPF_CLIE = undefined,
    COD_CNTR = undefined,
  }: IClientConsultaRequest): Promise<IClientConsultaResponse | any> {
    const { data } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_CLIENTE_CONSULTAR' },
      data: {
        CNPJ_CPF_CLIE,
        COD_CNTR,
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem);
    }

    return data;
  }

  public async login({
    CNPJ_CPF_CLIE,
    ASSINANTE_SENHA,
  }: IClientLoginRequest): Promise<IClientLoginResponse | any> {
    const { data } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_CLIENTE_LOGIN' },
      data: {
        CNPJ_CPF_CLIE,
        ASSINANTE_SENHA,
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem);
    }

    return data;
  }

  public async cadastrarContrato({
    Cpf,
    Nome,
    Rg,
    NomePai,
    NomeMae,
    DataNascimento,
    Cep,
    Logradouro,
    Numero,
    Complemento,
    Bairro,
    Cidade,
    Uf,
    DddTelefone,
    NumeroTelefone,
    DddCelular,
    NumeroCelular,
    Email,
    Cod_prod,
    Parc_instalacao,
    Dia_Vencimento,
    FormaPagto,
    COD_BANCO,
    TIPOCONTA,
    AGENCIA,
    Conta,
    dvConta,
    DataInstalacao,
    PeriodoInstalacao,
    fixo,
    movel,
  }: IClientCadastrarContratoRequest): Promise<
    IClientCadastrarContratoResponse | any
  > {
    const { data } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_CLIENTE_CADASTRAR_CONTRATO' },
      data: {
        Cpf,
        Nome,
        Rg,
        NomePai,
        NomeMae,
        DataNascimento,
        Cep,
        Logradouro,
        Numero,
        Complemento,
        Bairro,
        Cidade,
        Uf,
        DddTelefone,
        NumeroTelefone,
        DddCelular,
        NumeroCelular,
        Email,
        Cod_prod,
        Parc_instalacao,
        Dia_Vencimento,
        FormaPagto,
        COD_BANCO,
        TIPOCONTA,
        AGENCIA,
        Conta,
        dvConta,
        DataInstalacao,
        PeriodoInstalacao,
        fixo,
        movel,
      },
    });

    return data;
  }

  public async cadastrarVindi({
    CNPJ_CPF_CLIE,
    nomeCartao,
    dataValidadeCartao,
    numeroCartao,
    cvvCartao,
    bandeiraCartao,
  }: IClientCadastrarVindiRequest): Promise<
    IClientCadastrarVindiResponse | any
  > {
    const { data } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_VINDI_CARTAO_CADASTRAR' },
      data: {
        CNPJ_CPF_CLIE,
        nomeCartao,
        dataValidadeCartao,
        numeroCartao,
        cvvCartao,
        bandeiraCartao,
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem);
    }

    return data;
  }

  public async consultaCadastroVindi({
    CNPJ_CPF_CLIE,
  }: IClientConsultaCadastroVindiRequest): Promise<
    IClientConsultaCadastroVindiResponse | any
  > {
    const { data } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_VINDI_CONSULTAR_CADASTRO' },
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

  /**
   * @param {Object} param
   * @param param.COD_CLIE
   * @param param.COD_CNTR
   * @param param.CNPJ_CPF_CLIE
   * @param param.nomeCartao
   * @param param.dataValidadeCartao DEVE SER PADRAO MMAA, exemplo: 0425
   * @param param.numeroCartao
   * @param param.cvvCartao
   * @param param.bandeiraCartao Americanet: Amex, Diners, Hipercard, Master, Visa, Fit: visa, elo, hipercard, mastercard, diners_club, american_express, Rede: mastercard, visa, diners_club, elo, american_express, Network: visa, master, amex, elo, aura, jcb, diners, discover
   * @param param.COD_EMPR_FATR Retornado no método FITTELECOM_CLIENTE_CONSULTAR
   */
  public async CartaoCadastrarNovo({
    COD_CLIE,
    COD_CNTR,
    CNPJ_CPF_CLIE,
    nomeCartao,
    dataValidadeCartao,
    numeroCartao,
    cvvCartao,
    bandeiraCartao,
    COD_EMPR_FATR,
  }: IClienteCartaoCadastrarNovoRequest): Promise<
    IClienteCartaoCadastrarNovoResponse
  > {
    const { data } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_CONTRATO_CADASTRAR_CARTAO' },
      data: {
        COD_CLIE,
        COD_CNTR,
        CNPJ_CPF_CLIE,
        nomeCartao,
        dataValidadeCartao,
        numeroCartao,
        cvvCartao,
        bandeiraCartao,
        COD_EMPR_FATR,
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem);
    }

    return data;
  }
}
