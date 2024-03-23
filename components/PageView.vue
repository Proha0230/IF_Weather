<template>
  <Temperature :item="allValueForCity"></Temperature>
  <ForecastList :forecast5Day="allValueForCity.forecast5Day"></ForecastList>
</template>

<script setup lang="ts">
import type {cityValue} from "~/composables/types"

const props = defineProps(['allValueForCity'])
const allValueForCity: cityValue = props.allValueForCity

</script>


<style scoped lang="scss">

</style>