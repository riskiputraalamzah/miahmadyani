<template>
  <v-app>
    <Navbar />

    <v-main>
      <v-fade-transition>
        <router-view></router-view>
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script>
// import Dropdown from "@/components/Dropdown.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",

  data: () => ({
    showMenu: false,
    selectedItem: 0,
  }),
  components: {
    // Dropdown,
    Navbar,
  },
};
</script>
