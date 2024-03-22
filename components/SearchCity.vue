<template>
  <div class="search_city">
    <div class="search_city__name">
      <IconCity></IconCity>
      <p>{{ usersCity.city }}</p>
    </div>
    <div class="search_city__temperature">
      <p> {{usersCity.temperature}} <IconCelsiusMini></IconCelsiusMini></p>
      <component :is="usersCity.subscribe ? subscribeTrue : subscribeFalse" @click="usersCity.subscribe ? DeleteCity() : AddCity()"></component>
    </div>
  </div>

</template>

<script setup lang="ts">
import type {cityValue} from "~/composables/types"
import {useValueForCity} from "~/composables/states";

const props = defineProps({
  usersCity: {
    type: Object as unknown as cityValue,
    default: false
  }
})

const usersCity: cityValue = props.usersCity
const subscribeTrue = resolveComponent('IconFavoriteDelete');
const subscribeFalse = resolveComponent('IconAddFavorite');
const state = useValueForCity();

function DeleteCity() {
  state.value.userCityFetchValue.locations = state.value.userCityFetchValue.locations.filter(item => item.q !== usersCity.city)
  state.value.userCityValue = state.value.userCityValue.filter(item => item.city !== usersCity.city)
  useFetch('https://if-weather-default-rtdb.firebaseio.com/City.json', {
    method: "PATCH",
    body: state.value.userCityFetchValue
  })
}

function AddCity() {
  console.log('Add')
  state.value.userCityFetchValue.locations.push({q: usersCity.city})
  props.usersCity.subscribe = true
  state.value.userCityValue.push(props.usersCity)
  state.value.userCitySearchValue = {}
  useFetch('https://if-weather-default-rtdb.firebaseio.com/City.json', {
    method: "PATCH",
    body: state.value.userCityFetchValue
  })
}

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