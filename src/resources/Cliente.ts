import Resource from './Resource';
import { IClientConsultaResponse } from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import { IClientConsultaRequest } from './interface/ISimetraRequest';
import SimetraError from './SimetraError';

export default class Cliente extends Resource {
  constructor(config: IConfig) {
    super(config);
  }

  public async consulta({
    CNPJ_CPF_CLIE,
  }: IClientConsultaRequest): Promise<IClientConsultaResponse | any> {
    const { data } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_CLIENTE_CONSULTAR' },
      data: {
        CNPJ_CPF_CLIE,
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem);
    }

    return data;
  }
}
