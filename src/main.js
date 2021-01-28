import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Vuex from 'vuex';
import store from './store';
import vuetify from './plugins/vuetify';
import routes from './routes';
import AOS from 'aos';
import "aos/dist/aos.css";
import i18n from './i18n'


Vue.use(VueRouter);
Vue.use(Vuex);
Vue.config.productionTip = false;



const router = new VueRouter({
  routes,
  mode :'history'
});

new Vue({
  created(){
    AOS.init({
      offset: 400, // offset (in px) from the original trigger point
      duration: 1000, // values from 0 to 3000, with step 50ms
    });
  },

  store,
  vuetify,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
