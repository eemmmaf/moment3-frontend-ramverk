<template>
    <header>
        <div class="header-container">
            <router-link to="/">
                <h1>Mina podcasts</h1>
            </router-link>
            <nav>
                <ul>
                    <li>
                        <router-link to="/mina-favoriter">Mina favoriter</router-link>
                    </li>
                    <li>
                        <router-link to="/om-uppgiften">Om uppgiften</router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <img src="../assets/microphone.jpg" alt="mikrofon framför svart bakgrund">
    </header>

</template>

<script>
import { RouterLink } from 'vue-router'
export default {
    components: {
        RouterLink
    }
}
</script>

<style scoped>
h1 {
    font-size: 3.5rem;
    color: white;
    font-family: 'Manrope', sans-serif;
    margin-top: 0;
}

a{
    text-decoration: none;
    color: white;
}

a:hover{
    font-weight: bold;
    color: #ea80fc;
}

/*Menyns list-element*/
li {
    display: inline;
    font-family: 'Manrope', sans-serif;
    font-size: 2rem;
    color: white;
    margin: 4rem 2rem;
}

ul {
    list-style-type: none;
}

img {
    max-width: 100vw;
    width: 100%;
    margin: auto;
}
/* Headers container */
.header-container{
    display: flex;
    justify-content: space-between;
    max-width: 1300px;
    width: 100%;
    margin: auto;
}

header{
    margin: 1rem;
}
</style>