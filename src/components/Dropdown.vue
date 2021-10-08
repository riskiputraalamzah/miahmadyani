<template>
  <div>
    <v-menu
      open-on-hover
      offset-y
      transition="slide-y-transition"
      v-if="$vuetify.breakpoint.width > 599"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-list-item-title
          v-bind="attrs"
          v-on="on"
          height="100%"
          :class="[
            'text-center d-flex justify-sm-center justify-start align-center pt-3 pb-sm-0',
            parentKey != countMenu ? 'pb-3' : 'pb-0',
          ]"
          v-text="text"
        ></v-list-item-title>
      </template>
      <v-list nav dense>
        <v-list-item-group v-model="activeMenu" color="success">
          <v-list-item
            class="list-dropdown"
            v-for="(menu, i) in menus"
            :key="i"
            @click="selected"
            :to="menu.path"
            exact
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

    <v-hover open-delay="500" v-slot="{ hover }" v-else>
      <v-list-group :value="hover" class="px-sm-0 px-4">
        <template v-slot:activator>
          <v-list-item-title
            :class="[
              'text-center d-flex justify-sm-center justify-start align-center pt-3 pb-sm-0 pb-3',
            ]"
            v-text="text"
          ></v-list-item-title>
        </template>

        <v-list dense nav class="px-0" color="transparent">
          <v-list-item-group no-action sub-group v-model="activeMenu">
            <v-list-item
              class="list-dropdown white--text"
              v-for="(menu, i) in menus"
              :key="i"
              active-class="success font-weight-bold"
              :to="menu.path"
              exact
              @click="selected"
            >
              <v-list-item-content>
                <v-list-item-title
                  class="justify-start "
                  v-text="menu.text"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-list-group>
    </v-hover>
  </div>
</template>
<script>
export default {
  name: "Dropdown",
  props: ["text", "menus", "parentKey", "countMenu"],
  data() {
    return {
      show: false,
      activeMenu: null,
    };
  },

  methods: {
    selected() {
      this.$store.dispatch("setActiveMenu", this.parentKey);
    },
  },
};
</script>
