<template>
  <q-page class="q-pt-xl">
    <div class="main flex flex-center q-pt-xl q-pb-xl" style="">
      <q-img src="~assets/images/main-image.png" style="width: 70%"></q-img>
    </div>
    <div class="main q-mt-xl q-pa-xl">
      <div class="text-h4">O que é este projeto:</div>
      <q-card class="q-pa-lg q-mt-lg">
        <p class="text-h5 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          hendrerit euismod odio, sit amet sodales massa suscipit elementum.
          Duis laoreet blandit lacus vulputate fermentum. Vestibulum augue nunc,
          eleifend in hendrerit eget, efficitur et dui. Vivamus id ligula
          commodo, tempor purus nec, dictum arcu. Aliquam nec eros vitae lacus
          efficitur convallis et ac sapien. Suspendisse gravida sem ac tellus
          dapibus, non tincidunt urna mollis. Fusce suscipit semper scelerisque.
          Duis quis sapien tincidunt, rhoncus felis id, venenatis tortor. In
          lorem orci, eleifend at finibus at, pharetra a quam. Aenean non
          facilisis ligula, eu pharetra ipsum.
        </p>
      </q-card>
      <div class="text-h4 q-mt-xl">Sobre as autoras:</div>
      <div class="row q-col-gutter-x-sm q-mt-lg">
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-card class="my-card">
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>Caroline Schuabb</q-item-label>
                <q-item-label caption>Professora Orientadora</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator></q-separator>
            <div class="q-pa-md">Lorem</div>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-card class="my-card">
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>Fabiana Apenas</q-item-label>
                <q-item-label caption>Professora Co-orientadora</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator></q-separator>
            <div class="q-pa-md">Lorem</div>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-card class="my-card">
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>Letícia Lima</q-item-label>
                <q-item-label caption>Aluna Orientada</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator></q-separator>
            <div class="q-pa-md">Lorem</div>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-card class="my-card">
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>Maria Júlia Gonçalves</q-item-label>
                <q-item-label caption>Aluna Orientada</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator></q-separator>
            <div class="q-pa-md">Lorem</div>
          </q-card>
        </div>
      </div>
      <div class="row q-mt-xl">
        <div class="text-h4">
          Agora que você entendeu como funciona, escolha uma opção:
        </div>
      </div>
      <div class="row justify-center q-mt-lg">
        <q-card
          class="q-pa-lg pointer"
          style="width: 500px"
          @click="$router.push('histologia-dos-sistemas')"
        >
          <div class="text-h5 text-center">Histologia de Sistemas</div>
        </q-card>
      </div>
      <div class="row justify-center q-mt-lg">
        <q-card class="q-pa-lg pointer" style="width: 500px"
          ><div class="text-h5 text-center">
            Simulado / prova prática
          </div></q-card
        >
      </div>
      <div class="row justify-center q-mt-lg">
        <q-card class="q-pa-lg pointer" style="width: 500px">
          <div class="text-h5 text-center">Avaliação do site</div>
        </q-card>
      </div>
      <div class="row q-mt-xl">Meus dados</div>
      <div class="row q-mt-xl">
        <q-card class="q-pa-lg">
          <p class="text-h5 text-justify">
            Referencias: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Vestibulum hendrerit euismod odio, sit amet sodales massa
            suscipit elementum. Duis laoreet blandit lacus vulputate fermentum.
            Vestibulum augue nunc, eleifend in hendrerit eget, efficitur et dui.
            Vivamus id ligula commodo, tempor purus nec, dictum arcu. Aliquam
            nec eros vitae lacus efficitur convallis et ac sapien. Suspendisse
            gravida sem ac tellus dapibus, non tincidunt urna mollis. Fusce
            suscipit semper scelerisque. Duis quis sapien tincidunt, rhoncus
            felis id, venenatis tortor. In lorem orci, eleifend at finibus at,
            pharetra a quam. Aenean non facilisis ligula, eu pharetra ipsum.
          </p>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
