<!--View där podcastens skrivs ut och tabellen-->
<template>
    <section id="table-section">
        <h2 class="white-text center-align">Mina favorit-podcast</h2>
        <!--Tabell -->
        <table class="white-text purple darken-4 highlight responsive-table">
            <thead>
                <tr>
                    <th>Namn</th>
                    <th>Kategori</th>
                    <th>Antal medlemmar</th>
                    <th>Släpps veckovis</th>
                    <th>Ta bort</th>
                    <th>Uppdatera</th>
                </tr>
            </thead>
            <tbody>

                <Podcast @getId="getId(podcast.id)" @delete="deletePodcast(podcast.id)" v-for="podcast in podcasts"
                    :podcast="podcast" :key="podcast.id" />
            </tbody>
        </table>
        <!--Text för bekräftelse att podcasten tagits bort skrivs ut-->
        <div id="deleted" class="white-text center-align" v-if="deleted">
            <p>{{deleted}}</p>
        </div>
    </section>

    <div class="section">
        <section id="form-section">
            <h2 class="white-text center-align">Lägg till podcast</h2>
            <AddPodcast @addedPodcast="getPodcasts()" />
        </section>
    </div>
</template>


<script>
import Podcast from '../components/Favorite.vue';
import AddPodcast from '../components/AddFavorite.vue';

export default {
    data() {
        return {
            podcasts: [],
            deleted: ""
        }
    },
    components: {
        Podcast,
        AddPodcast
    },
    methods: {
        //Hämtar alla podcasts
        async getPodcasts() {
            const resp = await fetch("https://warm-chamber-88577.herokuapp.com/api/podcasts");
            const data = await resp.json();
            this.podcasts = data;
            //Skriver ut "Ja" för true och "Nej" för false, istället för 1:or och 0:or
            for (let i = 0; i < data.length; i++) {
                if (data[i].weekly == true) {
                    data[i].weekly = "Ja";
                } else {
                    data[i].weekly = "Nej";
                }
            }
        },
        //Metod för att ta bort podcast
        async deletePodcast(id) {
            const resp = await fetch("https://warm-chamber-88577.herokuapp.com/api/podcasts/" + id, {
                //Använder metoden DELETE
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json"
                }
            });

            const data = await resp.json();

            //Sparar meddelande från apiet. Meddelandet om att podcasten har tagits bort
            this.deleted = data[0];
            //Hämtar podcasterna på nytt
            this.getPodcasts();
        },
        //Hämtar klickad podcast
        async getId(id) {
            const resp = await fetch("https://warm-chamber-88577.herokuapp.com/api/podcasts/" + id);
            const data = await resp.json();
            console.log(data);

            let getName = data.name;
            let getCat = data.category;
            let getMember = data.members;
            let getWeekly = data.weekly;

            this.name = getName;
            this.category = getCat;
            this.members = getMember;
            this.weekly = getWeekly;
        }
    },
    mounted() {
        this.getPodcasts();
    }
}
</script>




<style scoped>
.section {
    margin-top: 2em;
}
</style>