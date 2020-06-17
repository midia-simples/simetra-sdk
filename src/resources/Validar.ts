import Resource from './Resource';
import IConfig from './interface/IConfig';
import { IValidarViabilidadeKmlResponse } from './interface/ISimetraResponse';
import { IValidarViabilidadeKmlRequest } from './interface/ISimetraRequest';
import SimetraError from './SimetraError';

export default class Validar extends Resource {
  constructor(config: IConfig) {
    super(config);
  }

  public async viabilidadeKml({
    pCEP,
    pNUMERO,
    pENDERECO,
    pBAIRRO,
    pCIDADE,
    pUF,
  }: IValidarViabilidadeKmlRequest): Promise<
    IValidarViabilidadeKmlResponse | any
  > {
    const { data } = await this.callApi({
      method: 'get',
      params: {
        sNomeProc: 'FITTELECOM_VALIDAR_VIABILIDADE_KML',
        pCEP,
        pNUMERO,
        pENDERECO,
        pBAIRRO,
        pCIDADE,
        pUF,
      },
    });

    return data;
  }
}
