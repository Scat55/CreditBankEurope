<template>
  <div class="privileges">
    <div class="container">
      <p class="privileges__title">Мы позаботились, чтобы вы получили</p>
      <div class="privileges__bloks">
        <div class="privileges__bloks-internet">
          <img
            src="../assets/images/privrleges/1.png"
            alt="Internet"
          />
          <span class="privileges__bloks-internet-text">Бесплатный безлимитный интернет в роуминге</span>
          <div class="privileges__bloks-internet-images">
            <img
              src="../assets/images/privrleges/megafon.png"
              alt="Megafon"
            >
            <img
              src="../assets/images/privrleges/tele.png"
              alt="Tele2"
            >
            <img
              src="../assets/images/privrleges/mts.png"
              alt="MTS"
            >
            <img
              src="../assets/images/privrleges/beelyne.png"
              alt="Beeline"
            >
          </div>
        </div>
        <div class="privileges__bloks-internet">
          <img
            src="../assets/images/privrleges/2.png"
            alt="Internet"
          />
          <span class="privileges__bloks-internet-text">Бесплатная упаковка багажа</span>
          <p class="privileges__bloks-internet-subtitle">Держатели карт Visa Signature
            могут упаковать багаж в крупных
            аэропортах России
          </p>
        </div>
        <div class="privileges__bloks-internet">
          <img
            src="../assets/images/privrleges/3.png"
            alt="Internet"
          />
          <span class="privileges__bloks-internet-text">Бесплатный доступ
            в приложении
            App In The Air</span>
          <p class="privileges__bloks-internet-subtitle">Бесплатная премиум подписка при покупке авиабилетов
            на travel.alfabank.ru
          </p>
        </div>
        <div class="privileges__bloks-internet">
          <img
            src="../assets/images/privrleges/4.png"
            alt="Internet"
          />
          <span class="privileges__bloks-internet-text">Такси бизнес-класса
            со скидкой 20%</span>
          <div class="privileges__bloks-internet-images">
            <img
              src="../assets/images/privrleges/wheely.png"
              alt="Wheely"
              class="wheely"
            >
            <img
              src="../assets/images/privrleges/gett.png"
              alt="Gett"
              class="more__width"
            >

          </div>
        </div>
        <div class="privileges__bloks-internet">
          <img
            src="../assets/images/privrleges/5.png"
            alt="Internet"
          />
          <span class="privileges__bloks-internet-text">Скидка в ресторанах
            Novikov Group
            в аэропорту Шереметьево</span>
        </div>
        <div class="privileges__bloks-internet">
          <img
            src="../assets/images/privrleges/6.png"
            alt="Internet"
          />
          <span class="privileges__bloks-internet-text">Доступ в бизнес-залы
            Priority Pass по всему миру</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.privileges {
  margin-top: 128px;

  &__title {
    text-align: center;
    color: #fff;
    font-family: Geometria;
    font-size: 30px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }

  &__bloks {
    display: grid;
    grid-template: repeat(2, 280px) / repeat(3, 280px);
    gap: 67px;
    margin-top: 75px;
    justify-content: center;
    align-items: start;

    &-internet {
      display: flex;
      flex-direction: column;
      justify-content: center;


      &-text {
        color: #FFF;
        font-family: Geometria;
        font-size: 18px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        margin-top: 8px;

      }

      &-subtitle {
        color: #6C6C6C;
        font-family: Geometria;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px;
        margin-top: 7px;
        height: 100px;
      }

      &-images {
        display: flex;
        align-items: center;
        margin-top: 18px;
        gap: 28px;
        flex-wrap: wrap;
        height: 25px;
      }
    }
  }
}

.more__width {
  width: 84px;
  height: 40px;
}

.wheely {
  margin-top: 15px;
}
</style>
