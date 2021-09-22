<template>
  <v-menu
    style="border-top"
    open-on-hover
    rounded="0"
    bottom
    origin="center center"
    offset-y
    transition="slide-y-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-list-item-title
        v-bind="attrs"
        v-on="on"
        v-text="text"
      ></v-list-item-title>
    </template>
    <v-list nav flat dense>
      <v-list-item-group color="success">
        <v-list-item
          class="list-dropdown"
          v-for="(menu, i) in menus"
          :key="i"
          @click="$emit('emitActiveComponent', menu.views)"
        >
          <v-list-item-content>
            <v-list-item-title v-text="menu.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>
<script>
export default {
  name: "Dropdown",
  props: ["text", "menus"],
};
</script>
