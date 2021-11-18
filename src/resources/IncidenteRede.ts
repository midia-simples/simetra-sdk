import Resource from './Resource';
import { IIncidenteRedeConsultaResponse } from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import { IIncidenteRedeConsultaRequest } from './interface/ISimetraRequest';
import SimetraError from './SimetraError';

export default class IncidenteRede extends Resource {
  constructor(config: IConfig) {
    super(config);
  }

  public async consulta({
    POP_IP,
    ENDER_CDE_NOM,
    ENDER_BAIR_NOM,
    ENDER_UF,
  }: IIncidenteRedeConsultaRequest): Promise<
    IIncidenteRedeConsultaResponse | any
  > {
    const { data, request } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_CHAMADO_CONSULTAR_INCIDENTE_DE_REDE' },
      data: {
        POP_IP,
        ENDER_CDE_NOM,
        ENDER_BAIR_NOM,
        ENDER_UF,
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem, data, request);
    }

    return data;
  }
}
