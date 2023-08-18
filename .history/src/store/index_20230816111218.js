// store/index.js

import { createPinia } from 'pinia';
import { useAuthStore } from './auth';

export const store = pinia;

const store = new Vuex.Store({
  modules: {
    auth, // Thêm Vuex module vào store với tên auth
  },
});

store.subscribe((mutation, state) => {
  localStorage.setItem('appState', JSON.stringify(state));
});

export default store;

