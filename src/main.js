import Vue from 'vue';
import axios from "axios";
import App from './App.vue';
import Vuex from 'vuex';
import store from './store';
import vuetify from './plugins/vuetify';


Vue.use(axios);
Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
