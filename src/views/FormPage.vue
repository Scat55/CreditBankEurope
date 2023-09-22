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
      id="form__form"
      @submit.prevent="submitHandler()"
    >
      <input
        type="text"
        class="form__input"
        placeholder="ФИО"
        v-model.trim="fullName"
        :class="{ invalid: ($v.fullName.$dirty && !$v.fullName.required) }"
      >
      <small
        class="helper__text "
        v-if="$v.fullName.$dirty && !$v.fullName.required"
      >Некорректно введены данные</small>
      <input
        type="text"
        class="form__input"
        placeholder="Электронный адрес"
        v-model.trim="email"
        :class="{ invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email) }"
      >
      <small
        class="helper__text "
        v-if="$v.email.$dirty && !$v.email.required || $v.email.$dirty && !$v.email.email"
      >Некорректно введены данные</small>
      <input
        type="text"
        class="form__input"
        placeholder="Номер телефона"
        v-model.trim="number"
        :class="{ invalid: ($v.number.$dirty && !$v.number.required) || ($v.number.$dirty && !$v.number.integer) }"
      >
      <small
        class="helper__text "
        v-if="$v.number.$dirty && !$v.number.required || $v.number.$dirty && !$v.number.integer"
      >Некорректно введены данные</small>

      <Select
        :options="contries"
        :selected="select"
        @select="optionSelect"
      />
      <div class="form__info">
        <label class="form__info">
          <input
            type="checkbox"
            class="form__chek real__chek"
          >
          <span class="custom__chek"></span>
          <p class="form__subtitle">Я соглашаюсь на <span class="form__span">обработку</span> моих персональных данных</p>
        </label>
      </div>
      <button
        class="form__btn"
        type="submit"
      >Заказать сейчас</button>
    </form>
  </div>
</template>

<script>
import { email, required, integer, minLength, alphaNum } from 'vuelidate/lib/validators';
import Select from '../components/select.vue';
export default {
  name: 'form',
  components: { Select },
  data() {
    return {
      email: '',
      fullName: '',
      number: '',
      national: '',
      contries: [
        { value: 'Российская федерация', id: 1 },
        { value: 'Белорусь', id: 2 },
        { value: 'Украина', id: 3 },
        { value: 'Казахстан', id: 4 },
      ],
      select: ''
    }
  },
  validations: {
    email: { email, required },
    number: { integer, required },
    fullName: { required, minLength: minLength(5) },
    // national: { required }
  },
  methods: {
    submitHandler() {
      // Делаем валидность
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      this.$router.push('/final')
    },
    optionSelect(option) {
      this.select = option.value
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
      font-size: 1.875rem;
      font-style: normal;
      font-weight: 800;
      line-height: 113.22%;
    }

    &-btn {
      position: absolute;
      top: -0.625rem;
      right: -15rem;
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
    width: 42.5rem;
    border-radius: 0.625rem;
    background: rgb(39, 39, 39);
    padding: 1.875rem;
    color: $textColor;
    font-family: Geometria;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    border: none;
    outline: none;

    &::placeholder {
      color: #6C6C6C;
      font-family: Geometria;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 500;
      line-height: 113.22%;
    }
  }

  &__info {
    display: flex;
    align-self: start;
    align-items: center;
    gap: 1.25rem;
  }

  &__subtitle {
    color: #6C6C6C;
    font-family: Geometria;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 113.22%;
  }

  &__span {
    color: #fff;
    cursor: pointer;
  }

  &__btn {
    width: 23.75rem;
    border-radius: 10px;
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
}

.invalid {
  border: 1px solid red
}

.helper__text {
  align-self: start;
  color: #CC301B;
  font-family: Geometria;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 113.22%;

}

.real__chek {
  width: 0;
  height: 0;
  opacity: 0;
  position: absolute;
  z-index: -1;
}

.custom__chek {
  position: relative;
  width: 2.438rem;
  height: 2.438rem;
  background: rgb(39, 39, 39);
  border-radius: 8px;
  cursor: pointer;

  // Рисуем галочку
  &::before {
    content: '';
    display: inline-block;
    width: 2.438rem;
    height: 2.438rem;
    background-image: url(../assets/images/active.svg);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: 0.2s ease-in
  }
}

// Активируем фейковый чекбокс
.real__chek:checked+.custom__chek::before {
  transform: translate(-50%, -50%) scale(1);
}
</style>