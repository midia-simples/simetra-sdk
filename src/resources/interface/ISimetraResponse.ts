import {
  IClientConsultaRequest,
  IProdutoConsultaRequest,
  IClientLoginRequest,
  IClientCadastrarVindiRequest,
  ITituloCadastrarRequest,
  ITituloQuitarRequest,
  ITituloDownloadRequest,
} from './ISimetraRequest';

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
  LOGIN_VALIDO?: string;
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

export interface IProdutoResponse {
  COD_PROD: number;
  NOM_PROD: string;
  VLR_PROD: number;
  VLR_INSTL: number;
  DESCR_PROD: string;
  COD_POLICY: string;
  QTD_MIN_LINH: number;
  QTD_MIN_LINH_MOVEL: number;
  IND_PJ: boolean;
  IND_PF: boolean;
  QTD_MAX_PARCL_INSTL: string;
}

export interface IProdutoConsultaResponse {
  requisicao: IProdutoConsultaRequest | any;
  retorno: IRetorno | any;
  S2_PRODUTO: IProdutoResponse[] | any;
}

export interface IClientConsultaResponse {
  requisicao: IClientConsultaRequest | any;
  retorno: IRetorno | any;
  FAT_CLIENTE: IFaturaCliente | any;
  FAT_CONTRATO: IFaturaContrato[] | any;
}

export interface IClientLoginResponse {
  requisicao: IClientLoginRequest | any;
  retorno: IRetorno | any;
  FAT_CLIENTE: IFaturaCliente | any;
}

export interface IClientCadastrarContratoResponse {
  CODIGO_CONTRATO?: number;
  retorno?: string;
  InstalacaoAgendados?: string;
  InstalacaoPeriodo?: string;
  Observacao?: string;
}

export interface IClientCadastrarVindiResponse {
  requisicao: IClientCadastrarVindiRequest | any;
  retorno: IRetorno | any;
  COD_CLIE?: number;
  ID_CLIENTE_VINDI?: string;
  ID_CARTAO_VINDI?: number;
}

interface IRequisicaoClientAtualizarResponse {
  CNPJ_CPF_CLIE?: string;
  COD_CLIE?: string;
}

export interface IClientAtualizarResponse {
  requisicao: IRequisicaoClientAtualizarResponse | any;
  retorno: IRetorno | any;
}

interface IAtendimentoRequisicaoCadastrarResponse {
  COD_CNTR?: number;
  COD_CNTR_ITEM?: number;
  COD_CHAMADO_FLUXO?: number;
}

interface IAtendimentoS2ChamadoCadastrarResponse {
  NUM_PROTOCOLO_ATENDIMENTO?: string;
  SEQ_CHAMADO?: number;
}

export interface IAtendimentoCadastrarResponse {
  requisicao: IAtendimentoRequisicaoCadastrarResponse | any;
  retorno: IRetorno | any;
  S2_CHAMADO: IAtendimentoS2ChamadoCadastrarResponse | any;
}

interface IAtendimentoRequisicaoDelegarResponse {
  SEQ_CHAMADO?: string;
  COD_FLUXO_PARA?: string;
}

export interface IAtendimentoDelegarResponse {
  requisicao: IAtendimentoRequisicaoDelegarResponse | any;
  retorno: IRetorno | any;
}

interface IIncidenteRedeRequisicaoConsultaResponse {
  POP_IP?: string;
  ENDER_CDE_NOM?: string;
  ENDER_BAIR_NOM?: string;
  ENDER_UF?: string;
}

export interface IIncidenteRedeS2chamadoConsultaResponse {
  SEQ_CHAMADO?: number;
  NUM_PROTOCOLO_ATENDIMENTO?: string;
  DES_CHAMADO_FLUXO?: string;
  POP_IP?: string;
  POP_NOME?: string;
  ENDER_BAIR_NOM?: string;
  ENDER_CDE_NOM?: string;
  ENDER_UF?: string;
  ENLACE_DETALHE?: string;
  DAT_SOLICITACAO?: Date;
  DES_CHAMADO_STATUS?: string;
  AUDIT_DAT_ALTER?: Date;
  NRO_CIRCUITOS_VINCULADOS?: number;
}

export interface IIncidenteRedeConsultaResponse {
  requisicao: IIncidenteRedeRequisicaoConsultaResponse | any;
  retorno: IRetorno | any;
  S2_CHAMADO: IIncidenteRedeS2chamadoConsultaResponse[] | any;
}

interface ITituloRequisicaoConsultaResponse {
  COD_CNTR?: string;
  COD_CLIE?: string;
  COD_STAT_TITL?: string;
  DAT_VENC_INICIAL?: string;
  DAT_VENC_FINAL?: string;
  DAT_RECEB_INICIAL?: string;
  DAT_RECEB_FINAL?: string;
}

interface ITituloFatContratoConsultaResponse {
  COD_CNTR_TITL?: number;
  NUM_PARCL?: number;
  ANO_REF?: number;
  MES_REF?: number;
  DAT_VENC?: string;
  VLR_TOTAL?: number;
  DAT_RECEB?: any;
  VLR_RECEB?: number;
  COD_STAT_TITL?: number;
  DESCR_STAT_TITL?: string;
  COD_CNTR?: number;
  COD_CLIE?: number;
  COD_ARQ_DOC?: number;
}

export interface ITituloConsultaResponse {
  requisicao: ITituloRequisicaoConsultaResponse;
  retorno: IRetorno;
  FAT_CONTRATO_TITULO: ITituloFatContratoConsultaResponse[];
}

export interface IVencimentosConsultResponse {
  retorno: IRetorno;
  parametro: string;
}

export interface IValidarViabilidadeKmlResponse {
  endereco_Formatado?: string;
  Code?: number;
  Message?: string;
  PossuiViabilidade?: boolean;
  PossuiViabilidadeMPE?: boolean;
  ViabilidadeNaCidade?: boolean;
  CepComMaisDeUmLogradouro?: boolean;
  End_Logradouro?: string;
  End_Numero?: number;
  End_Bairro?: string;
  End_Cidade?: string;
  End_Estado?: string;
  End_Cep?: string;
  Latitude?: number;
  Longitude?: number;
  PossuiBloqueioDeVenda?: string;
}

export interface IValidarEmailResponse {
  pEMAIL?: string;
  sEMAIL_SCORE?: number;
  sFLAG_FORMAT_VALID?: boolean;
  sFLAG_MX_FOUND?: boolean;
  sFLAG_SMTP_CHECK?: boolean;
  s_email_valido?: string;
}

export interface IValidarTelefoneResponse {
  TELEFONE?: string;
  ObjetoWebService_NOM_USUR?: string;
  ObjetoWebService_COD_USUR?: number;
  ObjetoWebService_IP?: string;
  s_code?: string;
  s_message?: string;
  s_formato_valido?: string;
  s_base_portabilidade?: string;
  s_base_cadup?: string;
  s_operadora_nome?: string;
  s_telefone_cnl?: string;
  s_telefone_cidade?: string;
  s_telefone_valido?: string;
}

export interface IRetornoTituloCadastrar extends IRetorno {
  COD_CNTR_TITL: number;
  COD_ARQ_DOC: number;
}
export interface ITituloCadastrarResponse {
  retorno: IRetornoTituloCadastrar;
  requisicao: ITituloCadastrarRequest;
}

export interface ITituloQuitarResponse {
  requisicao: ITituloQuitarRequest;
  retorno: IRetorno;
  FAT_CONTRATO_TITULO: {
    COD_CNTR_TITL: string;
    OBSERVACAO: string;
  };
}

export interface ITituloDownloadResponse {
  requisicao: ITituloDownloadRequest;
  retorno: IRetorno;
  FAT_CONTRATO_TITULO: {
    COD_CNTR_TITL: number;
    COD_ARQ_DOC: number;
    NOM_ARQ_DOC: string;
    NUM_PARCL: number;
    ANO_REF: number;
    MES_REF: number;
    DAT_VENC: string;
    VLR_TOTAL: number;
    DAT_RECEB: string;
    VLR_RECEB: number;
    COD_STAT_TITL: number;
    DESCR_STAT_TITL: string;
    COD_CNTR: number;
    COD_CLIE: number;
    LINH_DIGT: string;
    CODIGO_BARRAS: string;
    NOSSO_NUM: string;
    NUM_CART: string;
    NUM_AGEN: string;
    NUM_CNTA: string;
    NUM_CNTA_DIG: string;
    RZAO_SOCL: string;
    CNPJ_EMPR: string;
    ENDER_FAT_LOGR_TIPO: string;
    ENDER_FAT_LOGR_NOM: string;
    ENDER_FAT_NUM: string;
    ENDER_FAT_COMPL: string;
    ENDER_FAT_BAIR_NOM: string;
    ENDER_FAT_CDE_NOM: string;
    ENDER_FAT_UF: string;
    ENDER_FAT_CEP: string;
    CNPJ_CPF_CLIE: string;
    DATA_EMISSAO: string;
    INSTR_CAIXA: string;
    OBSERVACAO: string;
    DADOS_ARQ_DOC: string;
  };
}
