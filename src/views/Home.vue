<template>
  <div class="home-content">
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
            reverse-transition="scale-transition"
            transition="scale-transition"
            v-for="(slide, i) in sliders"
            :key="i"
          >
            <v-img
              height="100%"
              gradient="to top right, rgba(0,0,0,0.7),rgba(0,0,0,0.4),transparent"
              :lazy-src="slide.img"
              :src="slide.img"
              class="grey lighten-2"
            ></v-img>
            <div class="information white--text pl-md-5 pl-sm-3 pl-2 pr-2">
              <div class="text-md-h3 text-sm-h4 text-h6 font-weight-bold">
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
    <section class="my-section py-10">
      <v-container>
        <div
          class="text-md-h3  text-sm-h4 text-h5 font-weight-bold text-center"
        >
          <span class="font-poppins rule-headline">
            Sambutan Kepala Sekolah
          </span>
        </div>

        <v-row justify="center" align="center" class="mt-10">
          <v-col cols="12" md="5" sm="10">
            <v-card elevation="10">
              <v-img
                elevat
                lazy-src="/images/slider-4.jpg"
                src="/images/slider-4.jpg"
              ></v-img>
            </v-card>
          </v-col>
          <v-col cols="12" md="7" sm="10">
            <div class="text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
                et!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
                eum fugiat molestias labore voluptate praesentium necessitatibus
                iste? Similique iure hic sint dolorum, ratione ab quisquam
                incidunt alias ipsum doloremque cumque quia. Tempore animi
                dignissimos delectus consequatur mollitia natus, voluptatum
                explicabo maxime totam aliquam recusandae commodi in ducimus
                ipsa aliquid ipsum!
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="my-section py-10">
      <v-container>
        <div class="d-flex justify-space-between aling-center">
          <div
            class="text-md-h3  text-sm-h4 text-h5 font-weight-bold text-center"
          >
            <span class="font-poppins rule-headline">
              Artikel
            </span>
          </div>
          <v-hover v-slot="{ hover }">
            <router-link
              :class="[
                'font-poppins text-sm-h6 text-subtitle-2 d-flex align-center  red--text',
                hover ? 'text-decoration-underline' : 'text-decoration-none',
              ]"
              to="/artikel"
            >
              Lihat semua
            </router-link>
          </v-hover>
        </div>

        <v-slide-group mobile-breakpoint="0" center-active class="mt-10">
          <v-slide-item v-for="(info, i) in artikelTerbaru" :key="i">
            <v-hover v-slot="{ hover }">
              <v-card
                :class="['ma-3 hover-card', hover ? 'on-hover-card' : '']"
                color="transparent"
                elevation="0"
                light
                :width="$vuetify.breakpoint.width > 599 ? '250' : '200'"
              >
                <v-img
                  aspect-ratio="1.5"
                  class="align-end"
                  gradient="to top, rgba(0,0,0,0.5),transparent"
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
                <div class=" text-subtitle-2 px-1  p-card ">
                  <div class="d-flex my-1  align-center">
                    <v-icon class="mr-2">mdi-calendar-clock</v-icon>
                    <span>{{ info.time }}</span>
                  </div>
                  <div class="d-flex my-1  align-center">
                    <v-icon class="mr-2">mdi-eye</v-icon>
                    <span>{{ info.views }}</span>
                  </div>
                  <div class="d-flex my-1  align-center">
                    <v-icon class="mr-2">mdi-account</v-icon>
                    <span>{{ info.author }}</span>
                  </div>
                </div>
              </v-card>
            </v-hover>
          </v-slide-item>
        </v-slide-group>
      </v-container>
    </section>
    <section class="my-section py-10 ">
      <v-container>
        <div class="d-flex justify-space-between aling-center">
          <div
            class="text-md-h3  text-sm-h4 text-h5 font-weight-bold text-center"
          >
            <span class="font-poppins rule-headline">
              Berita
            </span>
          </div>
          <v-hover v-slot="{ hover }">
            <router-link
              :class="[
                'font-poppins text-sm-h6 text-subtitle-2 d-flex align-center  red--text',
                hover ? 'text-decoration-underline' : 'text-decoration-none',
              ]"
              to="/berita"
            >
              Lihat semua
            </router-link>
          </v-hover>
        </div>

        <v-slide-group mobile-breakpoint="0" center-active class="mt-10">
          <v-slide-item v-for="(info, i) in beritaTerbaru" :key="i">
            <v-hover v-slot="{ hover }">
              <v-card
                :class="['ma-3 hover-card', hover ? 'on-hover-card' : '']"
                color="transparent"
                elevation="0"
                light
                :width="$vuetify.breakpoint.width > 599 ? '250' : '200'"
              >
                <v-img
                  aspect-ratio="1.5"
                  class="align-end"
                  gradient="to top, rgba(0,0,0,0.5),transparent"
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
                <router-link
                  class="black--text text-decoration-none"
                  :to="{ name: 'showArtikel', params: { slug: info.slug } }"
                >
                  <v-card-title
                    v-text="info.title"
                    class="hover-underline cursor-pointer"
                    style="line-height:1.5rem;padding:1rem 0.5rem;"
                  ></v-card-title>
                </router-link>
                <v-divider class="mx-2"></v-divider>
                <div class=" text-subtitle-2 px-1  p-card ">
                  <div class="d-flex my-1  align-center">
                    <v-icon class="mr-2">mdi-calendar-clock</v-icon>
                    <span>{{ info.time }}</span>
                  </div>
                  <div class="d-flex my-1  align-center">
                    <v-icon class="mr-2">mdi-eye</v-icon>
                    <span>{{ info.views }}</span>
                  </div>
                  <div class="d-flex my-1  align-center">
                    <v-icon class="mr-2">mdi-account</v-icon>
                    <span>{{ info.author }}</span>
                  </div>
                </div>
              </v-card>
            </v-hover>
          </v-slide-item>
        </v-slide-group>
      </v-container>
    </section>
  </div>
</template>
<script>
import HeroContent from "@/components/HeroContent.vue";
export default {
  data() {
    return {
      sliders: [],
      informasiTerbaru: [],
      artikelTerbaru: [],
      beritaTerbaru: [],
      items: [
        {
          color: "transparent",
          src: "/images/slider-2.jpeg",
          title: "Supermodel",
          artist: "Foster the People",
        },
        {
          color: "transparent",
          src: "/images/slider-4.jpg",
          title: "Halcyon Days",
          artist: "Ellie Goulding",
        },
      ],
    };
  },
  components: {
    HeroContent,
  },

  created() {
    const dataInformasiTerbaru = [
      {
        image: "/images/galeri/gambar-1.jpg",
        title: "Lorem ipsum dolor sit amet.",
      },
      {
        image: "/images/galeri/gambar-2.jpg",
        title: "Lorem ipsum dolor sit amet consectetursdsdsd",
      },
      {
        image: "/images/galeri/gambar-3.jpg",
        title: "Lorem ipsum dolor sit amet consecteturdfdgfdfdgfdfee3r3r3rewre",
      },
      {
        image: "/images/galeri/gambar-4.jpg",
        title: "Lorem ipsum ",
      },
      {
        image: "/images/galeri/gambar-4.jpg",
        title: "Lorem ipsum dolor sit amet consectetur dfdfdfd",
      },
      {
        image: "/images/galeri/gambar-4.jpg",
        title:
          "Lorem ipsum dolor sit amet consectetur sdsfdsfsffdfdfdfdfsfdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsfsdfsdf",
      },
      {
        image: "/images/galeri/gambar-5.jpg",
        title: "Lorem ipsum dolor sit amet consectetur",
      },
    ];

    const dataSlider = [
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
    ];

    const dataArtikel = [
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
    const dataBerita = [
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

    this.informasiTerbaru = this.cutString(dataInformasiTerbaru, "title", 100);
    this.artikelTerbaru = this.cutString(dataArtikel, "title", 100);
    this.beritaTerbaru = this.cutString(dataBerita, "title", 100);

    this.sliders = dataSlider;
  },
  methods: {
    cutString(list, key, max) {
      return list.map((item) => {
        const obj = Object.assign({}, item);
        obj[key] =
          obj[key].length > max
            ? obj[key].substring(0, max) + "..."
            : obj[key].substring(0, max);
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

<style scoped>
.p-sticky {
  border-left: 2px solid rgb(235, 235, 235);
}

section.my-section:nth-child(odd) {
  background-color: #fafafa;
}
/* .hover-card {
  transition: 0.5s ease;
} */
.hover-card.on-hover-card {
  animation: bounce 1s infinite;
}
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
