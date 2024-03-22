<template>
  <div v-if="state.loading">
    <NuxtLayout>
    <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
  <div v-else>
    <IconLoading></IconLoading>
  </div>
</template>

<script setup lang="ts">
import {useValueForCity} from "~/composables/states";
import {useAsyncData} from "#app";

const state = useValueForCity();

</script>

<style lang="scss">
body, html {
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column;
  align-items: center;

}
</style>