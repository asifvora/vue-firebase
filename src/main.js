import Vue from 'vue';
import VeeValidate from 'vee-validate';
import Snotify, { SnotifyPosition } from 'vue-snotify';

import App from '@/App.vue';
import router from '@/router/index';
import store from '@/store';
import '@/config/firebase';

import "../node_modules/vue-snotify/styles/material.css";

const options = {
  toast: {
    position: SnotifyPosition.rightTop
  }
}

Vue.config.productionTip = false

Vue.use(VeeValidate);

Vue.use(Snotify, options);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
