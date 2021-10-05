<template>
  <div>
    <v-container>
      <section class="my-section py-10">
        <div
          class="text-md-h3 mb-10 text-sm-h4 text-h5 font-weight-bold text-center"
        >
          <span class="font-poppins rule-headline">
            {{ titlePage }}
          </span>
        </div>

        <v-row justify="center">
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            v-for="(galeri, i) in data"
            :key="i"
          >
            <v-img
              @click.stop="lightbox(galeri.img)"
              color="gray darken-3"
              aspect-ratio="1"
              class="rounded-lg cursor-pointer"
              :lazy-src="galeri.img"
              :src="galeri.img"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <v-dialog
      class="d-flex align-center"
      style="z-index:9999999999"
      fullscreen
      v-model="dialog"
    >
      <v-overlay opacity="0.9">
        <v-img
          style="max-width:100vw;max-height:100vh"
          contain
          :lazy-src="srcLightbox"
          @click="lightbox"
          :src="srcLightbox"
        ></v-img>
      </v-overlay>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      srcLightbox: null,
      toggle_exclusive: null,
      titlePage: "Galeri",
      data: [],
      selectedItem: "Images",
      selectedView: "grid",
    };
  },
  created() {
    this.$store.dispatch("setTitlePage", this.titlePage);
    this.data = this.$store.getters.albums;
  },
  methods: {
    showGallery(date, author) {
      this.$router.push({ name: "showGallery", params: { date, author } });
    },
    lightbox(src) {
      this.dialog = !this.dialog;
      this.srcLightbox = src ?? null;
    },
  },
};
</script>

<style scoped>
.closeLightbox {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 999;
}
</style>
