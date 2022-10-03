<!--Komponent för header-->
<template>
    <header>
        <!--Navigering-->
        <nav>
            <div class="nav-wrapper white-text">
                <!--Länk till startsidan-->
                <router-link to="/">
                    <h1 class="brand-logo left">Mina podcasts</h1>
                </router-link>
                <!--Ikonen för mobilmeny/hamburgermeny-->
                <a href="#" data-target="mobile-demo" class="sidenav-trigger right"><i
                        class="material-icons">menu</i></a>
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

        <!--Listan som visas när hamburger-menyn trycks på -->
        <ul class="sidenav purple darken-4" id="mobile-demo">
            <li>
                <router-link to="/mina-favoriter" class="white-text">Mina favoriter</router-link>
            </li>
            <li>
                <router-link to="/om-uppgiften" class="white-text">Om uppgiften</router-link>
            </li>
        </ul>
    </header>

</template>

<script>
import { RouterLink } from 'vue-router';
export default {
    components: {
        RouterLink
    }
}

//JS-kod från Materialize för hamburger-menyn
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