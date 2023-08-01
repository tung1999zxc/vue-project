

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
     // Thêm Vuex module vào store với tên auth
  },
});

import App from './App.vue'
import router from './router/index'
// import store from './store'


import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
// app.use(store)
app.mount('#app')

