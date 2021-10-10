<template>
  <div>
    <v-container>
      <section class="py-10">
        <div
          class="mb-10 text-md-h3 text-sm-h4 text-h5 font-weight-bold text-center "
        >
          <span class="font-poppins rule-headline">
            Struktur Organisasi
          </span>
        </div>
        <v-img
          :lazy-src="image"
          :src="image"
          v-if="$vuetify.breakpoint.smAndDown"
        ></v-img>
        <panZoom class="overflow-hidden" v-else>
          <v-img :lazy-src="image" :src="image"></v-img>
        </panZoom>
      </section>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titlePage: "Struktur Organisasi",
      image: "/images/struktur-organisasi.png",
    };
  },
  created() {
    this.$store.dispatch("setTitlePage", this.titlePage);
  },
  mounted() {
    this.isMounted(1);
  },
};
</script>
