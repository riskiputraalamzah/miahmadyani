<template>
  <div class="my-footer">
    <v-container class="py-0 pl-0">
      <div class="data-footer py-10">
        <v-row
          justify="center"
          class="flex-md-row-reverse flex-row"
          align="center"
        >
          <v-col cols="12" ord md="4" class="font-weight-bold">
            <div class="text-center my-2">ISLAMIC SUPERIOR SCHOOL</div>
            <div
              class="d-flex my-2 align-center text-center justify-center flex-sm-column flex-row"
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

            <div class="text-center my-2">TERAKREDITASI <q>A-UNGGUL</q></div>
          </v-col>
          <v-col align-self="start" cols="12" order-md="last" md="4" sm="6">
            <div class="text-md-h6 pl-4 text-heading font-poppins">
              Tentang Kami
            </div>
            <v-list color="transparent " flat dark>
              <v-list-item-group>
                <v-list-item>
                  <v-subheader class="pl-0">Visi dan Misi</v-subheader>
                </v-list-item>
                <v-list-item>
                  <v-subheader class="pl-0">Informasi Sekolah</v-subheader>
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
          <v-col cols="12" md="4" sm="6">
            <div class="text-md-h6 pl-4 text-heading font-poppins">
              Artikel & Berita Terpopuler
            </div>
            <v-list color="transparent " flat dark>
              <v-list-item-group>
                <v-list-item
                  class="d-flex align-center py-2"
                  v-for="(data, i) in dataTerpopuler"
                  :key="i"
                >
                  <v-avatar class="mr-2" rounded="sm" size="60">
                    <v-img :lazy-src="data.image" :src="data.image"></v-img>
                  </v-avatar>
                  <v-subheader
                    class="pl-0 flex-column align-start overflow-hidden"
                  >
                    <div class="text-truncate d-block mb-1" style="width:100%">
                      {{ data.title }}
                    </div>
                    <div>
                      <v-icon small>mdi-eye</v-icon>
                      {{ compactNumber(data.views) }}
                    </div>
                  </v-subheader>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
        </v-row>
      </div>
      <div class="copyright text-center py-3 font-weight-medium">
        &copy; {{ copyRight() }} &mdash; MI Ahmad Yani &mdash; All Rights
        Reserved
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  computed: {
    dataTerpopuler: function() {
      let { dataArtikel, dataBerita } = this.$store.getters;
      dataArtikel = dataArtikel.filter((e) => e.views >= 200);
      dataBerita = dataBerita.filter((e) => e.views >= 200);

      return [...dataBerita, ...dataArtikel].sort((a, b) => b.views - a.views);
    },
  },

  methods: {
    copyRight() {
      const created = 2021;
      const now = new Date().getFullYear();
      return now > created ? created + " - " + now : now;
    },
  },
};
</script>
