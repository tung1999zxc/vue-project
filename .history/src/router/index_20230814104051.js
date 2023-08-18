import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/Login.vue'
import Regis from '../components/Regis.vue'
import crud from '../components/UserCrud.vue'
import crud2 from '../components/crud2.vue'
import upload from '../components/upload.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes : [
    {path: '/',component: HomeView,},
    {path: '/login',component:Login,},
    {path: '/Regis',component: Regis,},
    {path: '/crud',component: crud,},
    {path: '/crud2',component: crud2,},
    {path: '/upload',component: upload,},
    
  
  ]
})

export default router
