<template>
  <v-app>
    <Navbar />

    <v-main>
      <v-scale-transition>
        <router-view></router-view>
      </v-scale-transition>
    </v-main>
    <div class="my-footer">
      <v-container class="py-0">
        <div class="data-footer py-10">
          <v-row justify="center" align="center">
            <v-col cols="12" md="4" class="font-weight-bold">
              <div class="text-center my-2">ISLAMIC SUPERIOR SCHOOL</div>
              <div
                class="d-flex my-2 align-center justify-center flex-sm-column flex-row"
              >
                <div
                  style="width:calc(2vw + 70px);height:calc(2vw + 70px)"
                  class="mr-1"
                >
                  <v-img src="/logo-mi.png" lazy-src="/logo-mi.png"></v-img>
                </div>
                <span class="font-logo text-md-h3 no-select text-sm-h4 text-h5"
                  >MI.AHMAD YANI</span
                >
              </div>
              <div class="text-center font-italic my-2">
                PAGERNGUMBUK - WONOAYU - SIDOARJO
              </div>
              <div class="text-center my-2">TERAKREDITASI <q>A-UNGGUL</q></div>
            </v-col>
            <v-col cols="12" md="4" sm="6">
              <div class="text-md-h6 pl-3 text-heading font-poppins">
                Tentang Kami
              </div>
              <v-list color="transparent " flat dark>
                <v-list-item-group>
                  <v-list-item>
                    <v-subheader class="pl-0">Visi dan Misi</v-subheader>
                  </v-list-item>
                  <v-list-item>
                    <v-subheader class="pl-0">Informasi/Pengumuman</v-subheader>
                  </v-list-item>
                  <v-list-item>
                    <v-subheader class="pl-0">Artikel</v-subheader>
                  </v-list-item>
                  <v-list-item>
                    <v-subheader class="pl-0">Berita</v-subheader>
                  </v-list-item>
                  <v-list-item>
                    <v-subheader class="pl-0">Kontak</v-subheader>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-col>
            <v-col cols="12" md="4" sm="6" align-self="start">
              <div class="text-md-h6 pl-3 text-heading font-poppins">
                Tentang Kami
              </div>
              <v-list flat color="transparent" dark>
                <v-list-item-group>
                  <v-list-item>
                    <v-subheader class="pl-0">Visi dan Misi</v-subheader>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-col>
          </v-row>
        </div>
        <div class="copyright text-center py-2">
          &copy; 2021 &mdash; MI Ahmad Yani &mdash; All Rights Reserved
        </div>
      </v-container>
    </div>
  </v-app>
</template>

<script>
// import Dropdown from "@/components/Dropdown.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",

  data: () => ({
    showMenu: false,
    selectedItem: 0,
  }),
  components: {
    // Dropdown,
    Navbar,
  },
};
</script>
