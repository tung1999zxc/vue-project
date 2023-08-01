// store/index.js
import { createApp } from 'vue'
import { createStore } from 'vuex'
import Vuex from 'vuex';
import auth from './auth';



const store = new Vuex.Store({
  modules: {
    auth, // Thêm Vuex module vào store với tên auth
  },
});

export default store;

