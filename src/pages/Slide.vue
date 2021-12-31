<template>
  <q-page class="q-pt-xl">
    <q-card class="q-pa-lg">
      <div class="text-h5">
        <div class="text-left">
          Atlas de Histologia
          <q-icon name="arrow_right_alt"></q-icon>
          Histologia de Sistemas
          <q-icon name="arrow_right_alt"></q-icon>
          {{ systemName }}
          <q-icon name="arrow_right_alt"></q-icon>
          {{ slideName }}
        </div>
      </div>
    </q-card>

    <div class="main q-pa-lg q-mt-xs">
      <div class="text-h4">Estudando o(a) {{ slideName }}:</div>
    </div>
    <q-carousel
      v-model="slide"
      transition-prev="jump-right"
      transition-next="jump-left"
      swipeable
      animated
      control-color="deep-purple-11"
      prev-icon="arrow_left"
      next-icon="arrow_right"
      navigation-icon="radio_button_unchecked"
      navigation
      padding
      arrows
      class="shadow-1 rounded-borders main"
    >
      <q-carousel-slide
        v-for="(photo, key) in slidePhotos"
        :name="key"
        :key="key"
        class="column no-wrap flex-center"
      >
        <q-img src="~/assets/images/lamina.png" style="width: 300px"></q-img>
        <div class="q-mt-md text-center">
          {{ photo.caption }}
        </div>
      </q-carousel-slide>
    </q-carousel>

    <div class="main q-mt-sm q-pa-lg">
      <div class="text-h6">
        {{ slideDescription }}
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      slide: 0,
      slideName: null,
      systemName: "Sistema circulatório",
      slideDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo provident incidunt ducimus iusto perferendis porro earum. Totam, numquam?",
      slidePhotos: [
        { img: "", caption: "Legenda 1" },
        { img: "", caption: "Legenda 2" },
      ],
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo provident incidunt ducimus iusto perferendis porro earum. Totam, numquam?",
    };
  },
  mounted() {
    this.slideName = this.$route.params.id;
  },
});
</script>
