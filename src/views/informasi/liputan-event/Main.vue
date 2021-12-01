<template>
  <div>
    <v-container>
      <section class="py-10">
        <div
          class="mb-10 text-md-h3 text-sm-h4 text-h5 font-weight-bold text-center "
        >
          <span class="font-poppins rule-headline">
            Liputan Event
          </span>
        </div>

        <v-row justify="center">
          <v-col cols="12" sm="6" md="4" v-for="(info, i) in data" :key="i">
            <v-hover v-slot="{ hover }">
              <v-card
                :class="['ma-3 hover-card', hover ? 'on-hover-card' : '']"
                color="transparent"
                elevation="0"
                light
              >
                <v-row class="overflow-hidden rounded-lg" no-gutters>
                  <v-col
                    v-for="(img, indexImg) in info.images"
                    :key="indexImg"
                    cols="6"
                  >
                    <v-img :src="img" aspect-ratio="1">
                      <template v-slot:placeholder>
                        <v-skeleton-loader type="image"></v-skeleton-loader>
                      </template>
                    </v-img>
                  </v-col>
                </v-row>

                <router-link
                  :to="{ name: 'showEvent', params: { slug: info.slug } }"
                  class="black--text text-decoration-none"
                >
                  <v-card-title
                    v-text="info.title"
                    class="hover-underline cursor-pointer "
                    style="line-height:1.5rem;padding:1rem 0.5rem;"
                  ></v-card-title>
                </router-link>

                <v-divider class="mx-2"></v-divider>
                <div
                  class=" text-subtitle-2 px-1  p-card d-flex d-sm-block justify-space-between flex-wrap"
                >
                  <div class="d-flex my-1  align-center">
                    <v-icon class="mr-1">mdi-calendar-clock</v-icon>
                    <span>{{ info.time }}</span>
                  </div>
                  <!-- <div class="d-flex my-1  align-center">
                    <v-icon class="mr-1">mdi-eye</v-icon>
                    <span>{{ info.views }}</span>
                  </div> -->
                  <div class="d-flex my-1  align-center">
                    <v-icon class="mr-1">mdi-account</v-icon>
                    <span>{{ info.author }}</span>
                  </div>
                </div>
              </v-card>
            </v-hover>
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
      titlePage: "Liputan Event",
    };
  },
  computed: {
    data() {
      let result = this.$store.getters.dataLiputanEvent;
      const onlyFourImage = result.map((obj) => {
        return { ...obj, images: obj.images.slice(0, 4) };
      });
      return this.createSlug(onlyFourImage);
    },
  },
  created() {
    this.$store.dispatch("setTitlePage", this.titlePage);
    this.isMounted(2);
  },

  methods: {
    createSlug(list) {
      return list.map((item) => {
        const obj = Object.assign({}, item);

        obj["slug"] = item.title
          .toLowerCase()
          .split(" ")
          .join("-");
        return obj;
      });
    },
  },
};
</script>
