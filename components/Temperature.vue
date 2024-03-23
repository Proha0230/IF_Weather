<template>
<div class="main_temp">
  <div class="main_temp__city">
    <h3>{{ cityValue.city }}</h3>
  </div>
  <div class="main_temp__value">
    <h1>{{ cityValue.temperature }}</h1>
    <IconCelsius></IconCelsius>
  </div>
  <p>{{ cityValue.stateSky.text }}</p>
</div>
</template>

<script setup lang="ts">
import type {cityValue} from "~/composables/types"

const props = defineProps(['item'])
const cityValue: cityValue = props.item

</script>

<style scoped lang="scss">
@import "assets/scss/partials/mixins";

.main_temp {
  display: flex;
  flex-flow: column;
  align-items: center;

  & p {
    font-size: 25px;
    margin: 0;
    text-align: center;
    @include textColorAndShadow;
  }

  &__value {
    display: flex;
    justify-content: center;

    & h1 {
      font-size: 110px;
      margin: 0;
      @include textColorAndShadow;
    }
  }

  &__city {
    display: flex;
    justify-content: center;

    & h3 {
      font-size: 30px;
      @include textColorAndShadow;
    }
  }
}

</style>