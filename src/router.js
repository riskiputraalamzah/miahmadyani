import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

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
      meta: { breadCrumb: "Galeri" },
      component: () => import("./views/galeri/Main.vue"),
    },
    {
      path: "/galeri/:date/:author",
      name: "showGallery",

      component: () => import("./views/galeri/Show.vue"),
    },

    {
      path: "/visi-misi",
      name: "visiMisi",
      meta: { breadCrumb: "Visi Misi" },
      component: () => import("./views/profil/VisiMisi.vue"),
    },
    {
      path: "/kontak",
      name: "kontak",
      component: () => import("./views/Kontak.vue"),
    },
    {
      path: "/artikel",
      meta: { breadCrumb: "Artikel" },
      component: () => import("./views/artikel/Parent.vue"),

      children: [
        {
          path: "",
          name: "artikel",
          component: () => import("./views/artikel/Main.vue"),
        },
        {
          path: ":slug",
          name: "showArtikel",
          props: true,
          meta: {
            breadCrumb: this,
          },
          component: () => import("./views/artikel/Show.vue"),
        },
      ],
    },

    {
      path: "/berita",
      name: "berita",
      component: () => import("./views/berita/Main.vue"),
    },
    {
      path: "/struktur-organisasi",
      name: "strukturOrganisasi",
      meta: { breadCrumb: "Struktur Organisasi" },
      component: () => import("./views/profil/StrukturOrganisasi.vue"),
    },
    {
      path: "/alumni",
      name: "alumni",
      meta: { breadCrumb: "Alumni" },
      component: () => import("./views/informasi/Alumni.vue"),
    },
    {
      path: "/liputan-event",
      name: "liputanEvent",
      meta: { breadCrumb: "Liputan Event" },
      component: () => import("./views/informasi/LiputanEvent.vue"),
    },
  ],
});
