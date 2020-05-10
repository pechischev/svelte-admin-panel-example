import {mockRequests} from '../mocks';

export class MockRequestManager {
  static create({baseURL = "", headers, strategy}) {
    const manager = new MockRequestManager();
    manager.setBaseUrl(baseURL);
    manager.setHeaders(headers);
    manager.setStrategy(strategy);
    return manager;
  }

  async get(url, options = {}) {
    console.log('[MockRequestManager]:get', url);
    const data = mockRequests[this._getKeyRequest(url)](url, {...options, method: 'get' });
    return {
      data
    };
  }

  async post(url, options) {
    console.log('[MockRequestManager]:post', url);
    const data = mockRequests[this._getKeyRequest(url)](url, {...options, method: 'post' });
    return {
      data
    };
  }

  async put(url, options) {
    console.log('[MockRequestManager]:put', url);
    const data = mockRequests[this._getKeyRequest(url)](url, {...options, method: 'put' });
    return {
      data
    };
  }

  async delete(url, options = {}) {
    console.log('[MockRequestManager]:delete', url);
    const data = mockRequests[this._getKeyRequest(url)](url, {...options, method: 'delete' });
    return {
      data
    };
  }

  setHeaders(headers = {}) {
    console.log('[MockRequestManager]:headers', JSON.stringify(headers));
  }

  setBaseUrl(url) {
    console.log('[MockRequestManager]:baseUrl', url);
  }

  setStrategy(strategy) {
    console.log('[MockRequestManager]:strategy', strategy.constructor.name);
  }

  _getKeyRequest(url) {
    const key = Object.keys(mockRequests).find((key) => url.search(key) > -1);
    if (!key) {
      throw new Error(`Need mock request for ${url}`);
    }
    return key;
  }
}