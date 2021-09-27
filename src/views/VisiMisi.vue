<template>
  <div class="page-visi-misi">
    <v-container>
      <v-breadcrumbs large light :items="items">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-container>
    <!-- <section class="py-10">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <div class="box  text-md-h3 pb-10 text-h4 font-weight-bold ">
              <span class="font-poppins rule-headline">
                Visi
              </span>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section> -->
    <section class="py-10">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="10">
            <div
              class="mb-10  text-md-h3 text-h4 font-weight-bold text-center font-italic"
            >
              <span class="font-poppins rule-headline">
                Visi
              </span>
            </div>

            <div
              class="text-center font-poppins text-md-h4 text-h5 font-weight-medium"
            >
              <q>
                TERWUJUDNYA GENERASI YANG BERPRESTASI, BERIMAN, DAN BERTAQWA
                SERTA BERAKHLAKUL KARIMAH
              </q>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="py-10">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="10">
            <div
              class="mb-10  text-md-h3 text-h4 font-weight-bold text-center font-italic"
            >
              <span class="font-poppins rule-headline">
                Misi
              </span>
            </div>

            <div class=" font-poppins text-md-h4 text-h5 font-weight-medium">
              <ol type="1" class="list-misi">
                <li>Melaksanakan pembelajaran PAKEMI</li>
                <li>
                  Menciptakan linkungan Madrasah yang bersih dan nyaman untuk
                  belajar
                </li>
                <li>Menyelenggarakan pembinaan Bidang Teknologi</li>
                <li>Menyelenggarakan pembinaan Bidang Seni dan Olahraga</li>
                <li>Menyelenggarakan pembinaan kegiatan keagamaan</li>
                <li>Menumbuhkembangkan sikap Akhlakul Karimah</li>
                <li>Membiasakan perilaku hidup sehat dan disiplin</li>
              </ol>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
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
          text: "Visi Misi",
          disabled: true,
          to: "/visi-misi",
        },
      ],
    };
  },
};
</script>

<style scoped>
.page-visi-misi ol.list-misi {
  padding-left: 2rem;
}
.page-visi-misi ol.list-misi li {
  padding: 0.5rem 12px;
}

/* .page-visi-misi .box {
  border: 2px solid green;
  display: inline-block;
  padding: 2rem;
  z-index: 2;
  position: relative;
  padding-top: 1.5rem;
  border-radius: 10px;
}
.page-visi-misi .box::before {
  content: "";
  height: 100%;
  width: 100%;
  border: 2px solid green;
  display: block;
  bottom: -50%;
  z-index: -1;
  border-radius: 10px;
  right: -50%;
  position: absolute;
} */
</style>
