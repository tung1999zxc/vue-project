// store/index.js
import { createApp } from 'vue'
import { createStore } from 'vuex'
const app = createApp({})
import Vuex from 'vuex';
import auth from './auth';

app.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth, // Thêm Vuex module vào store với tên auth
  },
});

export default store;

