import { HttpMethods } from '../../util/Types';

export default interface IRequest {
  method: HttpMethods;
  url?: string;
  params?: any;
  data?: any;
  headers?: any;
}
