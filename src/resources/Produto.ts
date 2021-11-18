import Resource from './Resource';
import { IProdutoConsultaResponse } from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import { IProdutoConsultaRequest } from './interface/ISimetraRequest';
import SimetraError from './SimetraError';

export default class Produto extends Resource {
  constructor(config: IConfig) {
    super(config);
  }

  public async consulta({
    TIPO_PRODUTO,
  }: IProdutoConsultaRequest): Promise<IProdutoConsultaResponse | any> {
    const { data, request } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_PRODUTO_CONSULTAR' },
      data: {
        TIPO_PRODUTO,
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem, data, request);
    }

    return data;
  }
}
