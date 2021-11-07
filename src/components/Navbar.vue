<template>
  <div class="parent-navbar pb-3">
    <div class="top__information">
      <v-container>
        <div class="left mx-md-0 mx-auto ">
          <div
            class="item my-1 cursor-pointer"
            @click="href('https://goo.gl/maps/h6jUjiCuBXgrX2Mv7')"
          >
            <v-icon>mdi-map-marker-outline</v-icon>
            <span
              >Desa Pagerngumbuk RT 06 RW 02 Wonoayu, Sidoarjo, Jawa Timur,
              61261</span
            >
          </div>

          <div
            class="item my-1 cursor-pointer"
            @click="href('tel:085648092229')"
          >
            <v-icon>mdi-phone</v-icon>
            <span>085648092229</span>
          </div>
        </div>
        <div class="right   my-1">
          <v-tooltip bottom v-for="(sosmed, i) in sosmeds" :key="i">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                @click="href(sosmed.href)"
                dark
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>{{ sosmed.icon }}</v-icon>
              </v-btn>
            </template>
            <span>{{ sosmed.name }}</span>
          </v-tooltip>
        </div>
      </v-container>
    </div>
    <div class="navbar">
      <v-container class="pb-0">
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
            <div class="mx-auto" v-show="$vuetify.breakpoint.width > 599">
              <v-form class="mt-md-8 mt-sm-6 mt-2" @submit.prevent>
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
            <div
              class="mx-auto mt-sm-3 mt-0"
              v-show="$vuetify.breakpoint.width > 599"
            >
              <div class="mb-4 mb-md-0 ">
                <v-btn
                  color="success"
                  @click="showModalLogin"
                  class="mx-2"
                  large
                  >login</v-btn
                >
                <v-btn color="success" class="mx-2" outlined large
                  >daftar</v-btn
                >
              </div>
            </div>
          </v-expand-transition>
        </div>
      </v-container>

      <!-- menu for  device large screen -->
      <v-expand-transition>
        <div v-show="$vuetify.breakpoint.width > 599">
          <v-list class="pa-0 mt-sm-5 mt-3 list-menu">
            <v-list-item-group class="d-sm-flex d-block" color="transparent">
              <v-slide-group
                style="width:100%"
                class="pa-0 ma-0"
                center-active
                mobile-breakpoint="0"
              >
                <v-list-item disabled class="d-sm-block d-none"></v-list-item>
                <v-slide-item v-for="(menu, i) in menus" :key="i">
                  <v-list-item
                    :to="menu.path"
                    exact
                    @click="
                      $store.dispatch(
                        'setActiveMenu',
                        'child' in menu ? i : null
                      )
                    "
                    :class="[
                      'child' in menu
                        ? 'parent-menu-dropdown px-sm-3 px-0'
                        : '',
                      activeMenu === i ||
                      activeParentRoute(
                        'path' in menu ? menu.path.split('/')[1] : 'FALSE'
                      )
                        ? 'v-item--active v-list-item--active'
                        : '',
                    ]"
                  >
                    <v-list-item-content class="py-0">
                      <Dropdown
                        :text="menu.text"
                        :parentKey="i"
                        :countMenu="menus.length - 1"
                        :menus="menu.child"
                        v-if="'child' in menu"
                      />
                      <v-list-item-title
                        v-else
                        height="100%"
                        :class="[
                          'text-center d-flex justify-sm-center justify-start align-center pt-3 pb-sm-0',
                          i != menus.length - 1 ? 'pb-3' : 'pb-0',
                        ]"
                        v-text="menu.text"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-slide-item>
                <v-list-item disabled class="d-sm-block d-none"></v-list-item>
              </v-slide-group>
            </v-list-item-group>
          </v-list>
        </div>
      </v-expand-transition>

      <!-- menu for device small screen on breakpoint < 600 -->

      <v-navigation-drawer
        v-show="(showMenu = $vuetify.breakpoint.width > 599 ? false : showMenu)"
        style="width:80vw;"
        v-model="showMenu"
        app
        temporary
      >
        <v-form class=" pa-3  pb-0" @submit.prevent>
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
        </v-form>
        <div class="mb-8 d-flex justify-center">
          <v-btn color="success" @click="showModalLogin" class="mx-2" large
            >login</v-btn
          >
          <v-btn color="success" class="mx-2" outlined large>daftar</v-btn>
        </div>
        <v-list class="pa-0 mt-sm-5 mt-3 list-menu" width="100%">
          <v-list-item disabled class="d-sm-block d-none"></v-list-item>

          <v-list-item
            v-for="(menu, i) in menus"
            :key="i"
            :to="menu.path"
            exact
            @click="
              'child' in menu ? '' : $store.dispatch('setActiveMenu', null)
            "
            :class="[
              'child' in menu ? 'parent-menu-dropdown px-sm-3 px-0' : '',
              activeMenu === i ||
              activeParentRoute(
                'path' in menu ? menu.path.split('/')[1] : 'FALSE'
              )
                ? 'v-item--active v-list-item--active'
                : '',
            ]"
          >
            <v-list-item-content class="py-0">
              <Dropdown
                :text="menu.text"
                :parentKey="i"
                :countMenu="menus.length - 1"
                :menus="menu.child"
                v-if="'child' in menu"
              />
              <v-list-item-title
                v-else
                height="100%"
                :class="[
                  'text-center d-flex justify-sm-center justify-start align-center pt-3 pb-sm-0 pb-3',
                  ,
                ]"
                v-text="menu.text"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item disabled class="d-sm-block d-none"></v-list-item>
        </v-list>
      </v-navigation-drawer>
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
      // activeMenu: null,
      sosmeds: [
        {
          icon: "mdi-facebook",
          name: "Miahmadayani",
          color: "primary",
          href: "https://www.facebook.com/profile.php?id=100008332621737",
        },
        {
          icon: "mdi-whatsapp",
          name: "Whatsapp",
          color: "primary",
          href: "https://api.whatsapp.com/send?phone=6285648092229",
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
              path: "/struktur-organisasi",
              text: "STRUKTUR ORGANISASI",
            },
            {
              path: "/visi-misi",
              text: "VISI MISI",
            },
          ],
        },

        {
          text: "INFORMASI",
          child: [
            {
              path: "/liputan-event",
              text: "LIPUTAN EVENT",
            },
            {
              path: "/pengumuman",
              text: "PENGUMUMAN",
            },
            {
              path: "/prestasi",
              text: "PRESTASI",
            },
            {
              path: "/alumni",
              text: "ALUMNI",
            },
          ],
        },
        {
          path: "/artikel",
          text: "ARTIKEL",
        },

        {
          text: "BERKAS",
          child: [
            {
              path: "/guru",
              text: "GURU",
            },
            {
              path: "/siswa",
              text: "SISWA",
            },
          ],
        },

        {
          text: "PROGRAM KEUNGGULAN",
          child: [
            {
              path: "/tahfidzul-quran",
              text: "TAHFIDZUL QUR'AN",
            },
            {
              path: "/tahsinul-quran",
              text: "TAHSINUL QUR'AN",
            },
            {
              path: "/pembiasaan-sholat-dhuha",
              text: "PEMBIASAAN SHOLAT DHUHA",
            },
            {
              path: "/istighosah",
              text: "ISTIGHOSAH",
            },
            {
              path: "/pembacaan-asmaul-husnah",
              text: "PEMBACAAN ASMAUL HUSNAH",
            },
            {
              path: "/juz-amma",
              text: "PEMBACAAN JUZ ‘AMMA DAN MAJMU’ SYARIF",
            },
            {
              path: "/sholat-jamaah",
              text: "SHOLAT JAMA'AH",
            },
            {
              path: "/ekstra-qiroah",
              text: "EKSTRA QIRO'AH",
            },

            {
              path: "/sholawat-al-banjari",
              text: "SHOLAWAT AL BANJARI",
            },
            {
              path: "/bela-diri",
              text: "BELA DIRI",
            },
            {
              path: "/pramuka",
              text: "PRAMUKA",
            },
            {
              path: "/drum-band",
              text: "DRUM BAND",
            },
            {
              path: "/out-bond",
              text: "OUT BOND",
            },
          ],
        },
        {
          path: "/galeri",
          text: "GALERI",
        },
        {
          path: "/angket-sekolah",
          text: "ANGKET SEKOLAH",
        },

        // {
        //   path: "/galeri",
        //   text: "GALERI",
        // },

        // {
        //   path: "/kontak",
        //   text: "KONTAK",
        // },
      ],
    };
  },
  components: {
    Dropdown,
  },

  computed: {
    activeMenu: function() {
      return this.$store.getters.activeMenu;
    },
  },

  methods: {
    href(value) {
      return value ? window.open(value, "_blank") : "";
    },
    showModalLogin() {
      this.$emit("showModalLogin", true);
    },
    activeParentRoute(value) {
      // if (this.$route.path === "/") {
      //   this.$store.dispatch("setActiveMenu", null);
      // }
      return this.$route.path.split("/")[1] === value;
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
