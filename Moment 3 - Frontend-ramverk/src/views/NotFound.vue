<template>
    <div>
        <p class="white-text center-align"> <i class="large material-icons">mood_bad</i><br> 404 <br>Sidan du sökte
            efter finns inte</p>
        <div class="link">
            <div class="white-text">
                <router-link to="/" class="white-text">
                    Tillbaka till startsidan
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
p {
    font-size: 3.5em;
}

.link{
    max-width: 300px;
    text-align: center;
    margin: auto;
    padding: 4em;
    text-decoration: underline;
    cursor: pointer;
}

.link:hover{
    font-weight: bold;
}
</style>