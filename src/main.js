import Vue from 'vue'
import Vuex from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vuex);
Vue.config.productionTip = false




new Vue({
  render: h => h(App),
}).$mount('#app')
