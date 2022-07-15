<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Slide",
  mounted() {
    console.log(this.$route);
    this.paths = this.$route.meta.breadCrumbs;
  },
  data() {
    return {
      slide: 0,
      paths: [],
    };
  },
});
</script>
