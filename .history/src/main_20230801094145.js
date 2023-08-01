

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index'
import store from './store'
const stores =new Vuex.store(store)

import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(stores)
app.mount('#app')

