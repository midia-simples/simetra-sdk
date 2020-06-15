import Resource from './Resource';
import { ITituloConsultaResponse } from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import { ITituloConsultaRequest } from './interface/ISimetraRequest';
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
}
