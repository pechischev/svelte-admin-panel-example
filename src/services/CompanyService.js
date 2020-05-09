import {requestManager} from '../logics/request';
import {company as companyStore, shops as shopsStore} from '../logics/store';

class CompanyServiceImpl {
  fetchCompany() {
    requestManager
      .get('/company')
      .then((response) => {
        companyStore.receive(response.data);
      })
  }

  updateCompany(company) {
    const {id, ...rest} = company;
    requestManager
      .put(`/company/${companyStore.getData().id}`, {data: rest})
      .then((response) => {
        companyStore.receive(response.data);
      })
  }

  fetchShops() {
    requestManager
      .get('/shops', {params: {companyId: companyStore.getData().id}})
      .then((response) => {
        shopsStore.receiveShops(response.data);
      })
  }

  createShop(shop) {
    requestManager
      .post('/shops', {data: shop, params: {companyId: companyStore.getData().id}})
      .then((response) => {
        shopsStore.addShop(response.data);
      })
  }

  updateShop(shop) {
    const {id, ...rest} = shop;
    requestManager
      .put(`/shops/${id}`, {data: rest, params: {companyId: companyStore.getData().id}})
      .then(() => {
        shopsStore.editShop(id, shop);
      })
  }

  removeShop(shopId) {
    requestManager
      .delete(`/shops/${shopId}`, {params: {companyId: companyStore.getData().id}})
      .then(() => {
        shopsStore.removeShop(shopId);
      })
  }
}

export const CompanyService = new CompanyServiceImpl();