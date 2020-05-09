import {requestManager} from '../logics/request';

class CompanyServiceImpl {
  fetchCompany() {
    requestManager
      .get('')
      .then(() => {

      })
  }

  updateCompany(companyData) {
    requestManager
      .put('', {data: companyData})
      .then(() => {

      })
  }

  fetchShops() {
    requestManager
      .get('')
      .then(() => {

      })
  }

  createShop(shopData) {
    requestManager
      .post('', {data: shopData})
      .then(() => {

      })
  }

  updateShop(shopData) {
    const {id, ...rest} = shopData;
    requestManager
      .put('', {data: rest, params: {shopId: id}})
      .then(() => {

      })
  }

  removeShop(shopId) {
    requestManager
      .put('', {params: {shopId}})
      .then(() => {

      })
  }
}

export const CompanyService = new CompanyServiceImpl();