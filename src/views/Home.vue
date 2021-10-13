<template>
  <div class="home-content">
    <hero-content>
      <template>
        <v-carousel cycle interval="10000" height="50vmax" hide-delimiters>
          <v-carousel-item v-for="(slide, i) in sliders" :key="i">
            <v-img
              gradient="to top right, rgba(0,0,0,0.6),rgba(0,0,0,0.3),transparent"
              :lazy-src="slide.img"
              :src="slide.img"
            >
            </v-img>
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
            <v-img class="rounded-lg" src="/images/sambutan-kepsek.jpeg">
              <template v-slot:placeholder>
                <v-skeleton-loader type="image"></v-skeleton-loader>
              </template>
            </v-img>
          </v-col>
          <v-col cols="12" md="7" sm="10">
            <div class="text-justify text-subtitle font-weight-regular">
              <p class="font-weight-bold ">
                Bagian ini nanti akan berisi kata-kata sambutan oleh Kepala
                Sekolah
              </p>
              <p>
                Sambutan bisa berupa kata kata sapaan kepada seseorang yang
                telah berkunjung diweb kita (MI Ahmad Yani) .
              </p>
              <p>
                Web MI Ahmad Yani merupakan sebuah web profile sekolah yang
                menampilakan informasi serta kegiatan terkini yang sedang ada,
                agar dapat dilihat oleh banyak orang.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="my-section program-pendidikan py-10">
      <v-container>
        <div
          class="text-md-h3 mb-10 text-sm-h4 text-h5  font-weight-bold text-center"
        >
          <span class="font-poppins rule-headline">
            Program Pendidikan
          </span>
        </div>
        <div class="text-center  text-h6 font-weight-regular">
          Berikut beberapa program pendidikan sekolah kita
        </div>

        <v-row
          v-for="(program, i) in programPendidikan"
          :key="i"
          :class="[i % 2 == 1 ? 'flex-row-reverse' : '', 'my-5']"
          justify="center"
          align="center"
          class="py-5"
        >
          <v-col cols="8" sm="6" md="4">
            <v-img
              class="rounded-lg "
              contain
              :lazy-src="program.image"
              :src="program.image"
            >
            </v-img>
          </v-col>
          <v-col cols="12" sm="12" md="8" class="text-center">
            <v-lazy
              v-model="program.isActive"
              :options="{
                threshold: 0.5,
              }"
              min-height="200"
              transition="slide-y-reverse-transition"
            >
              <div>
                <div
                  class="title-row mb-5 font-poppins font-weight-bold  text-sm-h4 text-h5"
                >
                  {{ program.title }}
                </div>

                <div class="text-h6 font-weight-regular">
                  {{ program.text }}
                </div>
              </div>
            </v-lazy>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="my-section py-10">
      <v-container>
        <div class="d-flex justify-space-between align-center">
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
                <router-link
                  :to="{ name: 'showArtikel', params: { slug: info.slug } }"
                  class="black--text text-decoration-none"
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
                    <span>{{ numberWithCommas(info.views) }}</span>
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

    <section class="my-section py-10">
      <v-container>
        <div
          class="text-md-h3 mb-10  text-sm-h4 text-h5  font-weight-bold text-center"
        >
          <span class="font-poppins rule-headline">
            Kejuaraan
          </span>
        </div>
        <div class="text-center  text-h6 mb-5 font-weight-regular">
          MI. Ahmad Yani berusaha untuk memadukan potensi masing-masing anak,
          serta berusaha menghasilkan keunggulan pribadi yang bisa membanggakan
          dan dapat digunakan untuk meraih sukses tertinggi
        </div>

        <v-row align="center" class=" py-10" justify="center">
          <v-col cols="12" sm="8" md="5">
            <v-carousel
              cycle
              height="auto"
              class="rounded-lg overflow-hidden"
              interval="5000"
              :show-arrows="false"
              hide-delimiters
            >
              <v-carousel-item>
                <v-img
                  aspect-ratio="1"
                  lazy-src="/images/galeri/33.jpg"
                  src="/images/galeri/33.jpg"
                ></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img
                  aspect-ratio="1"
                  lazy-src="/images/galeri/27.jpg"
                  src="/images/galeri/27.jpg"
                ></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img
                  aspect-ratio="1"
                  lazy-src="/images/galeri/34.jpg"
                  src="/images/galeri/34.jpg"
                ></v-img>
              </v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col cols="12" md="7">
            <div class="d-flex flex-column justify-center align-center">
              <div
                class="title-row mb-5 font-weight-bold  font-poppins text-sm-h4 text-h5"
              >
                Guru
              </div>

              <div class="text-h6 font-weight-regular">
                <ol type="1">
                  <li>Juara Musabaqah Tafsir B. Indonesia tingkat Kabupaten</li>
                  <li>Juara Paduan Suara</li>
                </ol>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row align="center" class="flex-row-reverse py-10" justify="center">
          <v-col cols="12" sm="8" md="5">
            <v-carousel
              cycle
              height="auto"
              class="rounded-lg overflow-hidden"
              interval="6000"
              :show-arrows="false"
              hide-delimiters
            >
              <v-carousel-item>
                <v-img
                  aspect-ratio="1"
                  lazy-src="/images/galeri/25.jpg"
                  src="/images/galeri/25.jpg"
                ></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img
                  aspect-ratio="1"
                  lazy-src="/images/galeri/1.jpg"
                  src="/images/galeri/1.jpg"
                ></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img
                  aspect-ratio="1"
                  lazy-src="/images/galeri/40.jpg"
                  src="/images/galeri/40.jpg"
                ></v-img>
              </v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col cols="12" md="7">
            <div class="d-flex flex-column justify-center align-center">
              <div
                class="title-row mb-5 font-weight-bold  font-poppins text-sm-h4 text-h5"
              >
                Siswa
              </div>

              <div class="text-h6 font-weight-regular">
                <ol type="1">
                  <li>Juara 1 Tahfidzul Qur’an tingkat Kabupaten</li>
                  <li>Juara 3 Tilawah Al Qur’an tingkat kabupaten</li>
                  <li>Juara 1 dan 3 Tahfidzul Qur’an tingkat Kec. Krian</li>
                </ol>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>
<script>
import HeroContent from "@/components/HeroContent.vue";
export default {
  data() {
    return {
      titlePage: "Home",
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
      programPendidikan: [
        {
          isActive: false,
          image: "/images/program-pendidikan/matrikulasi.png",
          title: "Program Matrikulasi",
          text:
            "Program ini mengenalkan program belajar siswa, pembekalan budaya belajar secara kreatif dan mandiri, sosialisasi nilai-nilai akhlaq al karimah bagi siswa-siswi MI. Ahmad Yani",
        },
        {
          isActive: false,
          image: "/images/program-pendidikan/pendidikan-islam.png",
          title: "Program Pendidikan Islam",
          text:
            "Program ini menumbuhkembangkan keislaman siswa, dipadu dalam pelajaran aqidah akhlaq, fiqih, alqur’an hadits dan bahasa arab yang diarahkan menuju tumbuh dan berkembangnya pribadi muslim siswa MI. Ahmad Yani yang sejak awal dilandasi dan memahami keislaman yang kaffah",
        },
        {
          isActive: false,
          image: "/images/program-pendidikan/tahsin1.png",
          title: "Program Tahsin Al-Qur'an",
          text:
            "Belajar Al-Qur’an dididik oleh ustadz/ustadzah yang telah memiliki syahadah at-Tartil yang berjumlah 9, dengan harapan siswa MI Ahmad Yani yang dapat membaca al Qur’an dengan baik dan benar sesuai makharijul huruf dan kaidah ilmu tajwid",
        },
        {
          isActive: false,
          image: "/images/program-pendidikan/tahfidz.png",
          title: "Program Tahfidz Al-Qur’an ",
          text:
            "Program ini dilaksanakan untuk mencetak para penghafal Al-Qur’an yang hamilul qur’an yakni menjaga hafalan alQur’an secara lafadz, makna dan pengamalan, program ini dinamakan EsTaQu (Ekstra Tahfidzul Qur’an)",
        },
        {
          isActive: false,
          image: "/images/program-pendidikan/kecakapan-hidup.png",
          title: "Program Kecakapan Hidup",
          text:
            "Program ini bertujuan membentuk perilaku siswa MI. Ahmad Yani agar menjadi pribadi mandiri, cakap mengatasi problem, mampu mengembangkan bakat kreatifitasnya",
        },
        {
          isActive: false,
          image: "/images/program-pendidikan/ibadah-akhlak.png",
          title: "Program Pembinaan Ibadah dan Akhlak",
          text:
            "Kesadaran Ibadah Wajib, Sholat Berjamaah, Kesadaran Ibadah Sunnah (Dhuha, Tahajud, Puasa Senin Kamis), Tadarus Al Quran, Infaq, Budaya 5 S (Senyum, Salam, Sapa, Sopan dan Santun), Student Welcomes, Jum’at Berkah, Semarak Hari Besar Islam dan Tafaquhfiddin",
        },
        {
          isActive: false,
          image: "/images/program-pendidikan/wisata-edukasi.png",
          title: "Program Wisata Edukasi ",
          text:
            "Program ini sejak awal dilaksanakan MI. Ahmad Yani bertujuan menanamkan kemandirian dan pengetahuan siswa dengan pembelajaran di luar ruangan",
        },
      ],
    };
  },
  components: {
    HeroContent,
  },

  created() {
    this.$store.dispatch("setTitlePage");

    const dataSlider = [
      {
        title: "Tanggap Covid",
        subtitle:
          "Tanggap Covid Protokol Kesehatan bersama LAZIZNU Kec. Wonoayu",
        img: "/images/slider-4.jpg",
      },
      {
        title: "Lomba Gelar Produk",
        subtitle: "Dokumentasi pemenang lomba Gelar Produk",
        img: "/images/galeri/36.jpg",
      },
      {
        title: "Literasi",
        subtitle: "Literasi bersama PPM. Al Amanah Juwaangi Sidoarjo",
        img: "/images/galeri/gambar-5.jpg",
      },
    ];

    this.artikelTerbaru = this.cutString(
      this.$store.getters.dataArtikel,
      "title",
      100
    );
    // this.beritaTerbaru = this.cutString(
    //   this.$store.getters.dataBerita,
    //   "title",
    //   100
    // );

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
</style>
