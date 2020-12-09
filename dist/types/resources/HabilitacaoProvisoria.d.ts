import Resource from './Resource';
import IConfig from './interface/IConfig';
import { IHabilitacaoProvisoriaConsultaRequest, IHabilitacaoProvisoriaDesbloquearRequest } from './interface/ISimetraRequest';
import { IHabilitacaoProvisoriaConsultaResponse, IHabilitacaoProvisoriaDesbloquearResponse } from './interface/ISimetraResponse';
export default class HabilitacaoProvisoria extends Resource {
    constructor(config: IConfig);
    consulta({ CLIENTE_CNPJ_CPF, }: IHabilitacaoProvisoriaConsultaRequest): Promise<IHabilitacaoProvisoriaConsultaResponse | any>;
    desbloquear({ CLIENTE_CNPJ_CPF, COD_CNTR, }: IHabilitacaoProvisoriaDesbloquearRequest): Promise<IHabilitacaoProvisoriaDesbloquearResponse | any>;
}
