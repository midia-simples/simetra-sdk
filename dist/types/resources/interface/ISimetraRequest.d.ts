export interface IClientConsultaRequest {
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
    COD_CLIE: string;
    COD_STAT_TITL: string;
    DAT_VENC_INICIAL: string;
    DAT_VENC_FINAL: string;
    DAT_RECEB_INICIAL: string;
    DAT_RECEB_FINAL: string;
}
