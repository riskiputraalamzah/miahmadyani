<template>
  <div>
    <v-container>
      <div class="mb-10 text-md-h3 text-h4 font-weight-bold text-center ">
        <span class="font-poppins rule-headline">
          Alumni
        </span>
      </div>
      <div class="text-md-h5 mb-5 text-h6 text-center">
        Berikut beberapa dokumentasi alumni tahun ini.
      </div>
      <v-tabs color="green" v-model="tab">
        <v-tab>Sebaran Alumni</v-tab>
        <v-tab>Galeri</v-tab>
        <v-tab>Video</v-tab>
      </v-tabs>

      <section class="py-10">
        <v-tabs-items v-model="tab">
          <v-tab-item>
            MI. Ahmad Yani Pagerngumbuk Wonoayu Sidoarjo sudah meluluskan
            angkatan yang tersebar di Pondok dan sekolah terkemuka :
            <ul>
              <li>Pondok Pesantren Tambakberas Jombang</li>
              <li>Pondok Pesantren Amanatul Ummah</li>
              <li>Pondok Pesantren Modern Al Amanah</li>
              <li>Pondok Pesantren Nurul Islam Mojosari</li>
              <li>dll</li>
            </ul>
          </v-tab-item>
          <v-tab-item>
            isi konten galeri
          </v-tab-item>
          <v-tab-item>
            isi konten video
          </v-tab-item>
        </v-tabs-items>
      </section>

      <section class="py-10">
        <div class="text-md-h5 mb-5 text-h6 text-center">
          Dokumentasi alumni tahun lalu.
        </div>

        <v-slide-group mobile-breakpoint="0" center-active class="mt-10">
          <v-slide-item v-for="(lampau, i) in alumniLampau" :key="i">
            <v-hover v-slot="{ hover }">
              <v-card
                :class="['ma-2 hover-card', hover ? 'on-hover-card' : '']"
                color="transparent"
                elevation="0"
                light
                :width="$vuetify.breakpoint.width > 599 ? '250' : '200'"
              >
                <v-row class="overflow-hidden rounded-t-lg" no-gutters>
                  <v-col
                    v-for="(img, indexImg) in lampau.images"
                    :key="indexImg"
                    :order="i % 2 == 0 && indexImg >= 3 ? 'first' : ''"
                    :cols="indexImg < 3 ? '4' : '6'"
                  >
                    <v-img :src="img" aspect-ratio="1">
                      <template v-slot:placeholder>
                        <v-skeleton-loader type="image"></v-skeleton-loader>
                      </template>
                    </v-img>
                  </v-col>
                </v-row>

                <v-card-title
                  class="justify-center cursor-pointer hover-underline font-weight-bold heading"
                >
                  {{ lampau.year }}
                </v-card-title>
              </v-card>
            </v-hover>
          </v-slide-item>
        </v-slide-group>
      </section>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: null,
      alumniLampau: [],
    };
  },

  created() {
    const dataAlumniLampau = [
      {
        images: [
          "/images/galeri/1.jpg",
          "/images/galeri/2.jpg",
          "/images/galeri/3.jpg",
          "/images/galeri/4.jpg",
          "/images/galeri/5.jpg",
        ],
        year: 2020,
      },
      {
        images: [
          "/images/galeri/6.jpg",
          "/images/galeri/7.jpg",
          "/images/galeri/8.jpg",
          "/images/galeri/9.jpg",
          "/images/galeri/10.jpg",
        ],
        year: 2019,
      },
      {
        images: [
          "/images/galeri/11.jpg",
          "/images/galeri/12.jpg",
          "/images/galeri/13.jpg",
          "/images/galeri/14.jpg",
          "/images/galeri/15.jpg",
        ],
        year: 2018,
      },
      {
        images: [
          "/images/galeri/16.jpg",
          "/images/galeri/17.jpg",
          "/images/galeri/18.jpg",
          "/images/galeri/19.jpg",
          "/images/galeri/20.jpg",
        ],
        year: 2017,
      },
      {
        images: [
          "/images/galeri/21.jpg",
          "/images/galeri/22.jpg",
          "/images/galeri/23.jpg",
          "/images/galeri/24.jpg",
          "/images/galeri/25.jpg",
        ],
        year: 2016,
      },
      {
        images: [
          "/images/galeri/26.jpg",
          "/images/galeri/27.jpg",
          "/images/galeri/28.jpg",
          "/images/galeri/29.jpg",
          "/images/galeri/30.jpg",
        ],
        year: 2015,
      },
    ];
    this.alumniLampau = dataAlumniLampau;
  },
};
</script>
