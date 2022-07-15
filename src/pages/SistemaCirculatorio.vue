<template>
  <slide
    :systemName="'Sistema circulatório'"
    :slidePhotos="slidePhotos"
  ></slide>
</template>

<script>
import slide from "../components/Slide.vue";
export default {
  name: "PageIndex",
  components: {
    slide,
  },
  data() {
    return {
      slidePhotos: [
        { img: "", caption: "Legenda 1" },
        { img: "", caption: "Legenda 2" },
      ],
    };
  },
};
</script>

<style></style>
