import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Galeri from "./views/Galeri.vue";
import VisiMisi from "./views/VisiMisi.vue";

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/galeri",
      name: "galeri",
      component: Galeri,
    },
    {
      path: "/visi-misi",
      name: "visiMisi",
      component: VisiMisi,
    },
  ],
});
