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
        <p class="cart__credit-card">Кредитная карта</p>
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
    font-size: 30px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    text-align: center;
    margin-top: 188px;
  }

  &__procents {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 108px;
    margin-top: 48px;

    &-title {
      color: #6C6C6C;
      font-family: Geometria;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px;

    }

    &-subtitle {
      color: #C0965C;
      font-family: Geometria;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  &__credit {
    display: flex;
    margin-top: 86px;
    gap: 112px;


    &-img {
      margin-left: 320px;
    }

    &-text {
      display: flex;
      flex-wrap: wrap;
      gap: 42px;
      width: 400px;
    }

    &-card {
      display: block;
      color: #6C6C6C;
      font-family: Geometria;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      height: 0;
    }

    &-btn {
      width: 380px;
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
      transition: all 0.3s;
    }

    &-conditions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 25px;

      &-text {
        color: #BBB;
        font-family: Geometria;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        width: 178px;

      }
    }
  }
}

.small {

  color: #C0965C;
  font-family: Geometria;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;

}

.darken {
  color: #6C6C6C;
  font-family: Geometria;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  width: 203px;
}

.line {
  border-bottom: 2px dashed #C0965C;

}
</style>