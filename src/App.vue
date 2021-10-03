<template>
  <v-app>
    <v-btn
      @click="$vuetify.goTo(0, 0)"
      :class="[
        'btn-to-top green darken-4 white--text',
        offsetTop > 100 ? 'show' : '',
      ]"
      icon
      x-large
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
    <Navbar />

    <v-main>
      <v-fade-transition>
        <router-view></router-view>
      </v-fade-transition>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",

  data: () => ({
    offsetTop: 0,
    showMenu: false,
    selectedItem: 0,
  }),

  components: {
    Navbar,
    Footer,
  },
  mounted() {
    this.onScroll();
  },
  methods: {
    onScroll() {
      window.onscroll = () => {
        this.offsetTop = window.pageYOffset;
      };
    },
  },
};
</script>
<style scoped>
.btn-to-top {
  position: fixed;
  bottom: -5rem;

  transform: scale(0.5);
  right: 1rem;
  z-index: 99999;
  transition: 0.5s;
}
.btn-to-top.show {
  bottom: 1rem;

  transform: scale(1.1);
}
</style>
