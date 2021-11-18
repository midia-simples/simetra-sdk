import Resource from './Resource';
import IConfig from './interface/IConfig';
import { IVencimentosConsultResponse } from './interface/ISimetraResponse';
import SimetraError from './SimetraError';

export default class Vencimentos extends Resource {
  constructor(config: IConfig) {
    super(config);
  }

  public async consulta(): Promise<IVencimentosConsultResponse | any> {
    const { data, request } = await this.callApi({
      method: 'get',
      params: { sNomeProc: 'FITTELECOM_PARAMETRO_DIAS_VENCIMENTO_CONSULTAR' },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem, data, request);
    }

    return data;
  }
}
