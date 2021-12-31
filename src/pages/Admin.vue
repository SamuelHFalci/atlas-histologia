<template>
  <q-page class="q-pt-xl">
    <div class="main q-mt-xl q-pa-xl">
      <div class="text-h4">Adicionar Lâmina:</div>
      <div class="row q-col-gutter-x-sm">
        <div class="col-xs-4">
          <q-input
            outlined
            label="Nome"
            v-model="slide.name"
            class="q-mt-sm"
          ></q-input>
        </div>
        <div class="col-xs-4">
          <q-input
            outlined
            label="Descrição"
            v-model="slide.description"
            class="q-mt-sm"
            type="textarea"
            autogrow
          ></q-input>
        </div>
        <div class="col-xs-4 self-center">
          <q-btn
            label="Adicionar foto"
            icon="add"
            @click="openAddPhotoModal()"
          ></q-btn>
        </div>
      </div>
    </div>
    <q-dialog v-model="addPhotoModal">
      <q-card class="q-pa-lg">
        <q-input label="Legenda" v-model="newPhoto.caption"></q-input>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      addPhotoModal: false,
      slide: {
        name: null,
        description: null,
      },
      newPhoto: {
        caption: null,
      },
    };
  },
  methods: {
    openAddPhotoModal() {
      this.newPhoto = {
        caption: null,
      };
      this.addPhotoModal = true;
    },
  },
});
</script>
