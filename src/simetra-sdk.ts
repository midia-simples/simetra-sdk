import Cliente from './resources/Cliente';
import IConfig from './resources/interface/IConfig';
import Atendimento from './resources/Atendimento';
import IncidenteRede from './resources/IncidenteRede';
import Titulo from './resources/Titulo';
import Vencimentos from './resources/Vencimentos';
import Produto from './resources/Produto';
import Validar from './resources/Validar';
import Contrato from './resources/Contrato';
import HabilitacaoProvisoria from './resources/HabilitacaoProvisoria';

/**
 * Exemplo uso da SDK
 *
 * ```typescript
 * const SimetraSdk = require('@midia-simples/simetra-sdk');
 *
 * (async () => {
 *    try {
 *      const simetraLib = new SimetraSdk({
 *        usuario: 'SIMETRA_USUARIO',
 *        senha: 'SIMETRA_SENHA',
 *        baseURI: 'SIMETRA_BASE_URL',
 *      });
 *      const response = await SimetraSdk.Cliente.consulta({
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

  get Atendimento(): Atendimento {
    return new Atendimento(this.config);
  }

  get Cliente(): Cliente {
    return new Cliente(this.config);
  }

  get IncidenteRede(): IncidenteRede {
    return new IncidenteRede(this.config);
  }

  get Titulo(): Titulo {
    return new Titulo(this.config);
  }

  get Vencimentos(): Vencimentos {
    return new Vencimentos(this.config);
  }

  get Produto(): Produto {
    return new Produto(this.config);
  }

  get Validar(): Validar {
    return new Validar(this.config);
  }

  get Contrato(): Contrato {
    return new Contrato(this.config);
  }

  get HabilitacaoProvisoria(): HabilitacaoProvisoria {
    return new HabilitacaoProvisoria(this.config);
  }
}
