import {writable, derived} from 'svelte/store';

const {subscribe, update, set} = writable({}, (set) => {
  set({authorized: !!localStorage.getItem('jwt-tokens')})
});

export const user = {
  subscribe,
  receive: (data) => update(oldData => ({...oldData, ...data})),
  reset: () => set({}),
};

export const isAuthorized = derived(user, ({authorized}) => authorized);