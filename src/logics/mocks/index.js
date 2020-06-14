import {companyMock} from './company';
import {marketplacesMock} from './marketplace';
import {transactionsMock} from './transactions';
import {userMock} from "./user";
import {shops} from '../store';
import {singinMock} from './signin';

export const mockRequests = {
  signin: (url, {data, method} = {}) => singinMock,
  signout: (url, {data, method} = {}) => null,

  companies: (url, {data, method} = {}) => {
    if (/\/companies\/\d/.test(url)) {
      return data;
    }

    if (/\/companies\//.test(url)) {
      return companyMock;
    }

    return null;
  },
  marketplaces: (url, {data, method} = {}) => {
    if (/\/marketplaces\/\d/.test(url)) {
      return data;
    }

    if (/\/marketplaces\//.test(url)) {

      if (method === 'get') {
        const currentShops = shops.getShops();
        return currentShops.length ? currentShops : marketplacesMock;
      }

      return {
        ...data,
        id: Date.now(),
      };
    }

    return null;
  },
  transactions: (url, {data, method} = {}) => {
    if (/\/transactions\//.test(url)) {

      return transactionsMock;
    }
    return null;
  },
  users: (url) => {
    if (/\/users\//.test(url)) {
      return userMock;
    }
    return null;
  }
};