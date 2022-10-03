<template>
  <div class="container">
    <Header />
    <main>
      <RouterView />
    </main>
  </div>
  <Footer />
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    RouterView,
    Footer
  }
}
</script>

<style scoped>
</style>
