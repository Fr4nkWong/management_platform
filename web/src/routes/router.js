import VueRouter from 'vue-router';

import Login from './login/login.vue';

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/login', component: Login,
    },
    {
      path: '/*', component: Login,
    },
  ],
});

export default router;
