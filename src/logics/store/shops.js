import {writable, get} from 'svelte/store';

const {subscribe, update, set} = writable([]);

export const shops = {
  subscribe,
  addShop: (shop) => update((items) => [...items, shop]),

  editShop: (id, shop) => update((items) =>
    items.map((item) => (item.id === id ? {...item, ...shop} : item))
  ),

  removeShop: (id) => update((items) => items.filter((item) => item.id !== id)),

  receiveShops: (items) => set(items),

  getShop: (id) => {
    const items = get(shops);
    return items.find((shop) => shop.id === id);
  }
};

