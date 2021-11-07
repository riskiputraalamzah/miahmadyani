<template>
  <v-app v-if="isAdmin">
    <Admin />
  </v-app>
  <v-app v-else>
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
    <Navbar @showModalLogin="modalLogin = $event" />

    <v-main>
      <v-container v-show="$route.name != 'home'">
        <Breadcrumbs :items="breadCrumbs" />
      </v-container>
      <v-fade-transition>
        <router-view></router-view>
      </v-fade-transition>
    </v-main>
    <Footer />

    <v-dialog max-width="400px" v-model="modalLogin" persistent>
      <v-card :loading="loading">
        <template slot="progress">
          <v-progress-linear
            color="green"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>
        <v-container class="d-flex flex-column align-center">
          <v-img
            max-width="80px"
            max-height="80px"
            src="/logo-mi.png"
            lazy-src="/logo-mi.png"
          ></v-img>
          <v-card-title class="text-h4 ">
            Login
          </v-card-title>

          <v-form style="width: 100%;">
            <v-text-field
              color="green"
              outlined
              label="Username"
            ></v-text-field>
            <v-text-field
              color="green"
              :type="showPw ? 'text' : 'password'"
              outlined
              :append-icon="showPw ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPw = !showPw"
              label="Password"
            ></v-text-field>
          </v-form>
        </v-container>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="modalLogin = false">
            Close
          </v-btn>
          <v-btn color="primary" :disabled="submit" text @click="submitLogin">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

import Admin from "@/views/admin/App.vue";
export default {
  name: "App",

  data: () => ({
    offsetTop: 0,
    showMenu: false,
    showPw: false,
    selectedItem: 0,
    submit: false,
    loading: false,
    modalLogin: false,
  }),

  components: {
    Navbar,
    Footer,
    Breadcrumbs,
    Admin,
  },
  computed: {
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
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
          let text = this.$route.matched[i].meta.breadCrumb || pathArray[i];
          text = text
            .split("-")
            .join(" ")
            .replace(/\b\w/g, function(l) {
              return l.toUpperCase();
            });

          breadCrumbs.push({
            to:
              i !== 0 && pathArray[i - (i - lastIndexFound)]
                ? "/" + pathArray[i - (i - lastIndexFound)] + breadcrumb
                : breadcrumb,
            disabled: i + 1 === pathArray.length,
            text,
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
    // this.$store.dispatch("setIsAdmin", false);
    this.isMounted();
  },
  methods: {
    onScroll() {
      window.onscroll = () => {
        this.offsetTop = window.pageYOffset;
      };
    },
    submitLogin() {
      this.submit = true;
      this.loading = true;

      setTimeout(() => {
        this.$store.dispatch("setIsAdmin", true);
        this.$router.push("/kelola-konten");
        this.loading = false;
        this.submit = false;
        this.modalLogin = false;
      }, 3000);
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
