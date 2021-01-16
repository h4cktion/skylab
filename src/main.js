import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Vuex from 'vuex';
import store from './store';
import vuetify from './plugins/vuetify';
import routes from './routes';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.config.productionTip = false;



const router = new VueRouter({
  routes
});

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
