import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Dashboard from '@/pages/Dashboard.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
