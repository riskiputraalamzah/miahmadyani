<template>
  <div>
    <v-container>
      <section class="py-10">
        <v-row justify="space-around">
          <v-col cols="12" sm="10" md="8" lg="3" xl="2">
            <div class="konten_artikel_terkait">
              <div class="item mb-5">
                <div class="mb-3   text-h6  ">
                  <span class="font-poppins rule-headline">
                    Informasi Event
                  </span>
                </div>
                <div class="d-flex my-1 justify-space-between  align-center">
                  <span class="text-muted font-italic">Published at</span>
                  <span>{{ liputanEvent.time }}</span>
                </div>

                <div class="d-flex my-1 justify-space-between  align-center">
                  <span class="text-muted font-italic">Created by</span>
                  <span>{{ liputanEvent.author }}</span>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="10" md="8" lg="5" xl="5">
            <div
              class="font-poppins mb-4 text-md-h3 text-h4 "
              v-text="liputanEvent.title"
            ></div>

            <div
              class="text-subtitle mb-4 text-justify"
              v-html="liputanEvent.text"
            ></div>
            <v-row justify="center">
              <v-col
                cols="6"
                v-for="(lImg, indexLImg) in liputanEvent.images"
                :key="indexLImg"
              >
                <v-img
                  @click.stop="lightbox(lImg)"
                  aspect-ratio="1"
                  :src="lImg"
                  class="rounded-lg"
                >
                  <template v-slot:placeholder>
                    <v-skeleton-loader type="image"></v-skeleton-loader>
                  </template>
                </v-img>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            cols="12"
            sm="10"
            md="8"
            lg="3"
            xl="2"
            v-if="liputanEventTerkait.length > 0"
          >
            <div class="konten_artikel_terkait">
              <div class="item mb-5">
                <div class="mb-3   text-h6  ">
                  <span class="font-poppins rule-headline">
                    Liputan Event lainnya
                  </span>
                </div>

                <v-list color="transparent " flat light>
                  <v-list-item-group>
                    <v-list-item
                      :to="{
                        name: 'showEvent',
                        params: { slug: data.slug },
                      }"
                      exact
                      @click="$vuetify.goTo(0, 0)"
                      class="d-flex px-0 align-center py-2"
                      v-for="(data, i) in liputanEventTerkait"
                      :key="i"
                    >
                      <v-avatar class="mr-2" rounded="sm" size="60">
                        <v-img
                          :lazy-src="data.images[0]"
                          :src="data.images[0]"
                        ></v-img>
                      </v-avatar>
                      <v-subheader
                        class="pl-0 flex-column align-start overflow-hidden"
                      >
                        <div
                          class="text-truncate hover-underline d-block mb-1"
                          style="width:100%"
                        >
                          {{ data.title }}
                        </div>

                        <div>
                          <v-icon small>mdi-clock</v-icon>
                          {{ data.time }}
                        </div>
                      </v-subheader>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </div>
            </div>
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
    };
  },
  props: ["slug"],
  computed: {
    liputanEvent() {
      return this.$store.getters.dataLiputanEvent.filter(
        (item) => item.slug == this.slug
      )[0];
    },
    liputanEventTerkait() {
      return this.$store.getters.dataLiputanEvent.filter(
        (item) => item.slug != this.slug
      );
    },
  },

  created() {
    this.setTitle(this.liputanEvent.title);
    this.isMounted(2);
  },

  methods: {
    setTitle(value) {
      this.$store.dispatch("setTitlePage", value);
    },

    slugInUrl(value) {
      return this.$route.path.split("/").includes(value);
    },
    lightbox(src = null, text = null) {
      this.dialog = !this.dialog;
      this.srcLightbox = src;
      this.textLightBox = text;
    },
  },
};
</script>
<style scoped>
.konten_artikel_terkait {
  position: sticky;
  top: 1rem;
}
</style>
