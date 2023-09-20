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
        <Premium />
      </main>
    </div>


  </div>
</template>

<script>
import Header from '../components/header.vue';
import Aside from '../components/aside.vue';
import Premium from '../components/premium.vue';
export default {
  components: {
    Header,
    Aside,
    Premium
  },
}
</script>

<style lang="scss" scoped>
.main {
  background: url('../assets/images/bg.svg') no-repeat;
}
</style>