import {companyMock} from './company';
import {shopsMock} from './shops';
import {transactionsMock} from './transactions';


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

      return method === 'get' ? shopsMock : {
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
};