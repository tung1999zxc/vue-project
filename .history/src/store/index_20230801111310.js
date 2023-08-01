// store/index.js

import { createStore } from 'vuex'

import auth from './auth';



const store = new Vuex.Store({
  modules: {
    auth, // Thêm Vuex module vào store với tên auth
  },
});

export default store;

