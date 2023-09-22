<template>
  <div class="final">
    <img
      src="../assets/images/check mark.svg"
      alt="ChekMark"
    >
    <p class="final__title">Ваша заявка принята</p>
    <span class="final__subtitle">В ближайшее время с вами свяжется наш менеджер</span>
  </div>
</template>

<script>
export default {

  mounted() {
    setTimeout(() => {
      this.$router.push('/')
    }, 2000);
  },
}
</script>

<style lang="scss" scoped>
.final {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  &__title {
    color: #FFF;
    text-align: center;
    font-family: Geometria;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 800;
    line-height: 113.22%;
    margin-top: 1.188rem;
  }

  &__subtitle {
    color: #6C6C6C;
    text-align: center;
    font-family: Geometria;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem;
    margin-top: 0.625rem;
  }

}
</style>