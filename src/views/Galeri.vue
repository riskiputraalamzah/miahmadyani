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
            cols="6"
            sm="4"
            md="3"
            class="d-flex child-flex"
          >
            <v-img
              :src="album.img"
              :lazy-src="album.img"
              aspect-ratio="16/9"
              class="grey lighten-2 align-end white--text"
              gradient="to top,rgba(0,0,0,0.7),transparent"
            >
              <v-card-title>{{ album.text }}</v-card-title>
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
          text: "Contoh Text",
        },

        {
          img: "/images/galeri/gambar-2.jpg",
          text: "Contoh Text",
        },
        {
          img: "/images/galeri/gambar-3.jpg",
          text: "Contoh Text",
        },
        {
          img: "/images/galeri/gambar-4.jpg",
          text: "Contoh Text",
        },
        {
          img: "/images/galeri/gambar-5.jpg",
          text: "Contoh Text",
        },
      ],
    };
  },
};
</script>
