<template>
  <div
    class="aside"
    :class="{ asideNone: !STATUS }"
  >
    <ul class="aside__list">
      <li
        class="aside__list-item"
        v-for="link in links"
      >{{ link }}</li>
    </ul>
    <div class="aside__numbers">
      <span class="aside__numbers-title">По России</span>
      <a
        href="tel:88009506570"
        class="aside__numbers-phone"
      >8 800 950 65 70</a>
      <span class="aside__numbers-title">По Миру</span>
      <a
        href="tel:88009506570"
        class="aside__numbers-phone"
      >8 800 950 65 70</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {

  data() {
    return {
      links: ['Какие преимущества', 'Что вы получаете', 'Еще сюрпризы', 'Оформить карту'],

    }
  },

  computed: {
    ...mapGetters(['STATUS'])
  },

  methods: {
    ...mapMutations(['CHANGE_STATUS'])
  },
};



</script>

<style lang="scss" scoped>
@import '../assets/styles/vars.scss';

.aside {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-24.563rem);
  width: 24.563rem;
  height: 1000px;
  background-color: $asideBg;
  transition: all 0.3s;

  &__list {
    display: flex;
    flex-direction: column;
    margin-top: 5.813rem;
    margin-bottom: 31.75rem;
    margin-left: 6.188rem;
    gap: 1.5rem;

    &-item {
      justify-self: start;
      list-style: none;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.875rem;
      cursor: pointer;
    }
  }

  &__numbers {
    display: flex;
    flex-direction: column;
    margin-left: 6.188rem;
    justify-content: center;
    gap: 2rem;

    &-title {
      color: $spanColor;
      font-family: Geometria;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 0%;
      margin-top: 12px;

    }

    &-phone {
      color: #BBB;
      font-family: Geometria;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 0%;
      text-decoration: none;
    }
  }

}

.asideNone {
  transition: all 0.5s;
  transform: translateX(0);
}
</style>
