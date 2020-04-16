import Vue from 'vue';
import less from 'less';
import '@babel/polyfill';

import App from './App';

Vue.use(less);

const vm = new Vue({
  render: h => h(App),
});

vm.$mount('#app');
