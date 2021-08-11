import dotenv from 'dotenv';
import { join } from 'path';
import SimetraSdk from './simetra-sdk';
dotenv.config({
  path: join(__dirname, '../.env'),
});

(async () => {
  try {
    const simetraLib = new SimetraSdk({
      usuario: process.env.SIMETRA_USUARIO || '',
      senha: process.env.SIMETRA_SENHA || '',
      baseURI: process.env.SIMETRA_BASE_URL || '',
    });

    const r = await simetraLib.HabilitacaoProvisoria.desbloquear({
      CLIENTE_CNPJ_CPF: '',
      COD_CNTR: 350348,
    });

    // eslint-disable-next-line no-console
    console.log(r);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('err', e);
  }
})();
