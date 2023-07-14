import { createWebHistory, createRouter } from "vue-router";
import Login from './components/Login'
import Guide from './components/Guide'


const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/guide",
    component: Guide,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 