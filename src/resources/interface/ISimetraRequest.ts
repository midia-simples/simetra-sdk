export interface IClientConsultaRequest {
  CNPJ_CPF_CLIE: string;
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
