<template>
  <div>
    <hero-content>
      <template>
        <v-carousel
          style="background-image: linear-gradient(to top right, rgba(0,0,0,0.9),rgba(0,0,0,0.4),transparent)"
          cycle
          interval="10000"
          height="40vmax"
          hide-delimiters
        >
          <v-carousel-item
            transition="fade-transition"
            v-for="(slide, i) in sliders"
            :key="i"
          >
            <v-img
              height="100%"
              gradient="to top right, rgba(0,0,0,0.7),rgba(0,0,0,0.4),transparent"
              :lazy-src="slide.img"
              :src="slide.img"
            ></v-img>
            <div class="information white--text pl-md-5 pl-sm-3 pl-2 pr-2">
              <div class="text-md-h3 text-sm-h4 text-h6">
                {{ slide.title }}
              </div>
              <div class="text-md-h5 text-sm-subtitle-1 text-subtitle-2">
                {{ slide.subtitle }}
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </template>
    </hero-content>

    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="display-2 font-weight-bold text-center  font-poppins">
            Sambutan Kepala Sekolah
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import HeroContent from "@/components/HeroContent.vue";
export default {
  data() {
    return {
      sliders: [
        {
          title: "Tanggap Covid",
          subtitle:
            "Tanggap Covid Protokol Kesehatan bersama LAZIZNU Kec. Wonoayu",
          img: "/images/slider-4.jpg",
        },
        {
          title: "Tahfidzil Qur'an",
          subtitle:
            "Juara  Tahfidzil Qur'an JUZ 30 Lomba Tingkat Kabupaten di Candi",
          img: "/images/slider-3.jpg",
        },
        {
          title: "Judul 3",
          subtitle: "Sub Title 3",
          img: "/images/slider-2.jpeg",
        },
      ],
    };
  },
  components: {
    HeroContent,
  },
};
</script>
