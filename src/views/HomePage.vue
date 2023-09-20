<template>
  <div class="home">
    <aside>
      <Aside />
    </aside>
    <div>
      <header>
        <Header />
      </header>
      <div class="container">

      </div>
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
.home {
  display: flex;
  align-items: start;
}
</style>