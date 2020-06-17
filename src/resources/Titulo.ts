import Resource from './Resource';
import {
  ITituloConsultaResponse,
  ITituloQuitarResponse,
} from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import {
  ITituloConsultaRequest,
  ITituloQuitarRequest,
} from './interface/ISimetraRequest';
import SimetraError from './SimetraError';

export default class Titulo extends Resource {
  constructor(config: IConfig) {
    super(config);
  }

  public async consulta({
    COD_CNTR,
    COD_CLIE,
    COD_STAT_TITL,
    DAT_VENC_INICIAL,
    DAT_VENC_FINAL,
    DAT_RECEB_INICIAL,
    DAT_RECEB_FINAL,
  }: ITituloConsultaRequest): Promise<ITituloConsultaResponse | any> {
    const { data } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_CONTRATO_CONSULTAR_TITULO' },
      data: {
        COD_CNTR,
        COD_CLIE,
        COD_STAT_TITL,
        DAT_VENC_INICIAL,
        DAT_VENC_FINAL,
        DAT_RECEB_INICIAL,
        DAT_RECEB_FINAL,
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem);
    }

    return data;
  }

  public async quitar({
    COD_CNTR,
    COD_CNTR_TITL,
    DAT_RECEB,
    VLR_RECEB,
  }: ITituloQuitarRequest): Promise<ITituloQuitarResponse | any> {
    const { data } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_CONTRATO_QUITAR_TITULO' },
      data: {
        COD_CNTR,
        COD_CNTR_TITL,
        DAT_RECEB,
        VLR_RECEB,
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem);
    }

    return data;
  }
}
