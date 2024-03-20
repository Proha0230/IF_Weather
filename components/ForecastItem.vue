<template>
<div class="main_item">
  <div class="main_item__weather">
    <p class="main_item__weather--day">{{ dateForecast(forecastValue.date)}}</p>
    <p>{{ truncateString(forecastValue.day.condition.text, 22)}}</p>
  </div>
  <div class="main_item__temperature">
    <p> {{forecastValue.day.maxtemp_c}} <IconCelsiusMini></IconCelsiusMini></p>
    <p class="main_item__temperature--split"> / </p>
    <p> {{forecastValue.day.mintemp_c}} <IconCelsiusMini></IconCelsiusMini></p>
  </div>

</div>
</template>

<script setup lang="ts">
import type {forecast5Day} from "~/composables/types"

const props = defineProps({
  forecast3Day: {
    type: Object as forecast5Day,
    default: false,
  }
})

function dateForecast (str:string) {
  return str.slice(5).replace('-', '.')
}

function truncateString(str:string, maxLength:number) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength - 3) + '...'
  } else {
    return str
  }
}


const forecastValue: forecast5Day = props.forecast3Day

</script>

<style scoped lang="scss">
@import "assets/scss/partials/mixins";

.main_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;

  &__weather {
    display: flex;
    align-items: center;

    & p {
      margin: 0;
      font-size: 15px;
      @include textColorAndShadow;
    }

    &--day {
      margin: 0 10px 0 !important;
    }
  }

  &__temperature {
    display: flex;
    align-items: center;
    & p {
      margin: 0;
      font-size: 15px;
      @include textColorAndShadow;
    }

    &--split {
      margin-right: 8px !important;
    }
  }
}

</style>