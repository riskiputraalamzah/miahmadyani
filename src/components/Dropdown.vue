<template>
  <v-menu
    open-on-hover
    rounded="0"
    bottom
    offset-y
    transition="slide-y-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-list-item-title
        v-bind="attrs"
        v-on="on"
        height="100%"
        class="text-center d-flex justify-center align-center pt-3"
        v-text="text"
      ></v-list-item-title>
    </template>
    <v-list nav dense>
      <v-list-item-group v-model="activeMenu" color="success">
        <v-list-item
          class="list-dropdown"
          v-for="(menu, i) in menus"
          :key="i"
          :to="menu.path"
          exact
          @click="selected()"
        >
          <v-list-item-content>
            <v-list-item-title
              class="justify-start"
              v-text="menu.text"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>
<script>
export default {
  name: "Dropdown",
  props: ["text", "menus", "parentKey"],
  data() {
    return {
      activeMenu: null,
    };
  },
  mounted() {
    //  cek , apakah halaman saat ini sedang mengakses menu dropdown atau tidak
    // bila iya maka emit class active ke parent menu
    if (this.menus.map((e) => e.path).includes(this.$route.path)) {
      this.selected();
    }
  },
  methods: {
    selected() {
      this.$emit("activeParent", this.parentKey);
      this.$emit("closeSectionMenu");
    },
  },
};
</script>
