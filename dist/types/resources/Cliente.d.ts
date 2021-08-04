import Resource from './Resource';
import { IClientAtualizarResponse, IClientConsultaResponse, IClientCadastrarContratoResponse, IClientLoginResponse, IClientCadastrarVindiResponse, IClientConsultaCadastroVindiResponse, IClienteCartaoCadastrarNovoResponse, IClienteCartaoPagamentorapidoResponse, IEnviarEmailResponse } from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import { IClientAtualizarRequest, IClientConsultaRequest, IClientCadastrarContratoRequest, IClientLoginRequest, IClientCadastrarVindiRequest, IClientConsultaCadastroVindiRequest, IClienteCartaoCadastrarNovoRequest, IClienteCartaoPagamentorapidoRequest, IEnviarEmailRequest } from './interface/ISimetraRequest';
export default class Cliente extends Resource {
    constructor(config: IConfig);
    consulta({ CNPJ_CPF_CLIE, COD_CNTR, }: IClientConsultaRequest): Promise<IClientConsultaResponse | any>;
    login({ CNPJ_CPF_CLIE, ASSINANTE_SENHA, }: IClientLoginRequest): Promise<IClientLoginResponse | any>;
    cadastrarContrato({ Cpf, Nome, Rg, NomePai, NomeMae, DataNascimento, Cep, Logradouro, Numero, Complemento, Bairro, Cidade, Uf, DddTelefone, NumeroTelefone, DddCelular, NumeroCelular, Email, Cod_prod, Parc_instalacao, Dia_Vencimento, FormaPagto, COD_BANCO, TIPOCONTA, AGENCIA, Conta, dvConta, DataInstalacao, PeriodoInstalacao, fixo, movel, }: IClientCadastrarContratoRequest): Promise<IClientCadastrarContratoResponse | any>;
    cadastrarVindi({ CNPJ_CPF_CLIE, nomeCartao, dataValidadeCartao, numeroCartao, cvvCartao, bandeiraCartao, }: IClientCadastrarVindiRequest): Promise<IClientCadastrarVindiResponse | any>;
    consultaCadastroVindi({ CNPJ_CPF_CLIE, }: IClientConsultaCadastroVindiRequest): Promise<IClientConsultaCadastroVindiResponse | any>;
    atualizar({ CNPJ_CPF_CLIE, COD_CLIE, EMAIL, TELEFONE1, TELEFONE2, TELEFONE3, TELEFONE4, }: IClientAtualizarRequest): Promise<IClientAtualizarResponse | any>;
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
    CartaoCadastrarNovo({ COD_CLIE, COD_CNTR, CNPJ_CPF_CLIE, nomeCartao, dataValidadeCartao, numeroCartao, cvvCartao, bandeiraCartao, COD_EMPR_FATR, }: IClienteCartaoCadastrarNovoRequest): Promise<IClienteCartaoCadastrarNovoResponse>;
    /**
     * @param {Object} param
     * @param param.COD_CLIE Retornado no método FITTELECOM_CLIENTE_CONSULTAR
     * @param param.COD_CLIE_CARTAO Retornado no método FITTELECOM_CLIENTE_CONSULTAR_CARTAO
     * @param param.COD_CNTR_TITL Retornado no método FITTELECOM_CONTRATO_CONSULTAR_TITULO
     * @param param.NRO_PARCELA Ate 6 vezes
     * @param param.VLR_TOTAL Passar 0 (somente usado para acordo)
     * @param param.CNPJ_CPF_CLIE
     * @param param.OPERACAO_USN Passar 0
     * @param param.CODE_OPERACAO Passar tit_COD_CNTR_TITL - exemplo tit_56087544
     * @constructor
     */
    CartaoPagamentorapido({ COD_CLIE, COD_CLIE_CARTAO, COD_CNTR_TITL, NRO_PARCELA, VLR_TOTAL, CNPJ_CPF_CLIE, OPERACAO_USN, CODE_OPERACAO, }: IClienteCartaoPagamentorapidoRequest): Promise<IClienteCartaoPagamentorapidoResponse>;
    EnviarEmail({ CNPJ_CPF_CLIE, EMAIL_ASSUNTO, EMAIL_DESTINO, EMAIL_MENSAGEM, EMAIL_SENDER, }: IEnviarEmailRequest): Promise<IEnviarEmailResponse>;
}
