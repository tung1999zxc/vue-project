

import { createApp } from 'vue';
import { createPinia } from 'pinia';



import App from './App.vue'
import router from './router/index'
import store from './store/index'
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(store)
// axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
app.mount('#app')

