# Moment 3 - Frontend-ramverk
Moment 3 - Frontend-ramverk created by GitHub Classroom, Emma Forslund

Detta repo innehåller filerna till uppgiften Moment 3 - Frontend-ramverk. Webbapplikationen har tre länkar i navigeringen. De tre sidor som länkas till är en startsida, en sida med formulär samt tabell och en info-sida.
Denna webbplats representerar mitt fritidsintresse, Podcasts. Applikationen har full CRUD(Create, Read, Update, Delete)-funktionalitet och den konsumerar webbtjänsten som jag skapade i ett tidigare moment. 

## Länk till webbplats
https://dt193g-moment3.netlify.app/

## Webbapplikationen 
Detta är en Single-Page-Application(SPA) som är skapad med VUE och CSS-ramverket Materialize. Den innehåller en banner där bildmaterialet har hämtats från Pexels och bildbehandlats med Photopea. 

### Views
4 olika view har skapats:
* About.vue - I denna view beskriver jag hur arbetet har gått. Här används de två olika komponenterna för artikel-element.  
* FavoritesView.vue - Här skrivs table-elementet ut med tabellens header och rubriker och de lagrade Podcasten hämtas. Här finns funktionerna för att hämta podcast, ta bort podcast och hämta enskild utifrån dess id.
* HomeView.vue - Applikationens startsida. Här importeras bannern och artikel-komponent. 
* NotFound.vue - Om besökaren skriver fel och får felkoden 404 ska denna sida visas. Det funkar dock inte för tillfället när den är uppladdad med Netlify, då Netlify's egna felkod visas istället. 
* Update.vue - Denna sida visas när använder trycker på 'uppdatera' i tabellen. Här finns ett formulär där använder kan uppdatera den klickade podcasten. Här finns funktioner för att hämta information om den enskilda podcasten och uppdatera den.

### Komponenter
För att dela upp arbetet har komponenter använts. Dessa hittat i src-mappen, i mappen components. De komponenter som skapats är:
* Addfavorite.vue - Formulär och funktion för att lägga till podcast.
* Articlue.vue - Artikel-element med props.
* Banner.vue - Innehåller endast en bild inuti "<template>"
* Favorite.vue - Komponent för utskrift av podcasts i tabellen. Här skapas knapparna som tar bort en podcast och länkar till uppdatering av enskild podcast
* Footer.vue - Komponent för footer
* Header.vue - Komponent för header. Här importeras RouterLink från vue-router. Innehåller navigeringen. 
* WideArticle.vue - Artikel-element med props. 
  
 

