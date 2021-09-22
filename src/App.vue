<template>
  <v-app>
    <div class="top__information">
      <v-container>
        <div class="left mx-md-0 mx-auto ">
          <div class="item my-1">
            <v-icon>mdi-map-marker-outline</v-icon>
            <span
              >Desa Pagerngumbuk RT 06 RW 02 Wonoayu, Sidoarjo, Jawa Timur,
              61261</span
            >
          </div>

          <div class="item my-1">
            <v-icon>mdi-phone</v-icon>
            <span>085648092229</span>
          </div>
        </div>
        <div class="right mx-md-0 mx-auto  my-1">
          <v-tooltip bottom v-for="(sosmed, i) in sosmeds" :key="i">
            <template v-slot:activator="{ on, attrs }">
              <v-btn dark icon v-bind="attrs" v-on="on">
                <v-icon>{{ sosmed.icon }}</v-icon>
              </v-btn>
            </template>
            <span>{{ sosmed.name }}</span>
          </v-tooltip>
        </div>
      </v-container>
    </div>

    <div class="navbar pb-3">
      <div class="parent-color">
        <v-container class="pb-0 ">
          <div
            class="d-flex flex-wrap justify-md-space-between justify-center flex-md-row flex-column align-center"
          >
            <div
              class="logo-navbar d-flex align-center flex-sm-row flex-column"
            >
              <div
                style="width:calc(2vw + 70px);height:calc(2vw + 70px)"
                class="mr-1"
              >
                <v-img src="/logo-mi.png" contain></v-img>
              </div>
              <div
                class="text-logo d-flex flex-column text-center justify-center"
              >
                <span class="text-sm-h5 text-headline  font-weight-bold"
                  >ISLAMIC SUPERIOR SCHOOL</span
                >
                <span class="web-name text-sm-h3 font-weight-bold  text-h4"
                  >MI. AHMAD YANI</span
                >
                <span class="text-sm-h5 text-headline  font-weight-bold"
                  >TERAKREDITASI <q>A-UNGGUL</q></span
                >
              </div>
            </div>
            <v-btn
              text
              elevation="0"
              class="d-flex align-center d-sm-none d-block my-2"
              @click="showMenu = !showMenu"
            >
              <v-icon>mdi-menu</v-icon>
              <span class="ml-1">MENU</span>
            </v-btn>

            <v-list :class="['parent-menu mb-2', { show: showMenu }]" flat>
              <v-list-item-group class="d-flex ">
                <v-list-item class="p-0">
                  <v-list-item-content>
                    <v-btn large color="success" elevation="2">
                      Login
                    </v-btn>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="p-0">
                  <v-list-item-content>
                    <v-btn large color="success" elevation="0" outlined>
                      Daftar
                    </v-btn>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <v-list
              :class="[
                'parent-menu list-menu pa-0 mt-sm-4 mt-0',
                { show: showMenu },
              ]"
            >
              <v-container class="pa-0 ">
                <v-list-item-group
                  class="d-flex "
                  mandatory
                  v-model="selectedItem"
                >
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    @click="activeComponent = item.views"
                    :class="[
                      'px-0 font-weight-medium text-sm-center text-left',
                      i != items.length - 1 ? 'pb-sm-0 pb-3' : '',
                    ]"
                  >
                    <v-list-item-content class="py-0">
                      <dropdown
                        :text="item.text"
                        :menus="item.child"
                        @emitActiveComponent="activeComponent = $event"
                        v-if="item.hasOwnProperty('child')"
                      >
                      </dropdown>

                      <v-list-item-title
                        v-text="item.text"
                        v-else
                      ></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-container>
            </v-list>
          </div>
        </v-container>
      </div>
    </div>

    <v-main>
      <v-fade-transition>
        <component :is="activeComponent"></component>
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script>
import Dropdown from "@/components/Dropdown.vue";

import Home from "@/views/Home.vue";
export default {
  name: "App",

  data: () => ({
    activeComponent: "Home",
    showMenu: false,
    selectedItem: 0,
    items: [
      { text: "HOME", views: "Home" },
      {
        text: "PROFIL",
        views: "Profil",
        child: [
          { text: "VISI & MISI", views: "VisiDanMisi" },
          { text: "OTHER", views: "Other" },
          { text: "OTHER", views: "Other" },
        ],
      },
      {
        text: "ARTIKEL & BERITA",
        views: "ArtikelDanBerita",
      },
      { text: "GALERI", views: "Galeri" },
      { text: "KONTAK", views: "Kontak" },
    ],

    sosmeds: [
      {
        icon: "mdi-facebook",
        name: "Miahmadayani",
        color: "primary",
      },
      {
        icon: "mdi-instagram",
        color: "red",
        name: "miahmadayani",
      },
      {
        icon: "mdi-email",
        color: "warning",
        name: "Miahmadyani_pagerngumbuk@yahoo.com",
      },
    ],
  }),
  components: {
    Home,
    Dropdown,
  },
};
</script>
