import Cliente from './resources/Cliente';
import IConfig from './resources/interface/IConfig';
import Atendimento from './resources/Atendimento';
import IncidenteRede from './resources/IncidenteRede';
import Titulo from './resources/Titulo';

/**
 * Exemplo uso da SDK
 *
 * ```typescript
 * (async () => {
 *    try {
 *      const simetraLib = new SimetraSdk({
 *        usuario: 'SIMETRA_USUARIO',
 *        senha: 'SIMETRA_SENHA',
 *        baseURI: 'SIMETRA_BASE_URL',
 *      });
 *      const response = await simetraLib.Cliente.consulta({
 *       CNPJ_CPF_CLIE: '',
 *      });
 *      response.FAT_CLIENTE.COD_CLIE;
 *      response.FAT_CLIENTE.DAT_NASC;
 *      response.FAT_CLIENTE.DAT_NASC;
 *    } catch (e) {
 *      console.log('err', e);
 *   }
 * })();
 * ```
 */
export default class SimetraSdk {
  private readonly config: IConfig;

  constructor(config: IConfig) {
    this.config = config;
  }

  get Cliente(): Cliente {
    return new Cliente(this.config);
  }

  get Atendimento(): Atendimento {
    return new Atendimento(this.config);
  }

  get IncidenteRede(): IncidenteRede {
    return new IncidenteRede(this.config);
  }

  get Titulo(): Titulo {
    return new Titulo(this.config);
  }
}
