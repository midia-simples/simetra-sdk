import Resource from './Resource';
import { IContratoCadastrarAnexoResponse, IContratoDesbloquearResponse, IContratoConsultaLinhaMovelResponse } from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import { IContratoCadastrarAnexoRequest, IContratoDesbloquearRequest, IContratoConsultaLinhaMovelRequest } from './interface/ISimetraRequest';
export default class Contrato extends Resource {
    constructor(config: IConfig);
    cadastrarAnexo({ COD_CNTR, SEQ_CONTRATO_ANEXO_TIPO, ANEXO_BUFFER, ANEXO_NOME, }: IContratoCadastrarAnexoRequest): Promise<IContratoCadastrarAnexoResponse | any>;
    desbloquear({ COD_CNTR, }: IContratoDesbloquearRequest): Promise<IContratoDesbloquearResponse | any>;
    consultarContratoLinhaMovel({ COD_CNTR, DATA_CONSUMO, SEQ_LINHA, }: IContratoConsultaLinhaMovelRequest): Promise<IContratoConsultaLinhaMovelResponse>;
}
