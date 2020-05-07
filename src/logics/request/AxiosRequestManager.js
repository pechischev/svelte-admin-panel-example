import axios from 'axios';

export class AxiosRequestManager {
  static create(options) {
    const { baseURL = "", headers, strategy } = options;
    const manager = new AxiosRequestManager();
    manager.setBaseUrl(baseURL);
    manager.setHeaders(headers);
    manager.setStrategy(strategy);
    return manager;
  }

  constructor() {
    this._instance = axios.create();
    this._baseUrl = "";
    this._headers = {};
    this._strategy = null;

    this.init();
  }

  async get(url, options = {}) {
    return this._instance.get(url, { ...this.getConfig(), ...options });
  }

  async post(url, options) {
    const { data, ...rest } = options;
    return this._instance.post(url, data, { ...this.getConfig(), ...rest });
  }

  async put(url, options) {
    const { data, ...rest } = options;
    return this._instance.put(url, data, { ...this.getConfig(), ...rest });
  }

  async delete(url, options = {}) {
    return this._instance.delete(url, { ...this.getConfig(), ...options });
  }

  setHeaders(headers = {}) {
    this._headers = headers;
  }

  setBaseUrl(url) {
    this._baseUrl = url;
  }

  setStrategy(strategy) {
    this._strategy = strategy;
  }

  getConfig() {
    const authData = !!this._strategy ? this._strategy.getAuthData() : {};
    return {
      baseURL: this._baseUrl,
      headers: {
        ...this._headers,
        ...authData
      },
    };
  }

  init() {
    this._instance.interceptors.response.use(this.onFulfilled.bind(this), this.onRejected.bind(this));
  }

  onFulfilled(response) {
    console.info("[RequestManager]", response);
    return response;
  }

  onRejected(error) {
    return Promise.reject(error);
  }
}