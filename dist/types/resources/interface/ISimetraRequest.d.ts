export interface IProdutoConsultaRequest {
    TIPO_PRODUTO: string;
}
export interface IClientConsultaRequest {
    CNPJ_CPF_CLIE?: string;
    COD_CNTR?: string;
}
export interface IClientLoginRequest {
    CNPJ_CPF_CLIE: string;
    ASSINANTE_SENHA: string;
}
export interface IClientCadastrarContratoRequest {
    Cpf: string;
    Nome: string;
    Rg: string;
    NomePai: string;
    NomeMae: string;
    DataNascimento: string;
    Cep: string;
    Logradouro: string;
    Numero: string;
    Complemento: string;
    Bairro: string;
    Cidade: string;
    Uf: string;
    DddTelefone: string;
    NumeroTelefone: string;
    DddCelular: string;
    NumeroCelular: string;
    Email: string;
    Cod_prod: string;
    Parc_instalacao: string;
    Dia_Vencimento: string;
    FormaPagto: string;
    COD_BANCO: string;
    TIPOCONTA: string;
    AGENCIA: string;
    Conta: string;
    dvConta: string;
    DataInstalacao: string;
    PeriodoInstalacao: string;
    fixo: string[];
    movel: string[];
}
export interface IClientCadastrarVindiRequest {
    CNPJ_CPF_CLIE: string;
    nomeCartao: string;
    dataValidadeCartao: string;
    numeroCartao: string;
    cvvCartao: string;
    bandeiraCartao: string;
}
export interface IClientConsultaCadastroVindiRequest {
    CNPJ_CPF_CLIE: string;
}
export interface IClientAtualizarRequest {
    CNPJ_CPF_CLIE: string;
    COD_CLIE: string;
    TELEFONE1: string;
    TELEFONE2: string;
    TELEFONE3: string;
    TELEFONE4: string;
    EMAIL: string;
}
export interface IClienteCartaoCadastrarNovoRequest {
    COD_CLIE: number;
    COD_CNTR: number;
    CNPJ_CPF_CLIE: string;
    nomeCartao: string;
    /**
     * DEVE SER PADRAO MMAA, exemplo: 0425
     */
    dataValidadeCartao: string;
    numeroCartao: string;
    cvvCartao: string;
    /**
     * Americanet - DEVE SER: Amex, Diners, Hipercard, Master, Visa
     * Fit - DEVE SER: visa, elo, hipercard, mastercard, diners_club, american_express
     * Rede - DEVE SER: mastercard, visa, diners_club, elo, american_express
     * Network - DEVE SER: visa, master, amex, elo, aura, jcb, diners, discover
     */
    bandeiraCartao: string;
    /**
     * Retornado no método FITTELECOM_CLIENTE_CONSULTAR
     */
    COD_EMPR_FATR: string;
}
export interface IClienteCartaoPagamentorapidoRequest {
    /**
     * Retornado no método FITTELECOM_CLIENTE_CONSULTAR
     */
    COD_CLIE: string;
    /**
     * Retornado no método FITTELECOM_CLIENTE_CONSULTAR_CARTAO
     */
    COD_CLIE_CARTAO: string;
    /**
     * Retornado no método FITTELECOM_CONTRATO_CONSULTAR_TITULO
     */
    COD_CNTR_TITL: string;
    /**
     * Ate 6 vezes
     */
    NRO_PARCELA: string;
    /**
     * Passar 0 (somente usado para acordo)
     */
    VLR_TOTAL: number;
    CNPJ_CPF_CLIE: string;
    /**
     * Passar 0
     */
    OPERACAO_USN: string;
    /**
     * Passar tit_COD_CNTR_TITL - exemplo tit_56087544
     */
    CODE_OPERACAO: string;
}
export interface IAtendimentoCadastrarRequest {
    COD_CNTR: string;
    COD_CNTR_ITEM: string;
    COD_CHAMADO_FLUXO: string;
    TELEFONE1: string;
    TELEFONE2: string;
    DES_SOLICITANTE_EMAIL: string;
    DES_SOLICITACAO: string;
}
export interface IAtendimentoDelegarRequest {
    SEQ_CHAMADO: string;
    COD_FLUXO_PARA: string;
    DES_DETALHE: string;
}
export interface IIncidenteRedeConsultaRequest {
    POP_IP: string;
    ENDER_CDE_NOM: string;
    ENDER_BAIR_NOM: string;
    ENDER_UF: string;
}
export interface ITituloConsultaRequest {
    COD_CNTR: string;
    COD_CNTR_TITL: string;
    COD_CLIE: string;
    COD_STAT_TITL: string;
    DAT_VENC_INICIAL: string;
    DAT_VENC_FINAL: string;
    DAT_RECEB_INICIAL: string;
    DAT_RECEB_FINAL: string;
}
export interface IValidarViabilidadeKmlRequest {
    pCEP: string;
    pNUMERO: string;
    pENDERECO: string;
    pBAIRRO: string;
    pCIDADE: string;
    pUF: string;
}
export interface IValidarEmailRequest {
    pEMAIL: string;
    pAUDIT_IP_INCL: string;
}
export interface IValidarTelefoneRequest {
    pTELEFONE: string;
    pAUDIT_IP_INCL: string;
}
export interface ITituloQuitarRequest {
    COD_CNTR: string;
    COD_CNTR_TITL: string;
    DAT_RECEB: string;
    VLR_RECEB: string;
}
export interface ITituloCadastrarRequest {
    COD_CNTR: string;
    DAT_VENC: string;
    VLR_TOTAL: string;
    TIPO_DE_COBRANCA: string;
    FORMA_DE_PAGAMENTO: string;
}
export interface ITituloDownloadRequest {
    COD_CNTR_TITL: string;
    COD_ARQ_DOC: string;
}
export interface IContratoCadastrarAnexoRequest {
    COD_CNTR: string;
    SEQ_CONTRATO_ANEXO_TIPO: string;
    ANEXO_BUFFER: string;
    ANEXO_NOME: string;
}
export interface IContratoDesbloquearRequest {
    COD_CNTR: number;
}
export interface IAtendimentoConsultaRequest {
    PROTOCOLO?: string;
    CNPJ_CPF_CLIE?: string;
}
export interface IHabilitacaoProvisoriaConsultaRequest {
    CLIENTE_CNPJ_CPF: string;
}
export interface IHabilitacaoProvisoriaDesbloquearRequest {
    CLIENTE_CNPJ_CPF: string;
    COD_CNTR: number;
}
export interface IContratoConsultaLinhaMovelRequest {
    COD_CNTR: number;
    SEQ_LINHA: number;
    DATA_CONSUMO: string;
}
export interface ITrocaFormaPagamentoRequest {
    COD_CNTR: number;
    FORM_PAGTO: string;
    IND_BOLETO_FISICO?: number;
    NOMECARTAO?: string;
    DATAVALIDADECARTAO?: string;
    NUMEROCARTAO?: string;
    CVVCARTAO?: string;
    BANDEIRACARTAO?: string;
}
export interface IAlterarDiaDeVencimentoRequest {
    CNPJ_CPF_CLIE: string;
    COD_CNTR: number;
    DIA_VENC: number;
}
export interface IAlterarWifiRequest {
    COD_CLIE: number;
    COD_CNTR: number;
    COD_CNTR_ITEM: number;
    COD_PROTOCOLO: number;
    NOM_WIFI_NOVO: string;
    SEN_WIFI_NOVO: string;
}
export interface IEnviarEmailRequest {
    CNPJ_CPF_CLIE: string;
    EMAIL_ASSUNTO: string;
    EMAIL_MENSAGEM: string;
    EMAIL_DESTINO: string;
    EMAIL_SENDER: string;
}
export interface ICartaoConsultarCadastradosRequest {
    CNPJ_CPF_CLIE: string;
}
export interface IIndicarNovoLeadRequest {
    CNPJ_CPF?: string;
    CNPJ_CPF_INDICANTE: string;
    NOME_CLIENTE: string;
    ORIGEM?: string;
    RAZAO_SOCIAL?: string;
    NOME_MAE?: string;
    NOME_PAI?: string;
    RG?: string;
    INSCRICAO_MUNICIPAL?: string;
    DATA_NASCIMENTO?: string;
    SEXO?: 'M' | 'F';
    ENDERECO_LOGRADOURO_TIPO?: string;
    ENDERECO_LOGRADOURO?: string;
    ENDERECO_NUMERO?: string;
    ENDERECO_COMPLEMENTO?: string;
    ENDERECO_BAIRRO?: string;
    ENDERECO_CIDADE?: string;
    ENDERECO_UF?: string;
    ENDERECO_CEP?: string;
    DDD_CELULAR1: string;
    NUMERO_CELULAR1: string;
    DDD_CELULAR2?: string;
    NUMERO_CELULAR2?: string;
    DDD_CELULAR3?: string;
    NUMERO_CELULAR3?: string;
    DDD_TELEFONE1?: string;
    NUMERO_TELEFONE1?: string;
    DDD_TELEFONE2?: string;
    NUMERO_TELEFONE2?: string;
    DDD_TELEFONE3?: string;
    NUMERO_TELEFONE3?: string;
    EMAIL?: string;
}
export interface IEnviarSMSRequest {
    Celular: string;
    Texto: string;
    Cod_Cntr: number;
}
export interface IInteragirAppMeuAmericanetRequest {
    SEQ_CHAMADO: string;
    DES_DETALHE: string;
}
export interface IRegistrarLogDeAcessoRequest {
    COD_CLIE: number;
    CNPJ_CPF_CLIE: string;
    COD_CLIE_PORTAL_LOG_ACAO: number;
    AUDIT_IP_INCL: string;
    AUDIT_APL_INCL: string;
}
export interface IConsultarCampanhaIndiqueEGanheRequest {
    CNPJ_CPF_INDICANTE: string;
    DATA_INICIO: string;
    DATA_FIM: string;
}
export interface IConsultarSaldoIndiqueEGanheRequest {
    CNPJ_CPF_INDICANTE: string;
}
export interface ITituloPixGerarBoletoRequest {
    COD_CNTR_TITL: string;
    COD_CLIE: string;
}
export interface IAlterarFormaDePagamentoGrupoRequest {
    COD_CNTR: string | number;
    FORM_PAGTO: string;
    IND_BOLETO_FISICO?: number;
    COD_CLIE_CARTAO?: number;
    COD_CLIE_DEBITO_EM_CONTA?: number;
}
export interface IDebitoCadastrarContaRequest {
    AGENCIA_NRO: string;
    AGENCIA_DIGITO: string;
    CONTA_NRO: string;
    CONTA_DIGITO: string;
    NOME_BANCO: string;
    COD_CLIE: string | number;
}
export interface IDebitoConsultarContaRequest {
    COD_CLIE: string | number;
}
export interface IAtendimentoCadastrarAnexoRequest {
    SEQ_CHAMADO: string;
    SEQ_CHAMADO_ANEXO_TIPO: string;
    ANEXO_BUFFER: string;
    ANEXO_NOME: string;
}
