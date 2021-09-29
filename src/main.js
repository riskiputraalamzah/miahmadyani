import Vue from "vue";
import vuetify from "./plugins/vuetify";

import router from "./router";
import "@/assets/css/main.css";
import App from "./App.vue";
Vue.config.productionTip = true;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
