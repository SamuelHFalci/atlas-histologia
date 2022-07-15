<template>
  <q-page>
    <q-card class="q-pa-lg">
      <div class="text-h5">
        <div class="text-left">
          <span @click="$router.push('/')" class="pointer">
            Atlas de Histologia
          </span>
          <q-icon name="arrow_right_alt"></q-icon>
          <span
            @click="$router.push('/histologia-dos-sistemas')"
            class="pointer"
          >
            Histologia de Sistemas
          </span>
          <q-icon name="arrow_right_alt"></q-icon>
          <span
            @click="$router.push('/histologia-dos-sistemas/coracao')"
            class="pointer"
          >
            Coração
          </span>
        </div>
      </div>
    </q-card>
    <div class="main q-pa-lg q-mt-xs">
      <div class="text-h4">Estudando o Coração:</div>
      <div class="size1 text-justify q-mt-md">
        O coração é um órgão responsável por bombear de maneira rítmica e
        involuntária o sangue para outros tecidos do corpo. Por se tratar de
        movimentos contráteis, a composição do coração é principalmente de
        músculo estriado cardíaco. Dividido em três camadas, endocárdio,
        miocárdio e pericárdio, da mais interna para a mais externa, o coração
        também possui um esqueleto fibroso de tecido conjuntivo denso para
        sustentação das fibras. O endocárdio é composto internamente por
        endotélio, formado de tecido epitelial pavimentoso simples, e mais
        externamente a camada subendotelial composta de tecido conjuntivo
        frouxo. O miocárdio é a camada mais espessa do coração, sendo esta
        estruturada por fibras de músculo esquelético cardíaco com diferentes
        direções na disposição. Por fim, o pericárdio, formado por epitélio
        pavimentoso simples, possui dois folhetos, o folheto visceral,
        denominado epicárdio, e o folheto parietal.
      </div>
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
      height="600px"
    >
      <q-carousel-slide :name="0" :key="0" class="column no-wrap flex-center">
        <q-img
          src="~/assets/images/sistema-circulatorio/coracao/1.png"
          style="width: 300px"
        ></q-img>
        <div class="q-mt-md text-center">Objetiva 4x</div>
      </q-carousel-slide>
      <q-carousel-slide :name="1" :key="1" class="column no-wrap flex-center">
        <q-img
          src="~/assets/images/sistema-circulatorio/coracao/2.png"
          style="width: 300px"
        ></q-img>
        <div class="q-mt-md">
          <div class="row full-width justify-center text-center">
            2) Miocárdio => Músculo estriado cardíaco
          </div>
          <div class="row full-width justify-center text-center">
            3) Epicárdio (folheto visceral do pericárdio seroso)
          </div>
          <div class="row full-width justify-center text-center">
            Objetiva de 10x
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" :key="2" class="column no-wrap flex-center">
        <q-img
          src="~/assets/images/sistema-circulatorio/coracao/3.png"
          style="width: 300px"
        ></q-img>
        <div class="q-mt-md">
          <div class="row full-width justify-center text-center">
            Endocárdio
          </div>
          <div class="row full-width justify-center text-center">
            a)Endotélio => Tecido epitelial pavimentoso simples
          </div>
          <div class="row full-width justify-center text-center">
            b)Camada subendocardial => Tecido conjuntivo propriamente dito
          </div>
          <div class="row full-width justify-center text-center">
            2)Miocárdio => Músculo estriado cardíaco
          </div>
          <div class="row full-width justify-center text-center">
            Objetiva de 40x
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" :key="3" class="column no-wrap flex-center">
        <q-img
          src="~/assets/images/sistema-circulatorio/coracao/4.png"
          style="width: 300px"
        ></q-img>
        <div class="q-mt-md">
          <div class="row full-width justify-center text-center">
            2)Miocárdio => Músculo estriado cardíaco
          </div>
          <div class="row full-width justify-center text-center">
            3)Epicárdio (folheto visceral do pericárdio seroso)
          </div>
          <div class="row full-width justify-center text-center">
            Objetiva de 40x
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" :key="4" class="column no-wrap flex-center">
        <q-img
          src="~/assets/images/sistema-circulatorio/coracao/5.png"
          style="width: 300px"
        ></q-img>
        <div class="q-mt-md">
          <div class="row full-width justify-center text-center">
            2)Miocárdio => Músculo estriado cardíaco
          </div>
          <div class="row full-width justify-center text-center">
            3)Epicárdio (folheto visceral do pericárdio seroso)
          </div>
          <div class="row full-width justify-center text-center">
            c)Mesotélio => Tecido epitelial pavimentoso simples
          </div>
          <div class="row full-width justify-center text-center">
            d)Camada subepicardial
          </div>
          <div class="row full-width justify-center text-center">
            Objetiva de 100x
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Slide",

  data() {
    return {
      slide: 0,
    };
  },
});
</script>
