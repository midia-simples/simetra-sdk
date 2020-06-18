import Resource from './Resource';
import IConfig from './interface/IConfig';
import {
  IValidarViabilidadeKmlResponse,
  IValidarEmailResponse,
  IValidarTelefoneResponse,
} from './interface/ISimetraResponse';
import {
  IValidarViabilidadeKmlRequest,
  IValidarEmailRequest,
  IValidarTelefoneRequest,
} from './interface/ISimetraRequest';

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

  public async email({
    pEMAIL,
    pAUDIT_IP_INCL,
  }: IValidarEmailRequest): Promise<IValidarEmailResponse | any> {
    const { data } = await this.callApi({
      method: 'get',
      params: {
        sNomeProc: 'FITTELECOM_VALIDAR_EMAIL',
        pEMAIL,
        pAUDIT_IP_INCL,
      },
    });

    return data;
  }

  public async telefone({
    pTELEFONE,
    pAUDIT_IP_INCL,
  }: IValidarTelefoneRequest): Promise<IValidarTelefoneResponse | any> {
    const { data } = await this.callApi({
      method: 'get',
      params: {
        sNomeProc: 'FITTELECOM_VALIDAR_TELEFONE',
        pTELEFONE,
        pAUDIT_IP_INCL,
      },
    });

    return data;
  }
}
