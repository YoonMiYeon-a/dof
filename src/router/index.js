import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: 'home',
    component: Home
  },
  {
    path: "/login",
    name: 'login',
    component: () => import('../components/Login.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router; 