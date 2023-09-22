<template>
  <div class="travel">
    <div class="container">
      <div class="travel__text">
        <h3 class="travel__title">Путешествие мечты начинается с CARD PLUS</h3>
        <p class="travel__subtitle">Мы продумали каждую мелочь. Владельцы CARD PLUS получают особый
          пакет привилегий, необходимый для любого путешествия</p>
      </div>
      <div class="travel__advantages">
        <div class="travel__advantages-bilets">
          <img
            src="../assets/images/travelImages/1.svg"
            alt="Bilets"
            class="travel__advantages-bilets-img"
          >
          <span class="travel__advantages-bilets-title">
            Билеты любых
            авиакомпаний
          </span>
          <p class="travel__advantages-bilets-subtitle">Предложения от 300+ авиакомпаний, 185+ lowcost перевозчиков,
            чартеры от 60 крупных российскихтуроператоров
          </p>
        </div>
        <div class="travel__advantages-bilets">
          <img
            src="../assets/images/travelImages/2.svg"
            alt="Bilets"
            class="travel__advantages-bilets-img"
          >
          <span class="travel__advantages-bilets-title">
            Мили больше
            не сгорают

          </span>
          <p class="travel__advantages-bilets-subtitle">Мили, накопленные при оплате картой AlfaTravel, не сгорают и
            остаются
            на вашем счете, пока вы
            не решите их потратить
          </p>
        </div>
        <div class="travel__advantages-bilets">
          <img
            src="../assets/images/travelImages/3.svg"
            alt="Bilets"
            class="travel__advantages-bilets-img"
          >
          <span class="travel__advantages-bilets-title">
            Мили больше
            не сгорают

          </span>
          <p class="travel__advantages-bilets-subtitle">Мили, накопленные при оплате картой AlfaTravel, не сгорают и
            остаются
            на вашем счете, пока вы
            не решите их потратить
          </p>
        </div>
        <div class="travel__advantages-bilets">
          <img
            src="../assets/images/travelImages/4.svg"
            alt="Bilets"
            class="travel__advantages-bilets-img"
          >
          <span class="travel__advantages-bilets-title">
            Мили больше
            не сгорают

          </span>
          <p class="travel__advantages-bilets-subtitle">Мили, накопленные при оплате картой AlfaTravel, не сгорают и
            остаются
            на вашем счете, пока вы
            не решите их потратить
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.travel {
  margin-top: 16.875rem;


  &__text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
  }

  &__title {
    text-align: center;
    color: #FFF;
    font-family: Geometria;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }

  &__subtitle {
    width: 33.125rem;
    color: #6C6C6C;
    text-align: center;
    font-family: Geometria;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &__advantages {
    display: flex;
    margin-top: 5.063rem;
    gap: 4.063rem;

    &-bilets {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;

      &-img {
        width: 3.5rem;
        height: 3.375rem;
      }

      &-title {
        width: 8.938rem;
        height: 2.313rem;
        color: #FFF;
        font-family: Geometria;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
      }

      &-subtitle {
        width: 12.438rem;
        height: 5.25rem;

        color: #6C6C6C;
        font-family: Geometria;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.25rem;
        /* 142.857% */
      }
    }
  }

}
</style>