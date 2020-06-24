import Resource from './Resource';
import {
  IClientAtualizarResponse,
  IClientConsultaResponse,
  IClientCadastrarContratoResponse,
  IClientLoginResponse,
  IClientCadastrarVindiResponse,
  IClientConsultaCadastroVindiResponse,
} from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import {
  IClientAtualizarRequest,
  IClientConsultaRequest,
  IClientCadastrarContratoRequest,
  IClientLoginRequest,
  IClientCadastrarVindiRequest,
  IClientConsultaCadastroVindiRequest,
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
}
