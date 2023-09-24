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
  margin-top: 8rem;

  &__title {
    text-align: center;
    color: #fff;
    font-family: Geometria;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }

  &__bloks {
    display: grid;
    grid-template: repeat(2, 17.5rem) / repeat(3, 17.5rem);
    gap: 4.188rem;
    margin-top: 4.688rem;
    justify-content: center;
    align-items: start;

    &-internet {
      display: flex;
      flex-direction: column;
      justify-content: center;


      &-text {
        color: #FFF;
        font-family: Geometria;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        margin-top: 0.5rem;

      }

      &-subtitle {
        color: #6C6C6C;
        font-family: Geometria;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.25rem;
        margin-top: 0.438rem;
        height: 6.25rem;
      }

      &-images {
        display: flex;
        align-items: center;
        margin-top: 1.125rem;
        gap: 1.125rem;
        flex-wrap: wrap;
        height: 1.563rem;
      }
    }
  }
}

.more__width {
  width: 5.25rem;
  height: 2.5rem;
}

.wheely {
  margin-top: 0.938rem;
}
</style>
