import Resource from './Resource';
import { IClientAtualizarResponse, IClientConsultaResponse } from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import { IClientAtualizarRequest, IClientConsultaRequest } from './interface/ISimetraRequest';
export default class Cliente extends Resource {
    constructor(config: IConfig);
    consulta({ CNPJ_CPF_CLIE, }: IClientConsultaRequest): Promise<IClientConsultaResponse | any>;
    atualizar({ CNPJ_CPF_CLIE, COD_CLIE, EMAIL, TELEFONE1, TELEFONE2, TELEFONE3, TELEFONE4, }: IClientAtualizarRequest): Promise<IClientAtualizarResponse | any>;
}
