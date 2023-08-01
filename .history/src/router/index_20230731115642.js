import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '../components/Login.vue'
import regis from '../components/Regis.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes : [
    {path: '/',component: HomeView,},
    {path: '/Login',component:Login,},
    {path: '/regis',component: Regis,},
   
  
  ]
})

export default router
