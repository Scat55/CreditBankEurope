<template>
  <div class="cart">
    <div class="container">
      <h2 class="cart__title">
        Оформите свою новую карту для путешествий
      </h2>

      <div class="cart__procents">
        <div class="cart__procents-item">
          <span class="cart__procents-subtitle"><span class="small">до</span> 11%</span>
          <p class="cart__procents-title">Милями за услуги,
            оплаченные на travel.ru</p>
        </div>
        <div class="cart__procents-item">
          <span class="cart__procents-subtitle"><span class="small">до</span> 11%</span>
          <p class="cart__procents-title">Милями за любые покупки по карте</p>
        </div>
        <div class="cart__procents-item">
          <span class="cart__procents-subtitle">1 = 1</span>
          <p class="cart__procents-title">Оплата милями билетов любых авиакомпаний по курсу 1 миля = 1 Р</p>
        </div>
      </div>


    </div>
    <div class="cart__credit">
      <img
        src="../assets/images/Credit Card.png"
        alt="CreditCard"
        class="cart__credit-img"
      >
      <div class="cart__credit-text">
        <p class="cart__credit-card small">Кредитная карта</p>
        <p class="cart__credit-card">Дебетовая карта</p>
        <router-link to="/form"><button class="cart__credit-btn">Отправить заявку</button></router-link>
        <div class="cart__credit-conditions ">
          <p class="cart__credit-conditions-text darken">Стоимость карты в год (руб.)

            Приветственные мили (шт.)
            Мили за покупки </p>
          <p class="cart__credit-conditions-text">6 490 (без пакета услуг),
            4 990 (с пакетом услуг)
            1 000 <br>
            5%</p>
        </div>
        <span class="small line">Все подробности</span>
      </div>



    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.cart {

  &__title {
    color: #FFF;
    font-family: Geometria;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    text-align: center;
    margin-top: 11.75rem;
  }

  &__procents {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6.75rem;
    margin-top: 3rem;

    &-title {
      color: #6C6C6C;
      font-family: Geometria;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.25rem;

    }

    &-subtitle {
      color: #C0965C;
      font-family: Geometria;
      font-size: 2.25rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  &__credit {
    display: flex;
    margin-top: 5.375rem;
    gap: 7rem;


    &-img {
      margin-left: 20rem;
    }

    &-text {
      display: flex;
      flex-wrap: wrap;
      gap: 2.625rem;
      width: 25rem;
    }

    &-card {
      display: block;
      color: #6C6C6C;
      font-family: Geometria;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;
    }

    &-btn {
      width: 23.75rem;
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
      transition: all 0.3s;
    }

    &-conditions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.563rem;

      &-text {
        color: #BBB;
        font-family: Geometria;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        width: 11.125rem;

      }
    }
  }
}

.small {

  color: #C0965C;
  font-family: Geometria;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;

}

.darken {
  color: #6C6C6C;
  font-family: Geometria;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  width: 12.688rem;
}

.line {
  border-bottom: 2px dashed #C0965C;

}
</style>