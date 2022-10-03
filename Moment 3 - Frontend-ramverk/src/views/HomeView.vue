<!--View för startsidan-->
<template>
    <Banner />
    <div class="section">
        <div class="row">
            <!-- En stor kolumn för små skärmar och halv kolumn för medium och uppåt-->
            <div class="grid-example col s12 m6">
                <!--Komponent för artikel-->
                <Article title="Vad är en podcast?"
                    content="Poddradio, poddsändning eller podcast är en metod att publicera ljudfiler via internet. Den försvenskade kortformen podd förekommer också, men kan även avse en bärbar apparat för uppspelning av ljudfiler från internet. Källa: Wikipedia." />
            </div>
            <!-- En stor kolumn för små skärmar och halv kolumn för medium och uppåt-->
            <div class="grid-example col s12 m6">
                <!--Komponent för artikel-->
                <Article title="Mitt intresse"
                    content="Att lyssna på podcast är perfekt att göra under dygnets alla timmar. Jag brukar främst göra det när jag gör olika vardagssysslor, som att laga mat eller diska. Det är även perfekt att lyssna på en podcast under en promenad. Jag tycker om flera olika genrer, men det jag främst lyssnar på är dokumentärer, politik och skräck." />
            </div>
        </div>
    </div>
</template>

<script>
//Importerar artikel-element-komponenten
import Article from "../components/Article.vue";
import Banner from "../components/Banner.vue"

export default {
    components: {
        Article,
        Banner
    }
}

</script>

<style scoped>
.section {
    margin-top: 4em;
}
</style>
