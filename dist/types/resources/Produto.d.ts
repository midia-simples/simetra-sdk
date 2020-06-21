import Resource from './Resource';
import { IProdutoConsultaResponse } from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import { IProdutoConsultaRequest } from './interface/ISimetraRequest';
export default class Produto extends Resource {
    constructor(config: IConfig);
    consulta({ TIPO_PRODUTO, }: IProdutoConsultaRequest): Promise<IProdutoConsultaResponse | any>;
}
