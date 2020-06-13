import Cliente from './resources/Cliente';
import IConfig from './resources/interface/IConfig';
export default class SimetraSdk {
    private readonly config;
    constructor(config: IConfig);
    get Cliente(): Cliente;
}
