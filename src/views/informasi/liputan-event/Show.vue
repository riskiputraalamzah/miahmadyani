<template>
  <div>
    <v-container>
      <section class="py-10">
        <v-row justify="space-around">
          <v-col cols="12" sm="10" md="3" xl="2">
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
          <v-col cols="12" sm="10" md="5" xl="2">
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
                aspect-ratio="1"
                v-for="(lImg, indexLImg) in liputanEvent.images"
                :key="indexLImg"
              >
                <v-img :src="lImg" class="rounded-lg">
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
            md="3"
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
  </div>
</template>

<script>
export default {
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
  },
};
</script>
<style scoped>
.konten_artikel_terkait {
  position: sticky;
  top: 1rem;
}
</style>
