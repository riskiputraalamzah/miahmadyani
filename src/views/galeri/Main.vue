<template>
  <div>
    <v-container>
      <Breadcrumbs :items="items" />

      <section class="my-section py-10">
        <div
          class="text-md-h3 mb-10 text-sm-h4 text-h5 font-weight-bold text-center"
        >
          <span class="font-poppins rule-headline">
            {{ titlePage }}
          </span>
        </div>

        <!-- <div class="d-flex justify-space-between align-center mb-5">
          <v-btn-toggle
            v-model="selectedItem"
            mandatory
            rounded
            color="success"
          >
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                  @click="selectedItem = 'Images'"
                  value="Images"
                >
                  <v-icon>mdi-file-image</v-icon>
                </v-btn>
              </template>
              <span>Album Foto</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                  @click="selectedItem = 'Videos'"
                  value="Videos"
                >
                  <v-icon>mdi-file-video</v-icon>
                </v-btn>
              </template>
              <span>Album Video</span>
            </v-tooltip>
          </v-btn-toggle>

       
        </div> -->
        <!-- area -->

        <!-- <v-btn-toggle
          class="mb-5"
          color="green"
          v-model="toggle_exclusive"
          mandatory
          group
        >
          <v-btn>
            <v-icon>mdi-trending-up</v-icon>
          </v-btn>
          <v-btn>
            <v-icon style="transform:rotate(-90deg);">mdi-signal</v-icon>
          </v-btn>
        </v-btn-toggle>

        <v-row justify="center">
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card elevation="0">
              <v-img
                aspect-ratio="1"
                lazy-src="/images/galeri/1.jpg"
                src="/images/galeri/1.jpg"
              ></v-img>

              <v-card-actions
                @click="showGallery('827382738', 'Admin')"
                class="d-flex flex-sm-column flex-row justify-space-between flex-wrap cursor-pointer align-start hover-underline "
              >
                <div class="d-flex my-1 align-center">
                  <v-icon class="mr-1">mdi-folder-account-outline</v-icon>
                  <span>Siti Rokhamah S,pd</span>
                </div>
                <div class="d-flex my-1 align-center">
                  <v-icon class="mr-1">mdi-grid</v-icon>
                  <span>16 Item</span>
                </div>
                <div class="d-flex my-1 align-center">
                  <v-icon class="mr-1">mdi-calendar-clock</v-icon>
                  <span>19/09/2021 20:18</span>
                </div>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card elevation="0">
              <v-img
                aspect-ratio="1"
                lazy-src="/images/galeri/gambar-3.jpg"
                src="/images/galeri/gambar-3.jpg"
              ></v-img>

              <v-card-actions
                @click="showGallery('3242424', 'Adwewwsdmin')"
                class="d-flex flex-sm-column flex-row justify-space-between flex-wrap cursor-pointer align-start hover-underline "
              >
                <div class="d-flex my-1 align-center">
                  <v-icon class="mr-1">mdi-folder-account-outline</v-icon>
                  <span>Yusuf S,pd</span>
                </div>
                <div class="d-flex my-1 align-center">
                  <v-icon class="mr-1">mdi-grid</v-icon>
                  <span>16 Item</span>
                </div>
                <div class="d-flex my-1 align-center">
                  <v-icon class="mr-1">mdi-calendar-clock</v-icon>
                  <span>19/09/2021 20:18</span>
                </div>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card elevation="0">
              <v-img
                aspect-ratio="1"
                lazy-src="/images/galeri/2.jpg"
                src="/images/galeri/2.jpg"
              ></v-img>

              <v-card-actions
                @click="showGallery('8273sdsd82738', 'Addsdsdmin')"
                class="d-flex flex-sm-column flex-row justify-space-between flex-wrap cursor-pointer align-start hover-underline "
              >
                <div class="d-flex my-1 align-center">
                  <v-icon class="mr-1">mdi-folder-account-outline</v-icon>
                  <span>Yusuf S,pd</span>
                </div>
                <div class="d-flex my-1 align-center">
                  <v-icon class="mr-1">mdi-grid</v-icon>
                  <span>16 Item</span>
                </div>
                <div class="d-flex my-1 align-center">
                  <v-icon class="mr-1">mdi-calendar-clock</v-icon>
                  <span>19/09/2021 20:18</span>
                </div>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card elevation="0">
              <v-img
                aspect-ratio="1"
                lazy-src="/images/galeri/10.jpg"
                src="/images/galeri/10.jpg"
              ></v-img>

              <v-card-actions
                @click="showGallery('827382dada738', 'Admie2ewsdn')"
                class="d-flex flex-sm-column flex-row justify-space-between flex-wrap cursor-pointer align-start hover-underline "
              >
                <div class="d-flex my-1 align-center">
                  <v-icon class="mr-1">mdi-folder-account-outline</v-icon>
                  <span>Admin</span>
                </div>
                <div class="d-flex my-1 align-center">
                  <v-icon class="mr-1">mdi-grid</v-icon>
                  <span>16 Item</span>
                </div>
                <div class="d-flex my-1 align-center">
                  <v-icon class="mr-1">mdi-calendar-clock</v-icon>
                  <span>19/09/2021 20:18</span>
                </div>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card elevation="0">
              <v-img
                aspect-ratio="1"
                lazy-src="/images/galeri/gambar-2.jpg"
                src="/images/galeri/gambar-2.jpg"
              ></v-img>

              <v-card-actions
                @click="showGallery('8273dad82738', 'Adsdamin')"
                class="d-flex flex-sm-column flex-row justify-space-between flex-wrap cursor-pointer align-start hover-underline "
              >
                <div class="d-flex my-1 align-center">
                  <v-icon class="mr-1">mdi-folder-account-outline</v-icon>
                  <span>Admin</span>
                </div>
                <div class="d-flex my-1 align-center">
                  <v-icon class="mr-1">mdi-grid</v-icon>
                  <span>16 Item</span>
                </div>
                <div class="d-flex my-1 align-center">
                  <v-icon class="mr-1">mdi-calendar-clock</v-icon>
                  <span>19/09/2021 20:18</span>
                </div>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row> -->

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
import Breadcrumbs from "@/components/Breadcrumbs.vue";

// import Images from "@/components/galeri/Images.vue";
// import Videos from "@/components/galeri/Videos.vue";
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
  components: {
    // Images,
    // Videos,
    Breadcrumbs,
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
