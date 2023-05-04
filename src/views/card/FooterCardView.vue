<template>
  <v-row class="d-flex align-center">
    <v-col cols="12" md="3" sm="3" xs="3" class="d-flex flex-column">
      <ButtonComponent
        title="Học lại"
        prependIcon="fa-rotate-right"
        isGrayBtn
      />
      <caption1 class="text-center" style="width: 108px"> 1 phút </caption1>
    </v-col>
    <v-col cols="12" md="9" sm="9" xs="9">
      <v-row>
        <v-col
          cols="12"
          md="4"
          sm="4"
          xs="4"
          class="d-flex flex-column align-center px-1"
        >
          <EvaluationButtonComponent
            title="Dễ"
            prependIcon="easy"
            typeButton="easyType"
          />
          <caption1 class="mt-1"> 6 phút </caption1>
        </v-col>
        <v-col
          cols="12"
          md="4"
          sm="4"
          xs="4"
          class="d-flex flex-column align-center px-1"
          ><EvaluationButtonComponent
            title="Tốt"
            prependIcon="normal"
            typeButton="normalType"
          />
          <caption1 class="mt-1"> 10 phút </caption1>
        </v-col>
        <v-col
          cols="12"
          md="4"
          sm="4"
          xs="4"
          class="d-flex flex-column align-center px-1"
          ><EvaluationButtonComponent
            title="Khó"
            prependIcon="hard"
            typeButton="hardType"
          />
          <caption1 class="mt-1"> 4 ngày </caption1>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import ButtonComponent from "@/components/ui/ButtonComponent.vue";
import EvaluationButtonComponent from "@/components/ui/EvaluationButtonComponent.vue";

export default {
  components: { EvaluationButtonComponent, ButtonComponent },
};
</script>

<style lang="sass" scoped>
caption1
  margin-top: 4px
</style>
