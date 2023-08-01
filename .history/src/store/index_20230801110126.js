// store/index.js

import Vuex from 'vuex';
import auth from './auth';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth, // Thêm Vuex module vào store với tên auth
  },
});

export default store;
