import {requestManager} from '../logics/request';
import {company as companyStore, shops as shopsStore} from '../logics/store';

class CompanyServiceImpl {
  async fetchCompany() {
    const response = await requestManager.get('/company/');
    companyStore.receive(response.data);
  }

  async updateCompany(company) {
    const {id, ...rest} = company;
    const response = await requestManager.put(`/company/${companyStore.getData().id}`, {data: rest});
    companyStore.receive(response.data);
  }

  async fetchShops() {
    const response = await requestManager.get('/shops/', {params: {companyId: companyStore.getData().id}});
    shopsStore.receiveShops(response.data);
  }

  async createShop(shop) {
    const response = await requestManager.post('/shops/', {data: shop, params: {companyId: companyStore.getData().id}});
    shopsStore.addShop(response.data);
  }

  async updateShop(shop) {
    const {id, ...rest} = shop;
    await requestManager.put(`/shops/${id}`, {data: rest, params: {companyId: companyStore.getData().id}});
    shopsStore.editShop(id, shop);
  }

  async removeShop(shopId) {
    await requestManager.delete(`/shops/${shopId}`, {params: {companyId: companyStore.getData().id}});
    shopsStore.removeShop(shopId);
  }
}

export const CompanyService = new CompanyServiceImpl();