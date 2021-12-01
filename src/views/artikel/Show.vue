<template>
  <div>
    <v-container>
      <section class="py-10">
        <v-row justify="center">
          <v-col cols="12" sm="10" md="8" xl="7">
            <div
              class="font-poppins mb-4 text-md-h4 text-h5 "
              v-text="artikel.title"
            ></div>
            <div class="mb-4">
              <div class="d-flex my-1 justify-space-between  align-center">
                <span class="text-muted font-italic">Published at</span>
                <span>{{ artikel.time }}</span>
              </div>
              <div class="d-flex my-1 justify-space-between  align-center">
                <span class="text-muted font-italic">Views</span>
                <span>{{ numberWithCommas(artikel.views) }}</span>
              </div>
              <div class="d-flex my-1 justify-space-between  align-center">
                <span class="text-muted font-italic">Created by</span>
                <span>{{ artikel.author }}</span>
              </div>
            </div>
            <v-img
              :lazy-src="artikel.image"
              :src="artikel.image"
              aspect-ratio="16/9"
              class="rounded-lg mb-4"
            >
            </v-img>

            <div class="text-subtitle mb-4" v-html="artikel.text"></div>
          </v-col>
          <v-col cols="12" sm="10" md="4" xl="5">
            <div class="konten_artikel_terkait">
              <div class="item mb-5">
                <div class="mb-3   text-h6  ">
                  <span class="font-poppins rule-headline">
                    Artikel Terkait
                  </span>
                </div>

                <v-list color="transparent " flat light>
                  <v-list-item-group>
                    <v-list-item
                      :to="{ name: 'showArtikel', params: { slug: data.slug } }"
                      exact
                      @click="$vuetify.goTo(0, 0)"
                      class="d-flex px-0 align-center py-2"
                      v-for="(data, i) in artikelTerkait"
                      :key="i"
                    >
                      <v-avatar class="mr-2" rounded="sm" size="60">
                        <v-img :lazy-src="data.image" :src="data.image"></v-img>
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
                          <v-icon small>mdi-eye</v-icon>
                          {{ numberWithCommas(data.views) }}
                        </div>
                      </v-subheader>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </div>
              <div class="item mb-5">
                <div class="mb-3 text-h6  ">
                  <span class="font-poppins rule-headline">
                    Kategori
                  </span>
                </div>

                <v-list color="transparent " flat light>
                  <v-list-item-group>
                    <v-list-item
                      class="py-1 px-0"
                      v-for="(category, i) in categories"
                      :key="i"
                    >
                      <div class="py-0" v-text="category.name"></div>
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
  data() {
    return {
      categories: [
        {
          name: "PENDIDIKAN",
        },
        {
          name: "RELIGI",
        },
      ],
    };
  },
  props: ["slug"],
  computed: {
    artikel() {
      return this.$store.getters.dataArtikel.filter(
        (item) => item.slug == this.slug
      )[0];
    },
    artikelTerkait() {
      return this.$store.getters.dataArtikel.filter(
        (item) => item.slug != this.slug
      );
    },
  },
  watch: {
    artikel: function(newValue) {
      this.setTitle(newValue.title);
      this.addViews();
    },
  },

  created() {
    this.setTitle(this.artikel.title);
  },
  mounted() {
    this.addViews();
  },
  methods: {
    setTitle(value) {
      this.$store.dispatch("setTitlePage", value);
    },
    addViews() {
      setTimeout(() => {
        if (
          this.artikel.slug == this.slug &&
          this.slugInUrl(this.artikel.slug)
        ) {
          this.$store.dispatch("addViews", this.artikel.slug);
        }
      }, 180000);
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
