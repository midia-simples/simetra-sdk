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
    const r = await simetraLib.Titulo.consulta({
      COD_CNTR: '',
      COD_CLIE: '',
      COD_STAT_TITL: '',
      DAT_VENC_INICIAL: '',
      DAT_VENC_FINAL: '',
      DAT_RECEB_INICIAL: '',
      DAT_RECEB_FINAL: '',
    });
    // eslint-disable-next-line no-console
    console.log(r);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('err', e);
  }
})();
