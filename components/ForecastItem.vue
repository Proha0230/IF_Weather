<template>
<div class="main_item">
  <div class="main_item__weather">
    <IconCloud></IconCloud>
    <p class="main_item__weather--day">{{ forecastValue.day}}</p>
    <p>{{ forecastValue.stateSky}}</p>
  </div>
  <div class="main_item__temperature">
    <p> {{forecastValue.temperature}} <IconCelsiusMini></IconCelsiusMini></p>
    <p class="main_item__temperature--split"> / </p>
    <p> 1 <IconCelsiusMini></IconCelsiusMini></p>
  </div>

</div>
</template>

<script setup lang="ts">
import type {forecast3Day} from "~/composables/types"

const props = defineProps({
  forecast3Day: {
    type: Object as forecast3Day,
    default: false,
  }
})

const forecastValue: forecast3Day = props.forecast3Day

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