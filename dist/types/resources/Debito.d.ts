import Resource from './Resource';
import IConfig from './interface/IConfig';
import { IDebitoCadastrarContaResponse, IDebitoConsultarContaResponse } from './interface/ISimetraResponse';
import { IDebitoCadastrarContaRequest, IDebitoConsultarContaRequest } from './interface/ISimetraRequest';
export default class Debito extends Resource {
    constructor(config: IConfig);
    cadastrarConta({ AGENCIA_DIGITO, AGENCIA_NRO, COD_CLIE, CONTA_DIGITO, CONTA_NRO, NOME_BANCO, }: IDebitoCadastrarContaRequest): Promise<IDebitoCadastrarContaResponse>;
    consultarConta({ COD_CLIE, }: IDebitoConsultarContaRequest): Promise<IDebitoConsultarContaResponse>;
}
