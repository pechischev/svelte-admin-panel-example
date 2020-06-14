import {requestManager} from '../logics/request';
import {company as companyStore, shops as shopsStore} from '../logics/store';

class CompanyServiceImpl {
  async fetchCompany() {
    const response = await requestManager.get('/companies/');
    companyStore.receive(response.data[0]);
  }

  async updateCompany(company) {
    const {id, ...rest} = company;
    const response = await requestManager.put(`/companies/${companyStore.getData().id}/`, {data: rest});
    companyStore.receive(response.data);
  }

  async changeRefundPercent(refund_percent) {
    await requestManager.post(`/companies/${companyStore.getData().id}/change_refund_percent/`, {data: {refund_percent}});
    companyStore.receive({refund_percent});
  }

  async refuelAccount(amount) {
    await requestManager.post(`/companies/${companyStore.getData().id}/add_founds/`, {data: {amount}});

    const currentPaymentAccount = companyStore.getData().payment_account
    companyStore.receive({payment_account: { ...currentPaymentAccount, amount }});
  }

  async fetchMarketplaces() {
    const response = await requestManager.get('/marketplaces/', {params: {companyId: companyStore.getData().id}});
    shopsStore.receiveShops(response.data);
  }

  async createMarketplace(marketplace) {
    const response = await requestManager.post('/marketplaces/', {data: marketplace});
    shopsStore.addShop(response.data);
  }

  async updateMarketplace(marketplace) {
    const {id, ...rest} = marketplace;
    await requestManager.put(`/marketplaces/${id}/`, {data: rest});
    shopsStore.editShop(id, marketplace);
  }

  async removeMarketplace(marketplaceId) {
    await requestManager.delete(`/marketplaces/${marketplaceId}/`);
    shopsStore.removeShop(marketplaceId);
  }
}

export const CompanyService = new CompanyServiceImpl();