import Cliente from './resources/Cliente';
import IConfig from './resources/interface/IConfig';
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
    private readonly config;
    constructor(config: IConfig);
    get Cliente(): Cliente;
}
