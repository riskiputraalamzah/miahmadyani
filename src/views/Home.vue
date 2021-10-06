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
          <v-carousel-item v-for="(slide, i) in sliders" :key="i">
            <v-img
              gradient="to top right, rgba(0,0,0,0.7),rgba(0,0,0,0.4),transparent"
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
            <v-img class="rounded-lg" src="/images/slider-4.jpg">
              <template v-slot:placeholder>
                <v-skeleton-loader type="image"></v-skeleton-loader>
              </template>
            </v-img>
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

    <section class="my-section program-pendidikan py-10">
      <v-container>
        <div
          class="text-md-h3 mb-15  text-sm-h4 text-h5 font-weight-bold text-center"
        >
          <span class="font-poppins rule-headline">
            Program Pendidikan
          </span>
        </div>
        <div class="text-center  text-sm-h6 text-headline">
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
           
              <v-img class="rounded-lg " contain :lazy-src="program.image" :src="program.image">
                </v-img>
            
          </v-col>
          <v-col cols="12" sm="6" md="8" class="text-center">
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
                  class="title-row mb-5 font-weight-bold font-poppins text-sm-h4 text-h5"
                >
                  {{ program.title }}
                </div>

                <div class="text-sm-h6 text-headline">
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
    <!-- <section class="my-section py-10 ">
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
    </section> -->
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

    this.artikelTerbaru = this.cutString(
      this.$store.getters.dataArtikel,
      "title",
      100
    );
    this.beritaTerbaru = this.cutString(
      this.$store.getters.dataBerita,
      "title",
      100
    );

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
