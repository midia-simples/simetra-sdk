import Resource from './Resource';
import { IIncidenteRedeConsultaResponse } from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import { IIncidenteRedeConsultaRequest } from './interface/ISimetraRequest';
export default class IncidenteRede extends Resource {
    constructor(config: IConfig);
    consulta({ POP_IP, ENDER_CDE_NOM, ENDER_BAIR_NOM, ENDER_UF, }: IIncidenteRedeConsultaRequest): Promise<IIncidenteRedeConsultaResponse | any>;
}
