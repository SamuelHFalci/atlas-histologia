<template>
  <q-page class="q-pt-xl">
    <q-card class="q-pa-lg">
      <div class="text-h5">
        <div class="text-left">
          Atlas de Histologia
          <q-icon name="arrow_right_alt"></q-icon> Histologia de Sistemas
        </div>
      </div>
    </q-card>
    <div class="main q-mt-xl q-pa-lg">
      <div class="text-h4">Escolha qual sistema deseja estudar:</div>
      <q-list bordered class="q-mt-xl">
        <q-expansion-item
          group="somegroup"
          icon="favorite"
          label="Sistema Circulatório"
          default-opened
          header-class="text-deep-purple-11"
        >
          <q-card>
            <q-card-section> Coração </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-separator />
      </q-list>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
