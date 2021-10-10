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
      <v-container v-show="$route.name != 'home'">
        <Breadcrumbs :items="breadCrumbs" />
      </v-container>
      <v-scale-transition>
        <router-view></router-view>
      </v-scale-transition>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Breadcrumbs from "@/components/Breadcrumbs.vue";
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
    Breadcrumbs,
  },
  computed: {
    breadCrumbs() {
      let pathArray = this.$route.path.split("/");
      pathArray.shift();
      const breadCrumbs = [];
      // needed to handle the intermediary entries for nested vue routes
      let breadcrumb = "";
      let lastIndexFound = 0;
      for (let i = 0; i < pathArray.length; ++i) {
        breadcrumb = `${breadcrumb}${"/"}${pathArray[i]}`;
        if (
          this.$route.matched[i] &&
          Object.hasOwnProperty.call(this.$route.matched[i], "meta") &&
          Object.hasOwnProperty.call(this.$route.matched[i].meta, "breadCrumb")
        ) {
          breadCrumbs.push({
            to:
              i !== 0 && pathArray[i - (i - lastIndexFound)]
                ? "/" + pathArray[i - (i - lastIndexFound)] + breadcrumb
                : breadcrumb,
            disabled: i + 1 === pathArray.length,
            text: this.$route.matched[i].meta.breadCrumb || pathArray[i],
          });
          lastIndexFound = i;
          breadcrumb = "";
        }
      }
      breadCrumbs.unshift({
        to: "/",
        disabled: false,
        text: "Home",
      });
      return breadCrumbs;
    },
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
