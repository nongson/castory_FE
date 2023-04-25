<template>
  <v-container fluid class="container-navbar bg-blue nav-login" pa-0 ma-0>
    <v-row class="d-flex justify-center" style="height: 60px">
      <v-col
        cols="12"
        md="8"
        pa-0
        ma-0
        class="d-flex align-center"
        style="padding: 0 !important"
      >
        <v-flex class="nav-login" style="height: 48px">
          <img src="@/assets/images/miniLogo.png" class="center" alt="" />
        </v-flex>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "NavBarComponent",
};
</script>

<style lang="sass" scoped>
.bg-blue
  background: #453FE3
  img
    height: 60px
    width: 103px
.nav-login
  max-height: 60px
  height: 100%
</style>
