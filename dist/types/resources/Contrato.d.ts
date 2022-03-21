import Resource from './Resource';
import { IContratoCadastrarAnexoResponse, IContratoDesbloquearResponse, IContratoConsultaLinhaMovelResponse, ITrocaFormaPagamentoResponse, IAlterarDiaDeVencimentoResponse, IConsultarDiasDeVencimentoResponse, IAlterarWifiResponse, ITituloPixGerarBoletoResponse } from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import { IContratoCadastrarAnexoRequest, IContratoDesbloquearRequest, IContratoConsultaLinhaMovelRequest, ITrocaFormaPagamentoRequest, IAlterarDiaDeVencimentoRequest, IAlterarWifiRequest, ITituloPixGerarBoletoRequest } from './interface/ISimetraRequest';
export default class Contrato extends Resource {
    constructor(config: IConfig);
    cadastrarAnexo({ COD_CNTR, SEQ_CONTRATO_ANEXO_TIPO, ANEXO_BUFFER, ANEXO_NOME, }: IContratoCadastrarAnexoRequest): Promise<IContratoCadastrarAnexoResponse | any>;
    desbloquear({ COD_CNTR, }: IContratoDesbloquearRequest): Promise<IContratoDesbloquearResponse | any>;
    consultarContratoLinhaMovel({ COD_CNTR, DATA_CONSUMO, SEQ_LINHA, }: IContratoConsultaLinhaMovelRequest): Promise<IContratoConsultaLinhaMovelResponse>;
    trocarFormaPagamento({ COD_CNTR, FORM_PAGTO, BANDEIRACARTAO, CVVCARTAO, DATAVALIDADECARTAO, NOMECARTAO, NUMEROCARTAO, IND_BOLETO_FISICO, }: ITrocaFormaPagamentoRequest): Promise<ITrocaFormaPagamentoResponse>;
    alterarDiaDeVencimento({ CNPJ_CPF_CLIE, COD_CNTR, DIA_VENC, }: IAlterarDiaDeVencimentoRequest): Promise<IAlterarDiaDeVencimentoResponse>;
    alterarWifi({ COD_CLIE, COD_CNTR, COD_CNTR_ITEM, COD_PROTOCOLO, NOM_WIFI_NOVO, SEN_WIFI_NOVO, }: IAlterarWifiRequest): Promise<IAlterarWifiResponse>;
    consultarDiasDeVencimento(): Promise<IConsultarDiasDeVencimentoResponse>;
    tituloPixGerarBoleto({ COD_CLIE, COD_CNTR_TITL, }: ITituloPixGerarBoletoRequest): Promise<ITituloPixGerarBoletoResponse>;
}
