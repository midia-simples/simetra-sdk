import Resource from './Resource';
import {
  ITituloConsultaResponse,
  ITituloQuitarResponse,
  ITituloCadastrarResponse,
  ITituloDownloadResponse,
} from './interface/ISimetraResponse';
import IConfig from './interface/IConfig';
import {
  ITituloConsultaRequest,
  ITituloCadastrarRequest,
  ITituloQuitarRequest,
  ITituloDownloadRequest,
} from './interface/ISimetraRequest';
import SimetraError from './SimetraError';

export default class Titulo extends Resource {
  constructor(config: IConfig) {
    super(config);
  }

  public async cadastrar({
    COD_CNTR,
    TIPO_DE_COBRANCA,
    FORMA_DE_PAGAMENTO,
    DAT_VENC,
    VLR_TOTAL,
  }: ITituloCadastrarRequest): Promise<ITituloCadastrarResponse | any> {
    const { data, request } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_CONTRATO_CADASTRAR_TITULO' },
      data: {
        COD_CNTR,
        TIPO_DE_COBRANCA,
        FORMA_DE_PAGAMENTO,
        DAT_VENC,
        VLR_TOTAL,
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem, data, request);
    }

    return data;
  }

  public async consulta({
    COD_CNTR,
    COD_CNTR_TITL,
    COD_CLIE,
    COD_STAT_TITL,
    DAT_VENC_INICIAL,
    DAT_VENC_FINAL,
    DAT_RECEB_INICIAL,
    DAT_RECEB_FINAL,
  }: ITituloConsultaRequest): Promise<ITituloConsultaResponse | any> {
    const { data, request } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_CONTRATO_CONSULTAR_TITULO' },
      data: {
        COD_CNTR,
        COD_CNTR_TITL,
        COD_CLIE,
        COD_STAT_TITL,
        DAT_VENC_INICIAL,
        DAT_VENC_FINAL,
        DAT_RECEB_INICIAL,
        DAT_RECEB_FINAL,
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem, data, request);
    }

    return data;
  }

  public async quitar({
    COD_CNTR,
    COD_CNTR_TITL,
    DAT_RECEB,
    VLR_RECEB,
  }: ITituloQuitarRequest): Promise<ITituloQuitarResponse | any> {
    const { data, request } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_CONTRATO_QUITAR_TITULO' },
      data: {
        COD_CNTR,
        COD_CNTR_TITL,
        DAT_RECEB,
        VLR_RECEB,
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem, data, request);
    }

    return data;
  }

  public async download({
    COD_CNTR_TITL,
    COD_ARQ_DOC,
  }: ITituloDownloadRequest): Promise<ITituloDownloadResponse | any> {
    const { data, request } = await this.callApi({
      method: 'post',
      params: { sNomeProc: 'FITTELECOM_CONTRATO_DOWNLOAD_TITULO' },
      data: {
        COD_CNTR_TITL,
        COD_ARQ_DOC,
      },
    });

    if (!(data.retorno.codigo === '0')) {
      throw new SimetraError(data.retorno.mensagem, data, request);
    }

    return data;
  }
}
