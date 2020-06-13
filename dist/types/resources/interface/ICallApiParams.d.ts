import { HttpMethods } from '../../util/Types';
import IApiDefaultParams from './IApiDefaultParams';
export default interface ICallApiParams {
    method: HttpMethods;
    params: IApiDefaultParams | any;
    data?: any;
}
