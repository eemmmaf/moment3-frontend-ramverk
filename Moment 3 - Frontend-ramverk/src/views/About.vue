<!--View för "Om uppgiften"-->
<template>
    <WideArticle title="Om uppgiften"
        content="Till denna uppgift har ramverket Vue använts. Syftet med denna uppgift är att utvärdera och använda JavaScript-ramverket Vue.js för webbutveckling. Ett til syfte med uppgiften är att konsumera webbtjänsten som skapades i ett tidigare moment och publicera till lämplig webhost som inte är FTP-baserad. Ett gränssnitt har skapats för att kunna läsa ut, lägga till och radera podcasts. " />
    <div class="row">
        <div class="grid-example col s12 m6">
            <Article title="Bra"
                content="Det var lätt att komma igång med Vue och det gick snabbt att installera. Något som jag verkligen uppskattar är att dela upp innehållet i komponenter. Arbetet blir mer organiserat och jag upplever att kod inte skrivs i onödan. Tack vare att det är uppdelat i komponenter känns koden mer lättläst och återanvändbar. Jag testade först att skapa webbplatsen med vanlig CSS-kod utan något css-ramverk, för att komma igång på riktigt med scoped css. Det var otroligt smidigt att inte behöva leta igenom en stor CSS-fil för att ändra på en komponent. Jag lade sedan till ramverket Materialize och tog bort en stor del av den scopade stylen. "
                content2="Vue har en bra dokumentation som är lätt att förstå. Jag tyckte även att läsanvisningarna och videosarna var väldigt informativa och det gjorde att det gick väldigt smidigt att komma igång. " />
        </div>
        <div class="grid-example col s12 m6">
            <Article title="Mindre bra"
                content="Det största problemet som jag upptäckte var kombinationen med att använda Materialize och Vue. Materialize Selectbox syns inte automatiskt och det är ett måste att uppdatera sidan för att se selectboxen. Jag valde istället att använda mig av checkbox, för att inte förlora syftet med att ha en Single-page-application. Jag försökte att söka efter lösningar på internet och ta hjälp av klasskompisar i samma situation, men jag hittade ingen lösning på problemet. I det kommande projektet kommer jag inte att använda mig av Materialize."
                content2="Bortsett från det problemet har det i allmänhet gått bra. Det har varit ett nytt tankesätt kring att arbeta med komponenter. Något som jag upptäckte var att det inte gick att validera koden lika enkelt som med vanlig HTML-kod. Däremot så valideras koden automatiskt i Visual Studio Code och då kan felet upptäckas direkt." />
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
.row {
    margin-top: 3em;
}
</style>