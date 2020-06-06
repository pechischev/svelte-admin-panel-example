import {companyMock} from './company';
import {shopsMock} from './shops';
import {transactionsMock} from './transactions';
import {userMock} from "./user";
import {shops} from '../store';

export const mockRequests = {
  company: (url, {data, method} = {}) => {
    if (/\/company\/\d/.test(url)) {
      return data;
    }

    if (/\/company\//.test(url)) {
      return companyMock;
    }

    return null;
  },
  shops: (url, {data, method} = {}) => {
    if (/\/shops\/\d/.test(url)) {
      return data;
    }

    if (/\/shops\//.test(url)) {

      if (method === 'get') {
        const currentShops = shops.getShops();
        return currentShops.length ? currentShops : shopsMock;
      }

      return {
        ...data,
        id: Date.now(),
      };
    }

    return null;
  },
  transaction: (url, {data, method} = {}) => {
    if (/\/transactions\//.test(url)) {

      return transactionsMock;
    }
    return null;
  },
  user: (url) => {
    if (/\/user\//.test(url)) {
      return userMock;
    }
    return null;
  }
};