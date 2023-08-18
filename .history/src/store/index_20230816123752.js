import { createPinia } from 'pinia';

const pinia = createPinia();

// Tự động import và sử dụng các store
const storeModules = import.meta.globEager('./**/*.js');
const stores = {};

for (const path in storeModules) {
  const moduleName = path.match(/\.\/(.*?)\.js$/)[1];
  stores[moduleName] = storeModules[path].useStore(pinia);
}

export { pinia, stores };

store.subscribe((mutation, state) => {
  localStorage.setItem('appState', JSON.stringify(state));
});

export default store;

