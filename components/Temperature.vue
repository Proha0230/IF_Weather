<template>
<div class="main_temp">
  <div class="main_temp__city">
    <h3>Moscow</h3>
  </div>
  <div class="main_temp__value">
    <h1>4</h1>
    <IconCelsius></IconCelsius>
  </div>
  <p>Облачно</p>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "assets/scss/partials/mixins";

.main_temp {

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