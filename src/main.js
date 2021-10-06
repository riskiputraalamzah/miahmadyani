import Vue from "vue";
import vuetify from "./plugins/vuetify";

import router from "./router";
import store from "./store";
import mixin from "./plugins/mixin";
import "./plugins/panzoom";

import "@/assets/css/main.css";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  vuetify,

  mixin,
  store,
  router,

  render: (h) => h(App),
}).$mount("#app");
