<template>
  <div>
    <v-container>
      <Breadcrumbs :items="items" />
    </v-container>
  </div>
</template>
<script>
import Breadcrumbs from "@/components/Breadcrumbs.vue";
export default {
  data() {
    return {
      date: "hai",
      author: "yoi",
      items: [
        {
          text: "Home",
          disabled: false,
          to: "/",
        },
        {
          text: "Galeri",
          disabled: false,
          to: "/galeri",
        },
        {
          text: "Show Gallery",
          disabled: true,
          to: "/galeri/8218783/admin",
        },
      ],
    };
  },
  created() {
    // console.log(this.$route.path.split("/").includes("galeri"));
    const { date, author } = this.$route.params;
    this.date = date;
    this.author = author;
  },
  components: {
    Breadcrumbs,
  },
};
</script>
