import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage.vue';
import FormPage from '../views/FormPage';
import FinalPage from '../views/FinalPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/form',
    name: 'form',
    component: FormPage,
  },
  {
    path: '/final',
    name: 'final',
    component: FinalPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
