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
  margin-top: 6.25rem;

  &__text {
    position: relative;
    display: block;
    width: 45.938rem;

    &-title {
      display: block;
      color: $textColor;
      font-family: Geometria;
      font-size: 6rem;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
    }

    &-subtitle {
      display: inline-block;
      color: $spanColor;
      font-family: Geometria;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      width: 21.875rem;
      height: 5rem;
    }

    &-img {
      position: absolute;
      top: 7.25rem;
      right: -27.75rem;
      width: 90%;

      @media (min-width: 1820px) and (max-width: 1920px) {
        top: -1rem;
        right: -40.313rem;
        width: 100%;
      }
    }
  }

  &__conditions {
    display: grid;
    grid-template: repeat(2, 6.25rem) / repeat(2, 9.375rem);
    margin-top: 5.25rem;
    gap: 2.5rem;

    &-miles {
      &-title {
        width: 6.875rem;
      }
    }

    &-cash {
      &-title {
        width: 7.938rem;
      }
    }

    &-remains {
      &-title {
        width: 3.75rem;
      }
    }

    &-free {
      &-title {
        width: 6.25rem;
      }
    }
  }

  &__btn {
    width: 18.75rem;
    border-radius: 0.625rem;
    background: #c0965c;
    padding: 28px 47px 24px 44px;
    outline: none;
    color: #fff;
    text-align: center;
    font-family: Geometria;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 113.22%;
    cursor: pointer;
    margin-top: 6.063rem;
    transition: all 0.3s;

    &:hover {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #C0965C;
    }
  }
}

.orange {
  color: #c0965c;
  font-family: Geometria;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.dark_span {
  color: #6c6c6c;
  font-family: Geometria;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
}
</style>
