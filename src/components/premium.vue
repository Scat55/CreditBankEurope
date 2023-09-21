<template>
  <div class="container">
    <div class="premium">
      <div class="premium__text">
        <h1 class="premium__text-title">
          Твоя премиум карта
          <span class="premium__text-subtitle">Лучшая карта для любителей путешествий</span>
        </h1>
        <img
          src="../assets/images/card.png"
          alt="CreditCard"
          class="premium__text-img"
        />
      </div>
      <div class="premium__conditions">
        <div class="premium__conditions-miles">
          <span class="premium__conditions-miles-orange orange">11%</span>
          <p class="premium__conditions-miles-title dark_span">Вернем за покупки милями</p>
        </div>
        <div class="premium__conditions-cash">
          <span class="premium__conditions-cash-orange orange">0%</span>
          <p class="premium__conditions-cash-title dark_span">
            Бесплатное снятие наличных по всему миру
          </p>
        </div>
        <div class="premium__conditions-remains">
          <span class="premium__conditions-remains-orange orange">7%</span>
          <p class="premium__conditions-remains-title dark_span">До 7% на остаток по счету</p>
        </div>
        <div class="premium__conditions-free">
          <span class="premium__conditions-free-orange orange">0р</span>
          <p class="premium__conditions-free-title dark_span">Бесплатное годовое обслуживание</p>
        </div>
      </div>

      <router-link to="/form"><button class="premium__btn">Заказать сейчас</button></router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../assets/styles/vars.scss';

.premium {
  width: 100%;
  margin-top: 100px;

  &__text {
    position: relative;
    display: block;
    width: 735px;

    &-title {
      display: block;
      color: $textColor;
      font-family: Geometria;
      font-size: 96px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
    }

    &-subtitle {
      display: inline-block;
      color: $spanColor;
      font-family: Geometria;
      font-size: 24px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      width: 350px;
      height: 80px;
    }

    &-img {
      position: absolute;
      top: 116px;
      right: -444px;
      width: 90%;

      @media (min-width: 1820px) and (max-width: 1920px) {
        top: -16px;
        right: -645px;
        width: 100%;
      }
    }
  }

  &__conditions {
    display: grid;
    grid-template: repeat(2, 100px) / repeat(2, 150px);
    margin-top: 84px;
    gap: 40px;

    &-miles {
      &-title {
        width: 110px;
      }
    }

    &-cash {
      &-title {
        width: 127px;
      }
    }

    &-remains {
      &-title {
        width: 60px;
      }
    }

    &-free {
      &-title {
        width: 100px;
      }
    }
  }

  &__btn {
    width: 300px;
    border-radius: 10px;
    background: #c0965c;
    padding: 28px 47px 24px 44px;
    outline: none;
    color: #fff;
    text-align: center;
    font-family: Geometria;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 113.22%;
    cursor: pointer;
    margin-top: 97px;
    transition: all 0.3s;

    &:hover {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #C0965C;
    }
  }
}

.orange {
  color: #c0965c;
  font-family: Geometria;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.dark_span {
  color: #6c6c6c;
  font-family: Geometria;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
}
</style>
