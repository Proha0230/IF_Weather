<template>
<div class="main">
  <div class="main__slider" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" v-if="state.userCityValue.length">
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
  <div v-else class="main__empty_city">
    <div class="main__empty_city--block">
      <h2>У вас пока-что нет добавленных городов</h2>
      <h3>Добавьте их по кнопке ниже</h3>
      <NuxtLink to="/search-city" @click="goToSearch"><button>Найти город</button></NuxtLink>
    </div>
  </div>

</div>
</template>

<script setup lang="ts">

import {useRouteSearch, useValueForCity} from "~/composables/states";
import type {cityValue} from "~/composables/types"
import type {Ref} from "vue";

const state = useValueForCity();
const routeSearch = useRouteSearch();
const dotEmpty = resolveComponent('IconDotEmpty');
const dotActive = resolveComponent('IconDotActive');
// переменная для стартового положения пальца при свайпе
const startX:Ref<number> = ref(0);
// переменная для стартового положения пальца при свайпе
const endX:Ref<number> = ref(0);
// переменная которая обозначает номер текущего слайда
const currentIndex:Ref<number> = ref(0);
// Данные для слайдов
const items: Array<cityValue> = state.value.userCityValue;
state.value.userCityValue = state.value.userCityValue.filter(item => item.city !== '')


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

const goToSearch = () => {
  routeSearch.value.goToSearch = true
}

</script>

<style lang="scss">
@import "assets/scss/partials/params";
@import "assets/scss/partials/mixins";

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

    &__empty_city {
      @include allPageMainStyle;

      &--block {
        @include allPageBlockStyle;
        align-items: center;
        display: flex;
        flex-flow: column;
        justify-content: center;
        text-align: center;
        & h2 {
          @include textColorAndShadow;
        }

        & h3 {
          @include textColorAndShadow;
        }

        & button {
          margin-top: 20px;
          cursor: pointer;
          border-radius: 25px;
          height: 80px;
          width: 140px;
          box-shadow: 0 0 5px blue;
          border-color: transparent;
          background-color: rgba(255, 255, 255, 0.8);
        }
      }
    }
  }
</style>