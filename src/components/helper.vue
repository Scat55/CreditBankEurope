<template>
  <div class="helper">
    <div class="container">
      <h2 class="helper__title">
        Персональный помощник
      </h2>
      <p class="helper__subtitle">Бесплатно для владельцев <span class="helper__subtitle-gold">CARD PLUS</span></p>

      <div class="helper__bloks">
        <img
          src="../assets/images/helper.png"
          alt="Helper"
        >
        <div class="helper__bloks-list">
          <div class="hepler__bloks-list-item">
            <img
              src="../assets/images/helper/1.svg"
              alt="Guid"
            >
            <p class="helper__list-title">Организует встречи,
              найдет гидов
              и переводчиков</p>
          </div>
          <div class="hepler__bloks-list-item">
            <img
              src="../assets/images/helper/2.svg"
              alt="Guid"
            >
            <p class="helper__list-title">Спланирует поездку
              по самым интересным
              местам вашего отдыха</p>
          </div>
          <div class="hepler__bloks-list-item">
            <img
              src="../assets/images/helper/3.svg"
              alt="Guid"
            >
            <p class="helper__list-title">Достанет билеты
              на мероприятия, даже
              если их уже нет в продаже</p>
          </div>
          <div class="hepler__bloks-list-item">
            <img
              src="../assets/images/helper/4.svg"
              alt="Guid"
            >
            <p class="helper__list-title">Закажет столик
              в ресторане, клубе
              или кафе</p>
          </div>
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
.helper {
  background: url(../assets/images/bg.svg) center no-repeat;


  &__title {
    margin-top: 10.5rem;
    color: #FFF;
    font-family: Geometria;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    text-align: center;
  }

  &__subtitle {
    color: #FFF;
    font-family: Geometria;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    margin-top: 0.75rem;

    &-gold {
      color: #C0965C;
      font-family: Geometria;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  &__bloks {
    margin-top: 3.75rem;
    display: flex;
    align-items: center;
    gap: 9.813rem;

    &-list {
      display: flex;
      flex-direction: column;
      gap: 3.063rem;
    }
  }

  &__list {
    &-title {
      width: 11.25rem;
      color: #FFF;
      font-family: Geometria;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.25rem;
    }
  }
}
</style>