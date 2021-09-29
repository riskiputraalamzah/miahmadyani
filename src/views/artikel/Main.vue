<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" xl="8">
          <v-breadcrumbs large light :items="items">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
          <section class="py-10">
            <div
              class="text-md-h3 mb-10 text-sm-h4 text-h5 font-weight-bold text-center"
            >
              <span class="font-poppins rule-headline">
                Artikel
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
                      <router-link
                        class="text-decoration-none black--text"
                        :to="{
                          name: 'showArtikel',
                          params: { slug: item.slug },
                        }"
                      >
                        <v-card-title
                          class="p-lh-card-title hover-underline cursor-pointer"
                          v-text="item.title"
                        ></v-card-title>
                      </router-link>
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
          text: "Artikel",
          disabled: true,
          to: "/artikel",
        },
      ],
      data: [],
    };
  },
  created() {
    const data = [
      {
        image:
          "https://ilfiwomen.org/wp-content/uploads/2020/10/artikel-pendidikan.jpg",
        category: ["pendidikan"],
        title: "Pendidikan Karakter Untuk Membangun Peradaban Bangsa",
        time: "Hari ini 21.45",
        author: "admin",
        views: "153",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPJKKHFypNTfzQXE-dTFDMNEPxf9Ipwt21NQ&usqp=CAU",
        category: ["religi"],
        title: "Bulan Ramadhan yang Penuh Berkah",
        time: "Kemarin 19.25",
        author: "Yusuf S.pd",
        views: "200",
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
