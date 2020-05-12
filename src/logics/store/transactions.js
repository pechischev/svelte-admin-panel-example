import {writable} from 'svelte/store';

const {subscribe, set} = writable([]);

export const transactions = {
  subscribe,

  receiveTransactions: (items) => set(items),
};
