import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'


const routes = [
  // {
  //   path: "/",
  //   component: Home,
    
  // },
  {
    path: "/login",
    component: () => import('../components/Login.vue'),
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router; 