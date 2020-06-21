import Resource from './Resource';
import IConfig from './interface/IConfig';
import { IValidarViabilidadeKmlResponse, IValidarEmailResponse, IValidarTelefoneResponse } from './interface/ISimetraResponse';
import { IValidarViabilidadeKmlRequest, IValidarEmailRequest, IValidarTelefoneRequest } from './interface/ISimetraRequest';
export default class Validar extends Resource {
    constructor(config: IConfig);
    viabilidadeKml({ pCEP, pNUMERO, pENDERECO, pBAIRRO, pCIDADE, pUF, }: IValidarViabilidadeKmlRequest): Promise<IValidarViabilidadeKmlResponse | any>;
    email({ pEMAIL, pAUDIT_IP_INCL, }: IValidarEmailRequest): Promise<IValidarEmailResponse | any>;
    telefone({ pTELEFONE, pAUDIT_IP_INCL, }: IValidarTelefoneRequest): Promise<IValidarTelefoneResponse | any>;
}
