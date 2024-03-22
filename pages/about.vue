<template>
  <div class="main_about">
    <div class="main_about__block">
      <p class="main_about__block--description">
        Это приложение "Погода" - моя личная разработка. <br/>
        Написано на технологическом стэке: <br/>
        * Nuxt 3 <br/>
        * TypeScript <br/>
        * Sass(scss) <br/>
        Данные по погоде берутся из API (Free): <br/>
        https://www.weatherapi.com/docs/ <br/>
      </p>
      <div class="main_about__block--button">
        <button @click.prevent="goGitHub"> Репозиторий с приложением </button>
        <button @click="goTelegram($event)"> Мой телеграм </button>
      </div>
      <div class="main_about__block--copyright">
      <IconCopyright></IconCopyright>
        <p>Proha0230</p>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
const goGitHub = (event) => {
  event.preventDefault()
  window.open('https://github.com/Proha0230/IF_Weather', '_blank')
}
const goTelegram = (event) => {
  event.preventDefault()
  window.open('https://t.me/Proha0230', '_blank')
}

</script>


<style scoped lang="scss">
@import "assets/scss/partials/params";
@import "assets/scss/partials/mixins";

.main_about {
  @include allPageMainStyle;

  &__block {
    @include allPageBlockStyle;
    background-color: rgba(83, 115, 143, 0.8);

    &--description {
      color: white;
      font-size: 20px;
    }

    &--copyright {
      display: flex;
      align-items: center;
      justify-content: center;

      & p {
        @include textColorAndShadow;
        font-size: 20px;
      }
    }

    &--button {
      display: flex;
      justify-content: space-around;

      & button {
        cursor: pointer;
        font-size: 15px;
        height: 50px;
        width: 35vw;
        max-width: 200px;
        border-radius: 30px;
        margin: 15px 0;
        box-shadow: 0 0 5px blue;
        border-color: transparent;
        background-color: rgba(255, 255, 255, 0.8);
      }
    }

  }
}

</style>