<template>
  <div class="main_forecast">

    <div class="main_forecast__list">
      <div v-for="item in forecastValue">
        <ForecastItem :forecast3Day="item"></ForecastItem>
      </div>
      <div class="main_forecast__list--button">
        <NuxtLink to="/forecast-5day-Moscow" @click="goToForecast5Day"> <button>Прогноз погоды на 5 дней</button> </NuxtLink>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {useRouteSearch} from "~/composables/states";
import type {forecast3Day} from "~/composables/types"

const props = defineProps({
  forecast3Day: {
    type: Array as forecast3Day,
    default: false,
  }
})

const routeSearch = useRouteSearch();
const forecastValue: Array<forecast3Day> = props.forecast3Day

const goToForecast5Day = () => {
  routeSearch.value.goToForecast5Day = true
}


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
      height: 295px;
      padding: 5px;
      border-radius: 20px;
      background-color: $forecast-bg;
      box-shadow: 0 0 5px $forecast-bg;

      &--button {
        display: flex;
        justify-content: center;

        & button {
          cursor: pointer;
          font-size: 15px;
          height: 50px;
          width: 65vw;
          max-width: 300px;
          border-radius: 30px;
          margin: 15px 0;
          box-shadow: 0 0 5px blue;
          border-color: transparent;
          background-color: rgba(255, 255, 255, 0.8);
        }
      }
    }
  }
</style>