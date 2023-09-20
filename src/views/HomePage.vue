<template>
  <div class="home">
    <aside>
      <Aside />
    </aside>
    <div>
      <header>
        <Header />
      </header>
      <main class="main">

        <section class="premium">
          <div class="premium__text">
            <p class="premium__text-title">Твоя премиум
              карта
              <span class="premium__text-subtitle">Лучшая карта для
                любителей путешествий</span>
            </p>
          </div>
        </section>

      </main>
    </div>


  </div>
</template>

<script>
import Header from '../components/header.vue';
import Aside from '../components/aside.vue';
export default {
  components: {
    Header,
    Aside
  },
}
</script>

<style lang="scss" scoped>
.main {
  background: url('../assets/images/bg.svg') no-repeat;
}

.premium {
  margin-top: 100px;
  margin-left: 27.25rem;

  &__text {
    display: block;
    width: 735px;


    &-title {
      display: block;
      color: #FFF;
      font-family: Geometria;
      font-size: 96px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;

    }

    &-subtitle {
      display: inline-block;
      color: #6C6C6C;
      font-family: Geometria;
      font-size: 24px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      width: 350px;
      height: 80px;
    }
  }
}
</style>