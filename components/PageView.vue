<template>
  <Temperature :item="allValueForCity"></Temperature>
  <ForecastList :forecast3Day="allValueForCity.forecast5Day"></ForecastList>
</template>

<script setup lang="ts">
import type {cityValue} from "~/composables/types"

const props = defineProps({
  allValueForCity: {
    type: Object as unknown as cityValue,
    default: false,
  }
})

const allValueForCity: cityValue = props.allValueForCity

</script>


<style scoped lang="scss">

</style>