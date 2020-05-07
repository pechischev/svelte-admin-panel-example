import { AxiosRequestManager } from './AxiosRequestManager';
import {SimpleAuthStrategy} from "./strategy";

// TODO: need get server url from configs
export const requestManager = AxiosRequestManager.create({
  baseURL: '',
  strategy: new SimpleAuthStrategy(),
});