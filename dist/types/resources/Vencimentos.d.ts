import Resource from './Resource';
import IConfig from './interface/IConfig';
import { IVencimentosConsultResponse } from './interface/ISimetraResponse';
export default class Vencimentos extends Resource {
    constructor(config: IConfig);
    consulta(): Promise<IVencimentosConsultResponse | any>;
}
