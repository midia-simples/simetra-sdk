import IApiResponse from './interface/IApiResponse';
import IRequest from './interface/IRequest';

export default class ApiError {
  public status: number | undefined;
  public data: any;
  public request: IRequest;

  constructor({ data, status, request }: IApiResponse) {
    this.data = data;
    this.status = status;
    this.request = request;

    Object.setPrototypeOf(this, ApiError.prototype);
    Error.captureStackTrace(this, ApiError);
  }
}
