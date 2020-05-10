import {AxiosRequestManager} from './AxiosRequestManager';
import {SimpleAuthStrategy} from './strategy';
import {MockRequestManager} from './MockRequestManager';

const requestParams = {
  baseURL: process.env.API_URL,
  strategy: new SimpleAuthStrategy(),
};

export const requestManager = JSON.parse(process.env.REAL_API) ? AxiosRequestManager.create(requestParams) : MockRequestManager.create(requestParams);