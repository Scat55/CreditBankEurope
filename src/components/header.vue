<template>
  <div class="header">

    <div class="header__logo">
      <img
        v-if="this.STATUS"
        src="../assets/images/burger.svg"
        alt="Burger"
        class="header__logo-burger"
        @click="CHANGE_STATUS()"
      >
      <img
        v-else="!this.STATUS"
        src="../assets/images/close.svg"
        alt="CloseAside"
        class="header__logo-burger"
        @click="CHANGE_STATUS()"
      >
      <img
        src="../assets/images/logo.png"
        alt="Logo"
      >
    </div>

  </div>
</template>
<script>
// Получаем геттеры и мутацию из vuex
import { mapGetters, mapMutations } from 'vuex';
export default {

  computed: {
    ...mapGetters(['STATUS'])
  },

  methods: {
    ...mapMutations(['CHANGE_STATUS'])
  },

}
</script>

<style lang="scss" scoped>
.header {
  margin-left: 27.25rem;
  margin-top: 4.75rem;

  // .header__logo

  &__logo {
    display: inline-flex;
    align-items: center;
    gap: 3.313rem;

    &-burger {
      cursor: pointer;
    }
  }
}
</style>