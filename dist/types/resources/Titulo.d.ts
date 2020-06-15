import Resource from './Resource';
import { ITituloConsultaResponse } from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import { ITituloConsultaRequest } from './interface/ISimetraRequest';
export default class Titulo extends Resource {
    constructor(config: IConfig);
    consulta({ COD_CNTR, COD_CLIE, COD_STAT_TITL, DAT_VENC_INICIAL, DAT_VENC_FINAL, DAT_RECEB_INICIAL, DAT_RECEB_FINAL, }: ITituloConsultaRequest): Promise<ITituloConsultaResponse | any>;
}
