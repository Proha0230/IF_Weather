<template>
  <div class="main_search">
    <div class="main_search__block">
    <div class="main_search__block--input_block">
    <div class="input_block__child">
      <IconGeolocation></IconGeolocation>
      <input />
      <button>Поиск</button>
    </div>
    </div>
    <div class="main_search__city_search_item">
      <SearchCity></SearchCity>
    </div>
    <div class="main_search__city_user_list">
      <SearchCity></SearchCity>
    </div>
    </div>
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "assets/scss/partials/params";
@import "assets/scss/partials/mixins";

.main_search {
  @include allPageMainStyle;


  &__block {
    @include allPageBlockStyle;


  &--input_block {
    display: flex;
    justify-content: center;

    & .input_block__child {

      margin-top: 20px;
      background-color: $forecast-bg;
      display: flex;
      justify-content: space-around;
      width: 80vw;
      max-width: 500px;
      height: 50px;
      border-radius: 10px;
      align-items: center;
      padding: 5px;

      & button {
        cursor: pointer;
        border-radius: 15px;
        height: 25px;
        width: 60px;
        box-shadow: 0 0 5px blue;
        border-color: transparent;
        background-color: rgba(255, 255, 255, 0.8);
      }

      & input {
        width: 50vw;
        max-width: 350px;
        height: 30px;
        border-radius: 5px;
        border-color: $forecast-bg;
      }
    }

  }
  }

  &__city_user_list {
    display: flex;
    justify-content: center;
  }

  &__city_search_item {
    display: flex;
    justify-content: center;
  }
}

</style>