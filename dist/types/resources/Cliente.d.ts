import Resource from './Resource';
import { IClientAtualizarResponse, IClientConsultaResponse, IClientCadastrarContratoResponse, IClientLoginResponse, IClientCadastrarVindiResponse, IClientConsultaCadastroVindiResponse, IClienteCartaoCadastrarNovoResponse, IClienteCartaoPagamentorapidoResponse, IEnviarEmailResponse, ICartaoConsultarCadastradosResponse, IIndicarNovoLeadResponse, IEnviarSMSResponse, IRegistrarLogDeAcessoResponse, IConsultarCampanhaIndiqueEGanheResponse, IConsultarSaldoIndiqueEGanheResponse } from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import { IClientAtualizarRequest, IClientConsultaRequest, IClientCadastrarContratoRequest, IClientLoginRequest, IClientCadastrarVindiRequest, IClientConsultaCadastroVindiRequest, IClienteCartaoCadastrarNovoRequest, IClienteCartaoPagamentorapidoRequest, IEnviarEmailRequest, ICartaoConsultarCadastradosRequest, IIndicarNovoLeadRequest, IEnviarSMSRequest, IRegistrarLogDeAcessoRequest, IConsultarCampanhaIndiqueEGanheRequest, IConsultarSaldoIndiqueEGanheRequest } from './interface/ISimetraRequest';
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
    CartaoConsultarCadastrados({ CNPJ_CPF_CLIE, }: ICartaoConsultarCadastradosRequest): Promise<ICartaoConsultarCadastradosResponse>;
    IndicarNovoLead({ CNPJ_CPF, CNPJ_CPF_INDICANTE, DATA_NASCIMENTO, DDD_CELULAR1, DDD_CELULAR2, DDD_CELULAR3, DDD_TELEFONE1, DDD_TELEFONE2, DDD_TELEFONE3, EMAIL, ENDERECO_BAIRRO, ENDERECO_CEP, ENDERECO_CIDADE, ENDERECO_COMPLEMENTO, ENDERECO_LOGRADOURO, ENDERECO_LOGRADOURO_TIPO, ENDERECO_NUMERO, ENDERECO_UF, INSCRICAO_MUNICIPAL, NOME_CLIENTE, NOME_MAE, NOME_PAI, NUMERO_CELULAR1, NUMERO_CELULAR2, NUMERO_CELULAR3, NUMERO_TELEFONE1, NUMERO_TELEFONE2, NUMERO_TELEFONE3, ORIGEM, RAZAO_SOCIAL, RG, SEXO, }: IIndicarNovoLeadRequest): Promise<IIndicarNovoLeadResponse>;
    EnviarSMS({ Celular, Texto, Cod_Cntr, }: IEnviarSMSRequest): Promise<IEnviarSMSResponse>;
    RegistrarLogDeAcesso({ COD_CLIE, AUDIT_APL_INCL, AUDIT_IP_INCL, CNPJ_CPF_CLIE, COD_CLIE_PORTAL_LOG_ACAO, }: IRegistrarLogDeAcessoRequest): Promise<IRegistrarLogDeAcessoResponse>;
    ConsultarCampanhaIndiqueEGanhe({ CNPJ_CPF_INDICANTE, DATA_FIM, DATA_INICIO, }: IConsultarCampanhaIndiqueEGanheRequest): Promise<IConsultarCampanhaIndiqueEGanheResponse>;
    ConsultarSaldoIndiqueEGanhe({ CNPJ_CPF_INDICANTE, }: IConsultarSaldoIndiqueEGanheRequest): Promise<IConsultarSaldoIndiqueEGanheResponse>;
}
