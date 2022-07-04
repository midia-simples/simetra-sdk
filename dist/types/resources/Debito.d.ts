import Resource from './Resource';
import IConfig from './interface/IConfig';
import { IDebitoCadastrarContaResponse } from './interface/ISimetraResponse';
import { IDebitoCadastrarContaRequest } from './interface/ISimetraRequest';
export default class Debito extends Resource {
    constructor(config: IConfig);
    alterarFormaDePagamentoGrupo({ AGENCIA_DIGITO, AGENCIA_NRO, COD_CLIE, CONTA_DIGITO, CONTA_NRO, NOME_BANCO, }: IDebitoCadastrarContaRequest): Promise<IDebitoCadastrarContaResponse>;
}
