import Resource from './Resource';
import { IContratoCadastrarAnexoResponse } from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import { IContratoCadastrarAnexoRequest } from './interface/ISimetraRequest';
import SimetraError from './SimetraError';
export default class Contrato extends Resource {
  constructor(config: IConfig) {
    super(config);
  }

  public async cadastrarAnexo({
    COD_CNTR,
    SEQ_CONTRATO_ANEXO_TIPO,
    ANEXO_BUFFER,
    ANEXO_NOME,
  }: IContratoCadastrarAnexoRequest): Promise<
    IContratoCadastrarAnexoResponse | any
  > {
    const { data } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_CONTRATO_CADASTRAR_ANEXO' },
      data: {
        COD_CNTR,
        SEQ_CONTRATO_ANEXO_TIPO,
        ANEXO_BUFFER,
        ANEXO_NOME,
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem);
    }

    return data;
  }
}
