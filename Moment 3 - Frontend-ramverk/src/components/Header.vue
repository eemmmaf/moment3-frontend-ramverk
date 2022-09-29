<template>
    <header>
        <nav>
            <div class="nav-wrapper white-text">
                <router-link to="/">
                    <h1 class="brand-logo">Mina podcasts</h1>
                </router-link>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger right"><i class="material-icons">menu</i></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li>
                        <router-link to="/mina-favoriter">Mina favoriter</router-link>
                    </li>
                    <li>
                        <router-link to="/om-uppgiften">Om uppgiften</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <ul class="sidenav purple lighten-4" id="mobile-demo">
            <li class="white-text">
                <router-link to="/mina-favoriter">Mina favoriter</router-link>
            </li>
            <li class="white-text">
                <router-link to="/om-uppgiften">Om uppgiften</router-link>
            </li>
        </ul>
        <Quote />
        <img src="../assets/microphone.jpg" alt="mikrofon framför svart bakgrund">
    </header>

</template>

<script>
import { RouterLink } from 'vue-router';
import Quote from '../components/Quote.vue';
export default {
    components: {
        RouterLink,
        Quote
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
});
</script>

<style scoped>
.nav-wrapper {
    background-color: #080a09;
}
</style>