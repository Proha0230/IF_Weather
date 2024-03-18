<template>
  <div class="header_main">
    <div class="header_main__block">
      <NuxtLink to="/search-city" @click="goToSearch" v-if="!routeSearch.goToSearch && !routeSearch.goToAbout && !routeSearch.goToForecast5Day"><IconPlus></IconPlus></NuxtLink>
      <NuxtLink to="/" @click="goToHomePage" v-if="routeSearch.goToSearch || routeSearch.goToAbout || routeSearch.goToForecast5Day"><IconBack></IconBack></NuxtLink>
      <NuxtLink to="/about" @click="goToAbout" v-if="!routeSearch.goToAbout"><IconAbout></IconAbout></NuxtLink>
    </div>
  </div>

</template>

<script setup lang="ts">
import {useRouteSearch} from "~/composables/states";

const routeSearch = useRouteSearch();

const goToHomePage = () => {
  routeSearch.value.goToSearch = false
  routeSearch.value.goToAbout = false
  routeSearch.value.goToForecast5Day = false
}
const goToSearch = () => {
  routeSearch.value.goToSearch = true
}
const goToAbout = () => {
  routeSearch.value.goToAbout = true
}

</script>

<style scoped lang="scss">
@import "assets/scss/partials/mixins";

.header_main {
  display: flex;
  justify-content: center;

  &__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    width: 100vw;
    max-width: 700px;
  }
}

</style>