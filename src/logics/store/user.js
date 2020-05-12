import { writable, get, derived } from 'svelte/store';

const {subscribe, update, set} = writable({});

export const user = {
  subscribe,
  receive: (data) => update(oldData => ({...oldData, ...data})),
  reset: () => set({}),
};

export const isAuthorized = derived(user, ({accessToken, refreshToken}) => true/*accessToken && refreshToken*/);