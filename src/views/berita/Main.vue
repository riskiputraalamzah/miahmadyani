<template>
  <div>
    <v-container>
      <Breadcrumbs :items="items" />
      <section class="py-10">
        <div
          class="text-md-h3 mb-10 text-sm-h3 text-h4 font-weight-bold text-center"
        >
          <span class="font-poppins rule-headline">
            {{ titlePage }}
          </span>
        </div>

        <v-row justify="center">
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="(info, i) in data"
            :key="i"
          >
            <v-hover v-slot="{ hover }">
              <v-card
                :class="['ma-3 hover-card', hover ? 'on-hover-card' : '']"
                color="transparent"
                elevation="0"
                light
              >
                <v-img
                  aspect-ratio="1.5"
                  class="align-end"
                  gradient="to top, rgba(0,0,0,0.2),transparent"
                  :lazy-src="info.image"
                  :src="info.image"
                >
                  <v-chip
                    v-for="(ctg, i) in info.category"
                    :key="i"
                    class="ma-2 text-uppercase"
                    v-text="ctg"
                    small
                  >
                  </v-chip>
                </v-img>

                <v-card-title
                  v-text="info.title"
                  class="hover-underline cursor-pointer"
                  style="line-height:1.5rem;padding:1rem 0.5rem;"
                ></v-card-title>

                <v-divider class="mx-2"></v-divider>
                <div
                  class=" text-subtitle-2 px-1  p-card d-flex d-sm-block justify-space-between flex-wrap"
                >
                  <div class="d-flex my-1  align-center">
                    <v-icon class="mr-1">mdi-calendar-clock</v-icon>
                    <span>{{ info.time }}</span>
                  </div>
                  <div class="d-flex my-1  align-center">
                    <v-icon class="mr-1">mdi-eye</v-icon>
                    <span>{{ info.views }}</span>
                  </div>
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
import Breadcrumbs from "@/components/Breadcrumbs.vue";
export default {
  data() {
    return {
      titlePage: "Berita",
      items: [
        {
          text: "Home",
          disabled: false,
          to: "/",
        },
        {
          text: "Berita",
          disabled: true,
          to: "/berita",
        },
      ],
      data: [],
    };
  },
  components: {
    Breadcrumbs,
  },
  created() {
    this.$store.dispatch("setTitlePage", this.titlePage);

    this.data = this.createSlug(this.$store.getters.dataBerita);
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
