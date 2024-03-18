<template>
<div class="main_forecast_5day">
  <div class="main_forecast_5day__block">
    <div class="main_forecast_5day__block--title">
      <h3>Прогноз погоды на 5 дней</h3>
      <h3>Moscow</h3>
    </div>
    <div class="main_forecast_5day__block--list">

      <div class="list_item">
        <div class="list_item__date">
          <p>Сегодня</p>
          <p>18.03</p>
        </div>
        <IconCloud></IconCloud>
        <div class="list_item__temperature">
          <p>3</p>
          <IconCelsiusMini></IconCelsiusMini>
        </div>
      </div>

      <div class="list_item">
        <div class="list_item__date">
          <p>Сегодня</p>
          <p>18.03</p>
        </div>
        <IconCloud></IconCloud>
        <div class="list_item__temperature">
          <p>3</p>
          <IconCelsiusMini></IconCelsiusMini>
        </div>
      </div>

      <div class="list_item">
        <div class="list_item__date">
          <p>Сегодня</p>
          <p>18.03</p>
        </div>
        <IconCloud></IconCloud>
        <div class="list_item__temperature">
          <p>3</p>
          <IconCelsiusMini></IconCelsiusMini>
        </div>
      </div>

      <div class="list_item">
        <div class="list_item__date">
          <p>Сегодня</p>
          <p>18.03</p>
        </div>
        <IconCloud></IconCloud>
        <div class="list_item__temperature">
          <p>3</p>
          <IconCelsiusMini></IconCelsiusMini>
        </div>
      </div>

      <div class="list_item">
        <div class="list_item__date">
          <p>Сегодня</p>
          <p>18.03</p>
        </div>
        <IconCloud></IconCloud>
        <div class="list_item__temperature">
          <p>3</p>
          <IconCelsiusMini></IconCelsiusMini>
        </div>
      </div>

    </div>

  </div>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "assets/scss/partials/mixins";
@import "assets/scss/partials/params";

.main_forecast_5day {
  @include allPageMainStyle;

  & p,h3 {
    @include textColorAndShadow;
  }

  &__block {
    @include allPageBlockStyle;

    &--title {
      display: flex;
      flex-flow: column;
      align-items: center;
      margin-bottom: 25px;

      & h3 {
        font-size: 20px;
      }
    }

    &--list {
      display: flex;
      justify-content: space-around;

      & .list_item {
        display: flex;
        flex-flow: column;
        align-items: center;
        width: 18%;
        background-color: $forecast-bg;
        border-radius: 10px;
        box-shadow: 0 0 5px white;

        //& p {
        //  @include textColorAndShadow;
        //}

        &__date {
          display: flex;
          flex-flow: column;
          align-items: center;
        }

        &__temperature {
          display: flex;
          margin-top: 10px;

          & p {
            margin: 8px 5px;
          }
        }

      }

    }

  }

}

</style>