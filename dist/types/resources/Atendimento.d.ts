import Resource from './Resource';
import { IAtendimentoCadastrarResponse, IAtendimentoDelegarResponse, IAtendimentoConsultaResponse } from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import { IAtendimentoCadastrarRequest, IAtendimentoDelegarRequest, IAtendimentoConsultaRequest } from './interface/ISimetraRequest';
export default class Atendimento extends Resource {
    constructor(config: IConfig);
    consulta({ PROTOCOLO, }: IAtendimentoConsultaRequest): Promise<IAtendimentoConsultaResponse | any>;
    cadastrar({ COD_CNTR, COD_CNTR_ITEM, COD_CHAMADO_FLUXO, TELEFONE1, TELEFONE2, DES_SOLICITANTE_EMAIL, DES_SOLICITACAO, }: IAtendimentoCadastrarRequest): Promise<IAtendimentoCadastrarResponse | any>;
    delegar({ SEQ_CHAMADO, COD_FLUXO_PARA, DES_DETALHE, }: IAtendimentoDelegarRequest): Promise<IAtendimentoDelegarResponse | any>;
}
