<template>
  <div>
    <v-container>
      <section class="py-10">
        <div class="mb-10 text-md-h3 text-h4 font-weight-bold text-center ">
          <span class="font-poppins rule-headline">
            Struktur Organisasi
          </span>
        </div>

        <panZoom class="overflow-hidden">
          <v-img :lazy-src="image" :src="image"></v-img>
        </panZoom>

        <!-- <div class="d-flex justify-end">
          <v-btn class="mx-2" x-large icon>
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <v-btn class="mx-2" x-large icon>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div> -->
      </section>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      image: "/images/struktur-organisasi.png",
    };
  },
};
</script>
