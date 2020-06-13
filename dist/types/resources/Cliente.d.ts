import Resource from './Resource';
import { IClientConsultaResponse } from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import { IClientConsultaRequest } from './interface/ISimetraRequest';
export default class Cliente extends Resource {
    constructor(config: IConfig);
    consulta({ CNPJ_CPF_CLIE, }: IClientConsultaRequest): Promise<IClientConsultaResponse | any>;
}
