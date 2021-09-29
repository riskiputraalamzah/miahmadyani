<template>
  <div>
    <v-container>
      <Breadcrumbs :items="items" />

      <section class="my-section py-10">
        <div
          class="text-md-h3 mb-10 text-sm-h4 text-h5 font-weight-bold text-center"
        >
          <span class="font-poppins rule-headline">
            Album
            <span class="nama-area">{{
              selectedItem == "Images" ? "Foto" : "Video"
            }}</span>
          </span>
        </div>

        <div class="d-flex justify-space-between align-center mb-5">
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

          <!-- <v-btn-toggle
            v-model="selectedView"
            mandatory
            rounded
            color="success"
          >
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  icon
                  @click="selectedView = 'grid'"
                  value="grid"
                >
                  <v-icon>mdi-grid</v-icon>
                </v-btn>
              </template>
              <span>View Grid</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  icon
                  @click="selectedView = 'list'"
                  value="list"
                >
                  <v-icon>mdi-cards-variant</v-icon>
                </v-btn>
              </template>
              <span>View Card</span>
            </v-tooltip>
          </v-btn-toggle> -->
        </div>
        <!-- area -->
        <v-fade-transition>
          <component :is="selectedItem" :layouts="selectedView"></component>
        </v-fade-transition>
        <!-- end areaa -->
      </section>
    </v-container>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import Images from "@/components/galeri/Images.vue";
import Videos from "@/components/galeri/Videos.vue";
export default {
  data() {
    return {
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

  components: {
    Images,
    Videos,
    Breadcrumbs,
  },
};
</script>
