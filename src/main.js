import Vue from 'vue';
import axios from "axios";
import App from './App.vue';
import Vuex from 'vuex';
import store from './store';


Vue.use(axios);
Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
