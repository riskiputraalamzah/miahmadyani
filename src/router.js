import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

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
      component: () => import("./views/Galeri.vue"),
    },
    {
      path: "/visi-misi",
      name: "visiMisi",
      component: VisiMisi,
    },
    {
      path: "/kontak",
      name: "kontak",
      component: () => import("./views/Kontak.vue"),
    },
    {
      path: "/artikel",
      name: "artikel",
      component: () => import("./views/artikel/Main.vue"),
    },
    // {
    //   path: "/artikel/:slug",
    //   name: "showArtikel",
    //   component: () => import("./views/artikel/Show.vue"),
    // },
    {
      path: "/berita",
      name: "berita",

      component: () => import("./views/berita/Main.vue"),
    },
    // {
    //   path: "/berita/:item",
    //   name: "showBerita",
    //   props: (route) => ({
    //     ...route.params,
    //   }),
    //   component: () => import("./views/berita/Show.vue"),
    // },
  ],
});
