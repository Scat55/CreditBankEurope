<template>
  <div class="footer__main">
    <div class="footer">
      <div class="footer__logo">
        <img
          src="../assets/images/logo.png"
          alt="Logo"
        >
        <span class="footer__subtitle">
          АО «Кредит Европа Банк»
        </span>
      </div>

      <div class="footer__info">
        <span class="footer__info-text">О Банке</span>
        <span class="footer__info-text">Офисы и банкоматы</span>
        <span class="footer__info-text">Новости</span>
        <span class="footer__info-text">Вакансии</span>
        <span class="footer__info-text">Реализуемое имущество</span>
      </div>
      <div class="footer__info">
        <span class="footer__info-text">Раскрытие информации</span>
        <span class="footer__info-text"> Ставки по вкладам</span>
        <span class="footer__info-text"> Условия и тарифы</span>
        <span class="footer__info-text">Корпоративное управление</span>
        <span class="footer__info-text">Карта сайта</span>
      </div>

      <div class="footer__numbers">
        <span class="footer__numbers-text">По России</span>
        <a
          href="tel:88009506570"
          class="footer__numbers-phone"
        >8 800 950 6570</a>
        <span class="footer__numbers-text">По Миру</span>
        <a
          href="tel:88009506570"
          class="footer__numbers-phone"
        >8 800 950 6570</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer__main {
  background: url("../assets/images/footerBg.svg") center;
}

.footer {

  margin-top: 15.063rem;
  margin-left: 20.563rem;
  display: flex;
  gap: 5.75rem;
  margin-bottom: 3.375rem;


  &__logo {
    display: inline-flex;
    flex-direction: column;
  }

  &__info {
    display: flex;
    flex-direction: column;

    &-text {
      color: #6C6C6C;
      font-family: Geometria;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.875rem;
      cursor: pointer;

    }
  }

  &__numbers {
    display: flex;
    flex-direction: column;
    gap: 4px;

    &-text {
      color: #6C6C6C;
      font-family: Geometria;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 500;
    }

    &-phone {
      color: #BBB;
      font-family: Geometria;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 500;
      text-decoration: none;
    }
  }
}
</style>