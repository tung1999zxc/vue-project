import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/Login.vue'
import Regis from '../components/Regis.vue'
import crud from '../components/crud.vue'
import upload from '../components/upload.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes : [
    {path: '/',component: HomeView,},
    {path: '/login',component:Login,},
    {path: '/Regis',component: Regis,},
    {path: '/crud',component: crud,},
    {path: '/upload',component: upload,},
    
  
  ]
})

export default router
