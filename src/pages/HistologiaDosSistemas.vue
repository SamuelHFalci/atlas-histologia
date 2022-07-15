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
        </div>
      </div>
    </q-card>
    <div class="main q-mt-xl q-pa-lg">
      <div class="text-h4">Escolha qual sistema deseja estudar:</div>
      <q-list bordered class="q-mt-xl">
        <!-- <q-item
          clickable
          v-ripple
          to="/histologia-dos-sistemas/sistema-circulatorio"
        >
          <q-item-section avatar>
            <q-icon color="accent" name="favorite" />
          </q-item-section>

          <q-item-section>Sistema Circulatório</q-item-section>
        </q-item> -->
        <q-expansion-item
          group="somegroup"
          icon="favorite"
          label="Sistema Circulatório"
          default-opened
          header-class="text-deep-purple-11"
        >
          <q-card>
            <q-card-section
              >O sistema circulatório é composto pelo coração, vasos sanguíneos
              e vasos linfáticos. Por meio desse sistema ocorre um circuito do
              direcionamento do sangue para os tecidos e retorno ao coração,
              assim como a drenagem do líquido presente no interstício pelos
              vasos linfáticos.</q-card-section
            >
            <q-card-section>
              <q-btn
                label="Coração"
                flat
                color="deep-purple-11"
                @click="
                  $router.push(
                    '/histologia-dos-sistemas/sistema-circulatorio/coracao'
                  )
                "
              ></q-btn>
            </q-card-section>
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
