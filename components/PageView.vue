<template>
  <Temperature :item="allValueForCity"></Temperature>
  <ForecastList :forecast3Day="allValueForCity.forecast3Day"></ForecastList>
</template>

<script setup lang="ts">

import {mergeProps} from "vue";

type forecast3Day = {
  stateSky: string,
  day: string,
  temperature: number
}

type cityValue = {
  city: string,
  mainTemperature: number,
  stateSky: string,
  forecast3Day: Array<forecast3Day>
}

const props = defineProps({
  allValueForCity: {
    type: Object as cityValue,
    default: false,
  }
})

const allValueForCity:cityValue = props.allValueForCity

</script>


<style scoped lang="scss">

</style>