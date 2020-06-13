import Cliente from './resources/Cliente';
import IConfig from './resources/interface/IConfig';

export default class SimetraSdk {
  private readonly config: IConfig;

  constructor(config: IConfig) {
    this.config = config;
  }

  get Cliente(): Cliente {
    return new Cliente(this.config);
  }
}
