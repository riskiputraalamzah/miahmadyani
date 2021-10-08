import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

const vp = new VuexPersist({
  storage: window.localStorage,
  key: "my-app",
});

const store = new Vuex.Store({
  strict: true,

  state: {
    activeMenu: null,
    titlePage: "MI. AHMAD YANI",
    titleOri: "MI. AHMAD YANI",
    dataArtikel: [
      {
        image:
          "https://ilfiwomen.org/wp-content/uploads/2020/10/artikel-pendidikan.jpg",
        category: ["pendidikan"],
        title: "Pendidikan Karakter Untuk Membangun Peradaban Bangsa",
        time: "20/08/2021 21.45",
        author: "admin",
        views: 153,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPJKKHFypNTfzQXE-dTFDMNEPxf9Ipwt21NQ&usqp=CAU",
        category: ["religi"],
        title: "Bulan Ramadhan yang Penuh Berkah",
        time: "18/08/2021 19.25",
        author: "Yusuf S.pd",
        views: 200,
      },
    ],
    // dataBerita: [
    //   {
    //     image: "/images/galeri/2.jpg",
    //     category: ["kunjungan"],
    //     title: "Pembinaan Orientasi Kesehatan oleh Puskesmas",
    //     time: "Hari ini 09.00",
    //     author: "admin",
    //     views: 1500,
    //   },
    //   {
    //     image: "/images/galeri/15.jpg",
    //     category: ["festival"],
    //     title: "HSN beserta Banom di Kabupaten Sidoarjo ",
    //     time: "2 hari yang lalu 09.00",
    //     author: "admin",
    //     views: 1163,
    //   },
    //   {
    //     image: "/images/galeri/1.jpg",
    //     category: ["kejuaraan"],
    //     title: "JUARA TAHFIDZIL QUR’AN JUZ 30 LOMBA TINGKAT KABUPATEN DI CANDI",
    //     time: "1 minggu yang lalu",
    //     author: "admin",
    //     views: 563,
    //   },
    //   {
    //     image: "/images/galeri/40.jpg",
    //     category: ["kejuaraan"],
    //     title: "Lomba Pidato",
    //     time: "1 bulan yang lalu",
    //     author: "admin",
    //     views: 754,
    //   },
    // ],
    albums: [
      {
        img: "/images/galeri/1.jpg",
        text: "JUARA TAHFIDZIL QUR’AN JUZ 30 LOMBA TINGKAT KABUPATEN DI CANDI",
      },

      {
        img: "/images/galeri/gambar-2.jpg",
        text: "PEMBINAAN ORIENTASI KESEHATAN OLEH PUSKESMAS",
      },
      {
        img: "/images/galeri/gambar-1.jpg",
        text: "PEMBINAAN ORIENTASI KESEHATAN OLEH PUSKESMAS",
      },
      {
        img: "/images/galeri/gambar-3.jpg",
        text: "LOMBA KANTIN SEHAT KABUPATEN SIDOARJO",
      },
      {
        img: "/images/galeri/gambar-4.jpg",
        text: "LOMBA KANTIN SEHAT KABUPATEN SIDOARJO",
      },
      {
        img: "/images/galeri/2.jpg",
        text: "LOMBA KANTIN SEHAT KABUPATEN SIDOARJO",
      },
      {
        img: "/images/galeri/gambar-5.jpg",
        text: "LITERASI BERSAMA PPM. AL AMANAH JUNWAANGI SIDOARJO",
      },
      {
        img: "/images/galeri/3.jpg",
        text: "LITERASI BERSAMA PPM. AL AMANAH JUNWAANGI SIDOARJO",
      },
      {
        img: "/images/galeri/4.jpg",
        text: "LITERASI BERSAMA PPM. AL AMANAH JUNWAANGI SIDOARJO",
      },
      {
        img: "/images/galeri/5.jpg",
        text: "TANGGAP COVID PROTOKOL KESEHATAN BERSAMA LAZIZNU KEC. WONOAYU",
      },
      {
        img: "/images/galeri/6.jpg",
        text: "RIHLAH MUHIBBAH DI UNISMA MALANGt",
      },
      {
        img: "/images/galeri/7.jpg",
        text: "RIHLAH MUHIBBAH DI UNISMA MALANG",
      },
      {
        img: "/images/galeri/8.jpg",
        text: "PEMBELAJARAN BERBASIS PROJECT",
      },
      {
        img: "/images/galeri/9.jpg",
        text: "PELATIHAN SOSIALISASI CBT ONLINE DI SAIGON PASURUAN",
      },
      {
        img: "/images/galeri/10.jpg",
        text: "PELATIHAN DESIMINASI DI TRAWAS",
      },
      {
        img: "/images/galeri/11.jpg",
        text: "STUDY TOUR DAN ZIARAH",
      },
      {
        img: "/images/galeri/12.jpg",
        text: "RAPAT DEWAN GURU PERISAPAN WISUDA DRIVE THRU",
      },
      {
        img: "/images/galeri/13.jpg",
        text: "UPACARA OLEH FORPIMKA WONOAYU",
      },
      {
        img: "/images/galeri/14.jpg",
        text: "BIAS (BULAN IMUNISASI ANAK SEKOLAH) OLEH PUSKESMAS WONOAYU",
      },
      {
        img: "/images/galeri/15.jpg",
        text: "HSN BESERTA BANOM DI KABUPATEN SIDOARJO",
      },
      {
        img: "/images/galeri/16.jpg",
        text: "SAMROH",
      },
      {
        img: "/images/galeri/17.jpg",
        text: "KBM TAHFIDZ DILUAR MADRASAH",
      },
      {
        img: "/images/galeri/18.jpg",
        text: "MAULID NABI",
      },
      {
        img: "/images/galeri/19.jpg",
        text: "BAKTI SOSIAL DI MAKAM/PESAREAN",
      },
      {
        img: "/images/galeri/20.jpg",
        text: "HAFLAH AKHIR SANAH DAN WISUDA TAHFIDZ",
      },
      {
        img: "/images/galeri/21.jpg",
        text: "BELA DIRI/PAGAR NUSA",
      },
      {
        img: "/images/galeri/22.jpg",
        text: "SHOLAT BERJAMA’AH",
      },
      {
        img: "/images/galeri/23.jpg",
        text: "MANASIK HAJI DAN MAKAN BERSAMA",
      },
      {
        img: "/images/galeri/24.jpg",
        text: "RAPAT PEMBELAJARAN MASA PANDEMI",
      },
      {
        img: "/images/galeri/25.jpg",
        text: "JUARA 3 MTQ PEMKAB",
      },
      {
        img: "/images/galeri/26.jpg",
        text: "PENERIMAAN ZAKAT FITRAH",
      },
      {
        img: "/images/galeri/27.jpg",
        text: "PELATIHAN PEMBELAJARAN DARING OLEH STKIP SIDOARJO",
      },
      {
        img: "/images/galeri/28.jpg",
        text: "PONDOK RAMADLAN ",
      },
      {
        img: "/images/galeri/29.jpg",
        text: "LOMBA VIRTUAL PHBN DAN PHBI",
      },
      {
        img: "/images/galeri/30.jpg",
        text: "TAHSINUL QUR’AN",
      },
      {
        img: "/images/galeri/31.jpg",
        text:
          "LOMBA VIRTUAL DALAM RANGKA TAHUN BARU ISLAM 1443 H dan HUT RI 76 TAHUN",
      },
      {
        img: "/images/galeri/32.jpg",
        text:
          "LOMBA VIRTUAL DALAM RANGKA TAHUN BARU ISLAM 1443 H dan HUT RI 76 TAHUN",
      },
      {
        img: "/images/galeri/33.jpg",
        text: "LOMBA GELAR PRODUK  KELAS 6 2021",
      },
      {
        img: "/images/galeri/34.jpg",
        text: "LOMBA GELAR PRODUK  KELAS 6 2021",
      },
      {
        img: "/images/galeri/35.jpg",
        text: "PEMENANG LOMBA GELAR PR0DUK",
      },
      {
        img: "/images/galeri/36.jpg",
        text: "PEMENANG LOMBA GELAR PR0DUK",
      },
      {
        img: "/images/galeri/37.jpg",
        text: "PEMENANG LOMBA GELAR PR0DUK",
      },
      {
        img: "/images/galeri/38.jpg",
        text: "PEMENANG LOMBA GELAR PR0DUK",
      },
      {
        img: "/images/galeri/39.jpg",
        text: "PEMENANG LOMBA GELAR PR0DUK",
      },
      {
        img: "/images/galeri/40.jpg",
        text: "PEMENANG LOMBA PIDATO KELAS 6",
      },
    ],
  },
  mutations: {
    commitTitlePage(state, payload) {
      state.titlePage = payload
        ? payload + " &mdash; " + state.titleOri
        : state.titleOri;

      document.querySelector("title").innerHTML = state.titlePage;
    },
    commitActiveMenu(state, payload) {
      state.activeMenu = payload;
    },
  },
  actions: {
    setTitlePage({ commit }, payload) {
      commit("commitTitlePage", payload);
    },
    setActiveMenu({ commit }, payload) {
      commit("commitActiveMenu", payload);
    },
  },
  getters: {
    titlePage: (state) => state.titlePage,
    dataArtikel: (state) => state.dataArtikel,
    dataBerita: (state) => state.dataBerita,
    albums: (state) => state.albums,
    activeMenu: (state) => state.activeMenu,
  },
  plugins: [vp.plugin],
});
export default store;
