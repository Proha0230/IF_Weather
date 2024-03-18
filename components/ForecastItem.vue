<template>
<div class="main_item">
  <div class="main_item__weather">
    <IconCloud></IconCloud>
    <p class="main_item__weather--day">Сегодня</p>
    <p>Облачно</p>
  </div>
  <div class="main_item__temperature">
    <p> 4 <IconCelsiusMini></IconCelsiusMini></p>
    <p class="main_item__temperature--split"> / </p>
    <p> 1 <IconCelsiusMini></IconCelsiusMini></p>
  </div>

</div>
</template>

<script setup lang="ts">

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
    margin-left: 20px;

    & p {
      margin: 0;
      font-size: 20px;
      @include textColorAndShadow;
    }

    &--day {
      margin: 0 10px 0 !important;
    }
  }

  &__temperature {
    display: flex;
    align-items: center;
    margin-right: 20px;
    & p {
      margin: 0;
      font-size: 20px;
      @include textColorAndShadow;
    }

    &--split {
      margin-right: 8px !important;
    }
  }
}

</style>