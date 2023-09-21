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
        <Travel />
        <Privileges />
        <Helper />
        <Cart />
      </main>
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Header from '../components/header.vue';
import Aside from '../components/aside.vue';
import Premium from '../components/premium.vue';
import Travel from '../components/travel.vue';
import Privileges from '../components/privileges.vue';
import Helper from '../components/helper.vue';
import Cart from '../components/cart.vue';
import Footer from '../components/footer.vue';
export default {
  components: {
    Header,
    Aside,
    Premium,
    Travel,
    Privileges,
    Helper,
    Cart,
    Footer
  },
}
</script>

<style lang="scss" scoped>
.main {
  background: url('../assets/images/bg.svg') no-repeat;
}
</style>