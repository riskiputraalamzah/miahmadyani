<template>
  <div>
    <v-container>
      <v-breadcrumbs large light :items="items">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>

      <section class="my-section">
        <div
          class="text-md-h3 mb-10 text-sm-h4 text-h5 font-weight-bold text-center"
        >
          <span class="font-poppins rule-headline">
            Album
          </span>
        </div>
        <v-row justify="center">
          <v-col
            v-for="(album, i) in albums"
            :key="i"
            cols="4"
            class="d-flex child-flex"
          >
            <v-img
              :src="album.img"
              :lazy-src="album.img"
              aspect-ratio="1"
              class="grey lighten-2"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Home",
          disabled: false,
          to: "/",
        },
        {
          text: "Galeri",
          disabled: true,
          to: "/galeri",
        },
      ],
      albums: [
        {
          img: "/images/galeri/gambar-1.jpg",
        },
        {
          img: "/images/galeri/gambar-2.jpg",
        },
        {
          img: "/images/galeri/gambar-3.jpg",
        },
        {
          img: "/images/galeri/gambar-4.jpg",
        },
        {
          img: "/images/galeri/gambar-5.jpg",
        },
      ],
    };
  },
};
</script>
