<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" xl="8">
          <Breadcrumbs :items="items" />
          <section class="py-10">
            <div
              class="text-md-h3 mb-10 text-sm-h4 text-h5 font-weight-bold text-center"
            >
              <span class="font-poppins rule-headline">
                Berita
              </span>
            </div>
            <v-row justify="center">
              <v-col cols="12" v-for="(item, i) in data" :key="i">
                <v-row align="center">
                  <v-col cols="4" lg="3">
                    <v-img
                      aspect-ratio="1"
                      :lazy-src="item.image"
                      :src="item.image"
                    ></v-img>
                  </v-col>
                  <v-col
                    cols="8"
                    lg="9"
                    class="d-flex flex-column justify-space-around"
                  >
                    <div>
                      <v-chip
                        v-for="(ctg, i) in item.category"
                        :key="i"
                        class="ma-2 text-uppercase p-card"
                        v-text="ctg"
                        small
                      >
                      </v-chip>
                    </div>
                    <v-card flat>
                      <v-card-title
                        class="p-lh-card-title hover-underline cursor-pointer"
                        v-text="item.title"
                      ></v-card-title>
                    </v-card>
                    <div
                      class=" text-subtitle-2 px-1  p-card d-flex flex-md-row flex-column justify-space-between "
                    >
                      <div class="d-flex my-1  align-center">
                        <v-icon class="mr-2">mdi-calendar-clock</v-icon>
                        <span>{{ item.time }}</span>
                      </div>
                      <div class="d-flex my-1  align-center">
                        <v-icon class="mr-2">mdi-eye</v-icon>
                        <span>{{ item.views }}</span>
                      </div>
                      <div class="d-flex my-1  align-center">
                        <v-icon class="mr-2">mdi-account</v-icon>
                        <span>{{ item.author }}</span>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </section>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/Breadcrumbs.vue";
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
    const data = [
      {
        image: "/images/galeri/2.jpg",
        category: ["kunjungan"],
        title: "Pembinaan Orientasi Kesehatan oleh Puskesmas",
        time: "Hari ini 09.00",
        author: "admin",
        views: "1.500",
      },
      {
        image: "/images/galeri/15.jpg",
        category: ["festival"],
        title: "HSN beserta Banom di Kabupaten Sidoarjo ",
        time: "2 hari yang lalu 09.00",
        author: "admin",
        views: "1.163",
      },
      {
        image: "/images/galeri/1.jpg",
        category: ["kejuaraan"],
        title: "JUARA TAHFIDZIL QUR’AN JUZ 30 LOMBA TINGKAT KABUPATEN DI CANDI",
        time: "1 minggu yang lalu",
        author: "admin",
        views: "563",
      },
      {
        image: "/images/galeri/40.jpg",
        category: ["kejuaraan"],
        title: "Lomba Pidato",
        time: "1 bulan yang lalu",
        author: "admin",
        views: "754",
      },
    ];
    this.data = this.createSlug(data);
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
