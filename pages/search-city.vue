<template>
  <div class="main_search">
    <div class="main_search__block">
    <div class="main_search__block--input_block">
    <div class="input_block__child">
      <IconGeolocation></IconGeolocation>
      <input v-model="inputSearch"/>
      <button @click="getCityValue">Поиск</button>
    </div>
    </div>
    <div class="main_search__city_search_item">
      <div v-for="(item,index) in state.userCitySearchValue" :key="index" v-if="cityForecastData.length">
        <LazySearchCity :usersCity="item"></LazySearchCity>
      </div>
    </div>
    <div class="main_search__city_user_list">
      <div v-for="(item,index) in state.userCityValue" :key="index">
        <SearchCity :usersCity="item"></SearchCity>
      </div>
    </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {useValueForCity} from "~/composables/states";
import type {cityValue} from "~/composables/types"
import type {Ref} from "vue";
import {type dataSearchCity, type forecast5Day} from "~/composables/types";


const state = useValueForCity();
const inputSearch:Ref<string> = ref('');
const dataSearchValue: Ref<dataSearchCity | null> = ref(null);
const cityForecastData: Ref<Array<cityValue>> = ref([]);
async function loadData() {
  cityForecastData.value = []
  const url = `http://api.weatherapi.com/v1/forecast.json?&key=f88bd18e1ab443c8a91121443242003&lang=ru&q=${inputSearch.value}&days=5`
  const {data, pending} = await useFetch(url, {
    method: "POST"
  })
  if(data.value !== null && data.value !== undefined) {
    dataSearchValue.value = toRaw(data.value)
  }
}
async function getCityValue() {
  await loadData();
  if(dataSearchValue.value) {
      let obj:cityValue = {
        city: '',
        temperature: 0,
        maxTemperature: 0,
        minTemperature: 0,
        forecast5Day: null,
        stateSky: null,
        subscribe: false
      }
      obj.city = dataSearchValue.value.location.name
      obj.temperature = dataSearchValue.value.current.temp_c
      obj.minTemperature = dataSearchValue.value.forecast.forecastday[0].day.mintemp_c
      obj.maxTemperature = dataSearchValue.value.forecast.forecastday[0].day.maxtemp_c
      obj.stateSky = toRaw(dataSearchValue.value.current.condition)
      obj.forecast5Day = toRaw(dataSearchValue.value.forecast.forecastday) as Array<forecast5Day>
      cityForecastData.value.push(obj)
    state.value.userCitySearchValue = cityForecastData.value
  }
}

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
    flex-flow: column;
    align-items: center;
  }

  &__city_search_item {
    display: flex;
    justify-content: center;
  }
}

</style>