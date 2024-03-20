<template>
<div class="main">
  <div class="main__slider" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
    <div class="main__slider--dots_slide_list">
      <div class="dots_slide_list__item" v-for="(item, index) in items" :key="index">
      <component :is="index === currentIndex ? dotActive : dotEmpty" @click="changeCity(index)"></component>
      </div>
    </div>
    <div class="main__slider--slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="slides__slide" v-for="(item, index) in items" :key="index">
        <PageView :allValueForCity="item"></PageView>
      </div>
    </div>
  </div>

</div>
</template>

<script setup lang="ts">

import {useValueForCity} from "~/composables/states";
import type {cityValue} from "~/composables/types"

const state = useValueForCity();
const dataResponse = ref();
const cityForecastData = ref([])
const dotEmpty = resolveComponent('IconDotEmpty');
const dotActive = resolveComponent('IconDotActive');
// переменная для стартового положения пальца при свайпе
const startX = ref(0);
// переменная для стартового положения пальца при свайпе
const endX = ref(0);
// переменная которая обозначает номер текущего слайда
const currentIndex = ref(0);
// Данные для слайдов
const items: Array<cityValue> = state.value.userCityValue;


//определение положения пальца при нажатии на слайд
const handleTouchStart = (e) => {
  startX.value = e.touches[0].clientX;
};

// определение положения пальца в какую сторону он двигается - в правую/левую сторону слайда
// и определения точки в которой палец отпустился с экрана
const handleTouchMove = (e) => {
  endX.value = e.touches[0].clientX;
};

// метод перелистывающий слайды
const handleTouchEnd = () => {
  if(endX.value) {
    // условие для того если пользователь не делал свайп - был такой же эффект перелистывания
    // только от клика по боковым частям экрана
    // if(endX.value === 0) endX.value = 200

    // Это разница между начальным местом нажатия и местом где мы отпустили палец с экрана -
    // таким образом мы определяем уменьшилась ли позиция или уменьшилась
    const difference = startX.value - endX.value;
    // затем по этим данным в переменной difference мы определяем - если разница между ними положительная и больше 50
    // то увеличиваем номер слайда т.е. если палец например нажали на середину экрана и провели в левую сторону экрана
    // то перейдем с первого слайда на второй слайд
    if (Math.abs(difference) > 50) {
      if (difference > 0 && currentIndex.value < items.length - 1) {
        currentIndex.value++;
        // если же наоборот разница между ними будет отрицательная то мы уменьшаем номер слайда
        // т.е. движение от центра вправо
      } else if (difference < 0 && currentIndex.value > 0) {
        currentIndex.value--;
      }
    }
    // затем мы сбрасываем данные после того как перелистнем слайд или не перелистнем вообще
    // если свайп был слишком маленький
    startX.value = 0;
    endX.value = 0;
  }
};

// когда мы жмем на точку слайда мы изменяем currentIndex и у нас будет отображаться тот слайд по точке которой мы кликнули/тапнули
const changeCity = (value:number) => {
  currentIndex.value = value
}


async function loadData() {
  const url = `http://api.weatherapi.com/v1/forecast.json?&key=f88bd18e1ab443c8a91121443242003&lang=ru&q=bulk&days=5`
  const {data, pending} = await useFetch(url, {
    method: "POST",
    body: state.value.userCityFetchValue
  })
  dataResponse.value = data.value.bulk
}

async function getCityValue() {
    await loadData();
    if(dataResponse.value) {
      dataResponse.value.forEach((item, index) => {
        let obj = {}
        obj.city = item.query.location.name
        obj.temperature = item.query.current.temp_c
        obj.minTemperature = item.query.forecast.forecastday[0].day.mintemp_c
        obj.maxTemperature = item.query.forecast.forecastday[0].day.maxtemp_c
        obj.stateSky = toRaw(item.query.current.condition)
        obj.forecast5Day = toRaw(item.query.forecast.forecastday)
        cityForecastData.value.push(obj)
      })
      state.value.userCityValue = cityForecastData.value
    }
}

getCityValue();



</script>

<style lang="scss">
  #__nuxt {
    background-image: url("/assets/img/cloud.jpeg");
    width: 100vw;
    height: 100vh;
    max-width: 700px;
    background-size: cover;
    overflow: scroll;
  }

  .main {


    &__slider {
      position: relative;
      width: 100%;
      overflow: hidden;

      &--dots_slide_list {
        display: flex;
        align-items: center;
        justify-content: center;

        & .dots_slide_list__item {
          cursor: pointer;
        }
      }

      &--slides {
        display: flex;

        & .slides__slide {
          flex: 0 0 100%;
          text-align: center;
        }
      }
    }
  }
</style>