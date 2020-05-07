import {writable} from "svelte/store";

const { subscribe, update, set } = writable({});

export const user = {
  subscribe,
  receive: (data) => update(oldData => ({...oldData, ...data})),
  reset: () => set({})
};