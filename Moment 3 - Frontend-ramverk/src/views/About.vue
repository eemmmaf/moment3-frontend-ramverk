<template>
    <WideArticle title="Om uppgiften Moment 3 - Frontend-ramverk"
        content="Till denna uppgift har ramverket Vue använts. Syftet med denna uppgift är att utvärdera och använda JavaScript-ramverket Vue.js för webbutveckling. Ett til syfte med uppgiften är att konsumera webbtjänsten som skapades i ett tidigare moment och publicera till lämplig webhost som inte är FTP-baserad. Ett gränssnitt har skapats för att kunna läsa ut, lägga till och radera podcasts. " />
    <div class="row">
        <div class="grid-example col s12 m6">
            <Article title="Bra"
                content="Det var lätt att komma igång med Vue och det gick snabbt att installera. Något som jag verkligen uppskattar är att dela upp innehållet i komponenter. Arbetet blir mer organiserat och jag upplever att kod inte skrivs i onödan. Tack vare att det är uppdelat i komponenter känns koden mer lättläst och återanvändbar"
                content2="Vue har em bra dokumentation som är lätt att förstå." />
        </div>
        <div class="grid-example col s12 m6">
            <Article title="Mindre bra" content="Det största problemet som jag upptäckte var kombinationen mellan att använda Materialize och Vue. Materialize Selectbox syns inte automatiskt och det är ett måste att uppdatera sidan för att se selectboxen. Jag valde istället att använda mig av checkbox, för att inte förlora syftet med att ha en SPA. " />

        </div>
    </div>
</template>

<script>
//Importerar artikel-element-komponenten
import WideArticle from "../components/WideArticle.vue";
import Article from "../components/Article.vue";

export default {
    components: {
        WideArticle,
        Article
    }
}

</script>

<style scoped>

    .row{
        margin-top: 3em;
    }

</style>