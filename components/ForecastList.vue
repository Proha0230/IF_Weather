<template>
  <div class="main_forecast">

    <div class="main_forecast__list">
      <div v-for="item in forecastValue">
        <ForecastItem :forecast3Day="item"></ForecastItem>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import type {forecast5Day} from "~/composables/types"

const props = defineProps({
  forecast5Day: {
    type: Array<forecast5Day>,
    default: []
  }
})
const forecastValue: Array<forecast5Day> = props.forecast5Day



</script>

<style scoped lang="scss">
@import "assets/scss/partials/params";

  .main_forecast {
    margin-top: 120px;
    align-items: center;
    display: flex;
    justify-content: center;
    padding-bottom: 20px;

    &__list {
      display: flex;
      flex-flow: column;
      width: 90vw;
      max-width: 600px;
      height: 330px;
      padding: 5px;
      border-radius: 20px;
      background-color: $forecast-bg;
      box-shadow: 0 0 5px $forecast-bg;
    }
  }
</style>