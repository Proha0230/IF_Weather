<template>
  <div class="search_city">
    <div class="search_city__name">
      <IconCity></IconCity>
      <p>Moscow</p>
    </div>
    <div class="search_city__temperature">
      <p> 4 <IconCelsiusMini></IconCelsiusMini></p>
      <p class="search_city__temperature--split"> / </p>
      <p> 1 <IconCelsiusMini></IconCelsiusMini></p>
      <IconAddFavorite></IconAddFavorite>
    </div>
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "assets/scss/partials/params";
@import "assets/scss/partials/mixins";

.search_city {
  margin: 10px 0;
  display: flex;
  background-color: $forecast-bg;
  justify-content: space-between;
  width: 80vw;
  max-width: 500px;
  border-radius: 10px;
  padding: 15px;


  &__name {
    display: flex;
    align-items: center;

    & p {
      margin-left: 10px !important;
    }
  }

  &__temperature {
    display: flex;
    align-items: center;

    &--split {
      margin-right: 8px !important;
    }
  }

  & p {
    margin: 0;
    font-size: 20px;
    @include textColorAndShadow;
  }
}
</style>