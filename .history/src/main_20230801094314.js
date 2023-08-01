

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth, // Thêm Vuex module vào store với tên auth
  },
});

import App from './App.vue'
import router from './router/index'
import store from './store'
const stores =new Vuex.store(store)

import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
// app.use(store)
app.mount('#app')

