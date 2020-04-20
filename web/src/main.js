import Vue from 'vue';
import less from 'less';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
// import '@/common/style/normalize.css';

import router from './routes/router';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(less);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
