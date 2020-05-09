import {get, writable} from 'svelte/store';

const {subscribe, update} = writable({});

export const company = {
  subscribe,

  receive: (data) => update(oldData => ({...oldData, ...data})),

  getData: () => get(company),
};