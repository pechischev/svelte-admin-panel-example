import {writable, get} from 'svelte/store';

const {subscribe, update, set} = writable({});

export const user = {
  subscribe,
  receive: (data) => update(oldData => ({...oldData, ...data})),
  reset: () => set({}),

  isAuthorized: () => {
    const {accessToken, refreshToken} = get(user);
    return accessToken && refreshToken;
  }
};