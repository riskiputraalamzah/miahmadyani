<template>
  <div class="parent-navbar pb-3">
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
    <div class="navbar">
      <v-container class="pb-0" fluid>
        <div
          class="d-flex flex-wrap justify-md-space-between justify-center flex-md-row flex-column align-center"
        >
          <div
            class="no-select logo-navbar d-flex align-center flex-sm-row flex-column"
          >
            <div
              style="width:calc(2vw + 70px);height:calc(2vw + 70px)"
              class="mr-1"
            >
              <v-img src="/logo-mi.png" lazy-src="/logo-mi.png"></v-img>
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
            class="d-flex align-center d-sm-none d-block mb-2 mt-3"
            @click="showMenu = !showMenu"
          >
            <v-icon>mdi-menu</v-icon>
            <span class="ml-1">MENU</span>
          </v-btn>

          <v-expand-transition>
            <div v-show="$vuetify.breakpoint.width > 599 || showMenu">
              <v-form class="mt-md-8 mt-2" @submit.prevent>
                <v-text-field
                  v-model="keyword"
                  color="success"
                  rounded
                  label="Search"
                  append-icon="mdi-magnify"
                  @click:append="search"
                  outlined
                  clearable
                ></v-text-field>
              </v-form></div
          ></v-expand-transition>

          <v-expand-transition>
            <div v-show="$vuetify.breakpoint.width > 599 || showMenu">
              <div class="mb-4 mb-md-0">
                <v-btn color="success" class="mx-2" large>login</v-btn>
                <v-btn color="success" class="mx-2" outlined large
                  >daftar</v-btn
                >
              </div>
            </div>
          </v-expand-transition>
        </div>
      </v-container>

      <v-expand-transition>
        <div v-show="$vuetify.breakpoint.width > 599 || showMenu">
          <v-list class="pa-0 mt-5 list-menu" width="100%">
            <v-list-item-group
              v-model="activeParentDropdown"
              class="d-sm-flex d-block"
              color="success"
            >
              <v-list-item
                v-for="(menu, i) in menus"
                :key="i"
                :to="menu.path"
                exact
                @click="closeMenu('child' in menu)"
                :class="['px-2 pb-sm-0', i != menus.length - 1 ? 'pb-3' : '']"
              >
                <v-list-item-content class="py-0">
                  <Dropdown
                    :text="menu.text"
                    :parentKey="i"
                    @activeParent="activeParentDropdown = $event"
                    @closeSectionMenu="closeMenu(false)"
                    :menus="menu.child"
                    v-if="'child' in menu"
                  />
                  <v-list-item-title
                    v-else
                    height="100%"
                    class="text-center d-flex justify-center align-center pt-3"
                    v-text="menu.text"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>
      </v-expand-transition>
    </div>
  </div>
</template>
<script>
import Dropdown from "./Dropdown.vue";
export default {
  data() {
    return {
      keyword: null,
      showMenu: false,
      activeParentDropdown: 3,
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

      menus: [
        {
          path: "/",
          text: "HOME",
        },
        {
          text: "PROFIL",
          child: [
            {
              path: "/visi-misi",
              text: "Visi Misi",
            },
            {
              path: "/child-1",
              text: "Child 1",
            },
            {
              path: "/child-2",
              text: "Child 2",
            },
          ],
        },
        {
          path: "/artikel-berita",
          text: "ARTIKEL & BERITA",
        },
        {
          path: "/galeri",
          text: "GALERI",
        },
        {
          path: "/kontak",
          text: "KONTAK",
        },
      ],
    };
  },
  components: {
    Dropdown,
  },

  methods: {
    closeMenu(boolean) {
      const width = this.$vuetify.breakpoint.width;
      if (!boolean && width < 599) {
        this.showMenu = !this.showMenu;
      }
    },
    search() {
      if (this.keyword) {
        alert(this.keyword);
        this.keyword = null;
      }
    },
  },
};
</script>
