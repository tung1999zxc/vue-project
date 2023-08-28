

import { createApp } from 'vue';
import { createPinia } from 'pinia';



import App from './App.vue'
import router from './router/index'



import axios from 'axios';
import { DatePicker } from 'ant-design-vue';
app.use(DatePicker);


import 'bootstrap/dist/css/bootstrap.css'

// const isAuthenticated = localStorage.getItem('token');
// if (isAuthenticated !== null) {
//   store.commit('SET_AUTHENTICATION', isAuthenticated === 'true');
// }

// const savedState = JSON.parse(localStorage.getItem('appState'));

// if (savedState) {
//   store.replaceState(savedState);
// }
const app = createApp(App)




app.use(createPinia())
app.use(router)


axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`; 
app.mount('#app')

