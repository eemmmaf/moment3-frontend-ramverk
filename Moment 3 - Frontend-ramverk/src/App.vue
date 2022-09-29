<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Quote from "./components/Quote.vue";
export default {
  components: {
    Header,
    RouterView,
    Footer,
    Quote
  }
}
</script>

<style scoped>
  main{
    max-width: 1300px;
    width: 100%;
    margin: auto;
  }

</style>
