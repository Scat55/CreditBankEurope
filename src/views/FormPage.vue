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
      @submit.prevent="submitHandler()"
    >
      <input
        type="text"
        class="form__input"
        placeholder="ФИО"
        required
      >
      <input
        type="email"
        class="form__input"
        placeholder="Электронный адрес"
        required
      >
      <input
        type="number"
        class="form__input"
        placeholder="Номер телефона"
        required
      >

      <div
        required
        class="form__select"
      >
        <span value="russia">Российская федерация</span>
        <img
          src="../assets/images/arrow.svg"
          alt="Arrow"
          class="form__arrow"
          :class="{ rotate: rotate }"
          @click="showOptions()"
        >
      </div>
      <div
        class="form__options"
        :class="{ active: isActive }"
      >
        <span value="russia">Российская федерация</span>
        <span value="belarus">Белорусь</span>
        <span value="ukraine">Украина</span>
        <span value="kazakhstan">Казахстан</span>
      </div>
      <button
        class="form__btn"
        type="submit"
      >Заказать сейчас</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      rotate: false
    }
  },

  methods: {
    showOptions() {
      this.rotate = !this.rotate
      this.isActive = !this.isActive
    },
    submitHandler() {
      alert('Ok')
    }
  },
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
    align-items: center;
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

  &__select {
    display: flex;
    justify-content: space-between;
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
  }

  &__options {
    display: flex;
    flex-direction: column;
    gap: 31px;
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
    transition: all .3s;


  }

  &__arrow {
    transition: all .3s;
  }

  &__btn {
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
}

.active {
  display: none;
}

.rotate {
  transform: rotate(180deg);
}
</style>