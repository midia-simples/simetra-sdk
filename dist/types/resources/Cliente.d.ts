import Resource from './Resource';
import { IClientAtualizarResponse, IClientConsultaResponse, IClientCadastrarContratoResponse, IClientLoginResponse, IClientCadastrarVindiResponse } from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import { IClientAtualizarRequest, IClientConsultaRequest, IClientCadastrarContratoRequest, IClientLoginRequest, IClientCadastrarVindiRequest } from './interface/ISimetraRequest';
export default class Cliente extends Resource {
    constructor(config: IConfig);
    consulta({ CNPJ_CPF_CLIE, }: IClientConsultaRequest): Promise<IClientConsultaResponse | any>;
    login({ CNPJ_CPF_CLIE, ASSINANTE_SENHA, }: IClientLoginRequest): Promise<IClientLoginResponse | any>;
    cadastrarContrato({ Cpf, Nome, Rg, NomePai, NomeMae, DataNascimento, Cep, Logradouro, Numero, Complemento, Bairro, Cidade, Uf, DddTelefone, NumeroTelefone, DddCelular, NumeroCelular, Email, Cod_prod, Parc_instalacao, Dia_Vencimento, FormaPagto, COD_BANCO, TIPOCONTA, AGENCIA, Conta, dvConta, DataInstalacao, PeriodoInstalacao, fixo, movel, }: IClientCadastrarContratoRequest): Promise<IClientCadastrarContratoResponse | any>;
    cadastrarVindi({ CNPJ_CPF_CLIE, nomeCartao, dataValidadeCartao, numeroCartao, cvvCartao, bandeiraCartao, }: IClientCadastrarVindiRequest): Promise<IClientCadastrarVindiResponse | any>;
    atualizar({ CNPJ_CPF_CLIE, COD_CLIE, EMAIL, TELEFONE1, TELEFONE2, TELEFONE3, TELEFONE4, }: IClientAtualizarRequest): Promise<IClientAtualizarResponse | any>;
}
