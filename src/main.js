import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.config.productionTip = false


import App from './App.vue'

new Vue({
  render: h => h(App),
}).$mount('#app')
