import { IClientConsultaRequest } from './ISimetraRequest';
export interface IRetorno {
    codigo?: string;
    mensagem?: string;
}
export interface IFaturaCliente {
    COD_CLIE?: number;
    RZAO_SOCL_CLIE?: string;
    DAT_NASC?: string;
    STATUS?: string;
    TELEFONE1?: string;
}
export interface IFaturaContrato {
    COD_CNTR?: number;
    DESCR_STAT_CNTR?: string;
    COD_CNTR_UNICO?: string;
    DAT_CNTR?: string;
    DAT_ATIV_CNTR?: string;
    DAT_INIC_COBR?: string;
    DAT_CANCL?: string;
    VLR_CNTR?: number;
    PRODUTO_NOME?: string;
    DIA_VENC?: number;
    FORM_PAGTO?: string;
    DESCR_DESIG_CNTR?: string;
    ENDER_COB_LOGR_TIPO?: string;
    ENDER_COB_LOGR_NOM?: string;
    ENDER_COB_NUM?: string;
    ENDER_COB_COMPL?: string;
    ENDER_COB_BAIR_NOM?: string;
    ENDER_COB_CDE_NOM?: string;
    ENDER_COB_UF?: string;
    ENDER_COB_CEP?: string;
    COD_CNTR_ITEM?: number;
    NOM_PROD?: string;
    DESIGNACAO_TECNICA?: string;
    REFERENCIA_CLIENTE?: string;
    ENDER_INSTALACAO_LOGR_TIPO?: string;
    ENDER_INSTALACAO_LOGR_NOM?: string;
    ENDER_INSTALACAO_NUM?: string;
    ENDER_INSTALACAO_COMPL?: string;
    ENDER_INSTALACAO_BAIR_NOM?: string;
    ENDER_INSTALACAO_CDE_NOM?: string;
    ENDER_INSTALACAO_UF?: string;
    ENDER_INSTALACAO_CEP?: string;
    COD_MAC_ADDRESS?: string;
    COD_MAC_ADDRESS_SERIALNUMBER?: string;
    COD_MAC_ADDRESS_ATA?: string;
    COD_MAC_ADDRESS_ROTEADOR?: string;
    COD_MAC_ADDRESS_ROTEADOR_SERIALNUMBER?: string;
    NUM_IP_POP?: string;
    NUM_SLOT?: string;
    NUM_PON?: string;
    USUR_PPPOE?: string;
    SEN_PPPOE?: string;
}
export interface IClientConsultaResponse {
    requisicao: IClientConsultaRequest | any;
    retorno: IRetorno | any;
    FAT_CLIENTE: IFaturaCliente | any;
    FAT_CONTRATO: IFaturaContrato[] | any;
}
