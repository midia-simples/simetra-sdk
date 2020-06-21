import Resource from './Resource';
import { ITituloConsultaResponse, ITituloQuitarResponse, ITituloCadastrarResponse, ITituloDownloadResponse } from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import { ITituloConsultaRequest, ITituloCadastrarRequest, ITituloQuitarRequest, ITituloDownloadRequest } from './interface/ISimetraRequest';
export default class Titulo extends Resource {
    constructor(config: IConfig);
    cadastrar({ COD_CNTR, TIPO_DE_COBRANCA, FORMA_DE_PAGAMENTO, DAT_VENC, VLR_TOTAL, }: ITituloCadastrarRequest): Promise<ITituloCadastrarResponse | any>;
    consulta({ COD_CNTR, COD_CNTR_TITL, COD_CLIE, COD_STAT_TITL, DAT_VENC_INICIAL, DAT_VENC_FINAL, DAT_RECEB_INICIAL, DAT_RECEB_FINAL, }: ITituloConsultaRequest): Promise<ITituloConsultaResponse | any>;
    quitar({ COD_CNTR, COD_CNTR_TITL, DAT_RECEB, VLR_RECEB, }: ITituloQuitarRequest): Promise<ITituloQuitarResponse | any>;
    download({ COD_CNTR_TITL, COD_ARQ_DOC, }: ITituloDownloadRequest): Promise<ITituloDownloadResponse | any>;
}
