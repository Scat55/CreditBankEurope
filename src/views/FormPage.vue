<template>
  <div class="form">
    <div class="form__text">
      <h3 class="form__text-title">Заявка на карту</h3>
      <router-link to="/">
        <img
          src="../assets/images/closeForm.svg"
          alt="CloseForm"
          class="form__text-btn"
        >
      </router-link>
    </div>
    <form
      action="#"
      class="form__form"
    >
      <input
        type="text"
        class="form__input"
        placeholder="ФИО"
      >
      <input
        type="email"
        class="form__input"
        placeholder="Электронный адрес"
      >
      <input
        type="number"
        class="form__input"
        placeholder="Номер телефона"
      >
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/vars.scss';

.form {
  display: flex;
  align-items: center;
  flex-direction: column;


  &__text {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 4rem;

    &-title {
      font-family: 'Geometria';
      font-size: 30px;
      font-style: normal;
      font-weight: 800;
      line-height: 113.22%;
    }

    &-btn {
      position: absolute;
      top: -10px;
      right: -240px;
      cursor: pointer;
      text-align: center;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-top: 3.125rem;
  }

  &__input {
    width: 680px;

    border-radius: 10px;
    background: rgb(39, 39, 39);
    padding: 30px;
    color: $textColor;
    font-family: Geometria;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;

    border: none;
    outline: none;

    &::placeholder {
      color: #6C6C6C;
      font-family: Geometria;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 113.22%;
    }
  }
}
</style>