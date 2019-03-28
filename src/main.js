import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import VeeValidate from 'vee-validate';
import '@/config/firebase';

Vue.config.productionTip = false

Vue.use(VeeValidate);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
