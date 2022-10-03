<!--View för "Om uppgiften"-->
<template>
    <WideArticle title="Om uppgiften"
        content="Till denna uppgift har ramverket Vue använts. Syftet med denna uppgift är att utvärdera och använda JavaScript-ramverket Vue.js för webbutveckling. Ett til syfte med uppgiften är att konsumera webbtjänsten som skapades i ett tidigare moment och publicera till lämplig webhost som inte är FTP-baserad. Ett gränssnitt har skapats för att kunna läsa ut, lägga till och radera podcasts. Ramverket Materialize har använts och Netlify har använts för publicering. " />
    <div class="row">
        <div class="grid-example col s12 m6">
            <Article title="Bra"
                content="Det var lätt att komma igång med Vue och det gick snabbt att installera. Något som jag verkligen uppskattar är att dela upp innehållet i komponenter. Arbetet blir mer organiserat och jag upplever att kod inte skrivs i onödan. Tack vare att det är uppdelat i komponenter känns koden mer lättläst och återanvändbar. Jag testade först att skapa webbplatsen med vanlig CSS-kod utan något css-ramverk, för att komma igång på riktigt med scoped css. Det var otroligt smidigt att inte behöva leta igenom en stor CSS-fil för att ändra på en komponent. Jag lade sedan till ramverket Materialize och tog bort en stor del av den scopade stylen. "
                content2="Vue har en bra dokumentation som är lätt att förstå. Jag tyckte även att läsanvisningarna och videosarna var väldigt informativa och det gjorde att det gick väldigt smidigt att komma igång. Något som jag också tycker är bra är Vues Routing-system för navigering. Det går att anpassa väldigt mycket och även göra dynamiskt. Något som var väldigt praktiskt och roligt var hur enkelt det var att göra en 404-sida. " />
        </div>
        <div class="grid-example col s12 m6">
            <Article title="Mindre bra"
                content="Det största problemet som jag upptäckte var kombinationen med att använda Materialize och Vue. Materialize Selectbox syns inte automatiskt och det är ett måste att uppdatera sidan för att se selectboxen. Jag valde istället att använda mig av checkbox, för att inte förlora syftet med att ha en Single-page-application. Jag försökte att söka efter lösningar på internet och ta hjälp av klasskompisar i samma situation, men jag hittade ingen lösning på problemet. I det kommande projektet kommer jag inte att använda mig av Materialize."
                content2="Bortsett från det problemet har det i allmänhet gått bra. Det har varit ett nytt tankesätt kring att arbeta med komponenter och jag tror att jag i framtida projekt kommer att ha en ännu bättre ordning på vilka komponenter som ska skapas och eventuellt dela upp det i ännu fler komponenter. Något som tog lite tid var att lista ut hur jag skulle skapa funktionaliteten för uppdatering. Till slut fick jag fram en lösning som fungerar och det kommer jag att kunna ta med till framtida projekt." />
        </div>
    </div>
    <WideArticle title="Slutsatser" content="Det har varit väldigt roligt att komma igång med Vue. Det svåraste problemet att lösa var hur jag skulle skapa funktionaliteten för uppdatering. Det roligaste var att kunna dela upp arbetet i komponenter och att det går att jobba dynamiskt på ett smidigt sätt, exempelvis skapandet av en 404-sida. Jag ser framemot att använda Vue i det kommande projektet, men då med ett annat CSS-ramverk än Materialize."/>
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
