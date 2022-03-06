/* eslint-disable @typescript-eslint/no-explicit-any */
import { writable } from 'svelte/store';

function createUserStore() {
	const { subscribe, set } = writable({
		user: null
	});

	return {
		subscribe,
		setUser: (user: any) => set({ user: user }),
		clearUser: () => set({ user: null })
	};
}

export const fireUserStore = createUserStore();
