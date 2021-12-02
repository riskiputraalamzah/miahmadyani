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
              @click.stop="lightbox(galeri.img, galeri.text)"
              aspect-ratio="1"
              class="rounded-lg cursor-pointer"
              :src="galeri.img"
            >
              <template v-slot:placeholder>
                <v-skeleton-loader type="image"></v-skeleton-loader>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <v-dialog
      class="d-flex py-10 align-center"
      style="z-index:9999999999"
      fullscreen
      v-model="dialog"
    >
      <v-overlay opacity="0.9">
        <v-img
          style="max-width:100vw;max-height:100vh"
          contain
          :lazy-src="srcLightbox"
          @click="dialog = !dialog"
          :src="srcLightbox"
        >
        </v-img>
        <div class="placeholder-lightbox text-sm-h5 text-h6 pa-4">
          {{ textLightBox }}
        </div>
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
      textLightBox: null,
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
    lightbox(src, text) {
      this.dialog = !this.dialog;
      this.srcLightbox = src ?? null;
      this.textLightBox = text ?? null;
    },
  },
};
</script>

<style scoped>
.placeholder-lightbox {
  position: fixed;
  bottom: 0;
  font-weight: bold;
  text-shadow: 2px 2px 2px black;
  text-align: center;
  left: 0;
  right: 0;
  z-index: 99999;
}
.closeLightbox {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 999;
}
</style>
