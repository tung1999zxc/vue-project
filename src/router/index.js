import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/LoginUser.vue'
import Regis from '../components/RegisUser.vue'
import crud from '../components/UserCrud.vue'
import crud2 from '../components/UserCrud2.vue'
import upload from '../components/UploadTest.vue'
import todoList from '../components/todoList.vue'
import designAnt from '../components/designAnt.vue'
import designAnt2 from '../components/designAnt2.vue'
import dragdrop from '../components/dragdrop.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes : [
    {path: '/',component: HomeView,},
    {path: '/login',component:Login,},
    {path: '/Regis',component: Regis,},
    {path: '/crud',component: crud,},
    {path: '/crud2',component: crud2,},
    {path: '/upload',component: upload,},
    {path: '/todoList',component: todoList,},
    {path: '/antDesign',component: designAnt,},
    {path: '/antDesign2',component: designAnt2,},
    {path: '/dragdrop',component: dragdrop,},
    
  
  ]
})

export default router
