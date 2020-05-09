import {AxiosRequestManager} from './AxiosRequestManager';
import {SimpleAuthStrategy} from './strategy';

export const requestManager = AxiosRequestManager.create({
  baseURL: process.env.API_URL,
  strategy: new SimpleAuthStrategy(),
});