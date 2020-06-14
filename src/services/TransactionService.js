import {requestManager} from '../logics/request';
import {transactions as transactionsStore} from '../logics/store';

class TransactionServiceImpl {
  async fetchTransactions(filters = {}) {
    const response = await requestManager.get('/transactions/');
    transactionsStore.receiveTransactions(response.data);
  }
}

export const TransactionService = new TransactionServiceImpl();