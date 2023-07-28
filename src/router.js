import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import LoginView from './views/LoginView.vue';
import RegisterView from './views/RegisterView.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
];

const router = new VueRouter({
  routes,
});

export default router;
