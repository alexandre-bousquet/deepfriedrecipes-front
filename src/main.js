import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import router from "./router";
import store from "./store/index";

import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.config.productionTip = false;

//store.dispatch('initRecipes');

new Vue({
  render: (h) => h(App),
  store,
  router
}).$mount("#app");
