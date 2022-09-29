<template>
    <section id="table-section">
        <h2 class="white-text center-align">Mina favorit-podcast</h2>
        <table class="white-text purple darken-4 highlight responsive-table">
            <thead>
                <tr>
                    <th>Namn</th>
                    <th>Kategori</th>
                    <th>Antal medlemmar</th>
                    <th>Släpps veckovis</th>
                </tr>
            </thead>
            <tbody>

                <Podcast @delete="deletePodcast(podcast.id)" v-for="podcast in podcasts" :podcast="podcast"
                    :key="podcast.id" />
            </tbody>
        </table>
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
        async getPodcasts() {
            const resp = await fetch("https://warm-chamber-88577.herokuapp.com/api/podcasts");
            const data = await resp.json();
            this.podcasts = data;
            for (let i = 0; i < data.length; i++) {
                if (data[i].weekly == true) {
                    data[i].weekly = "Ja";
                } else {
                    data[i].weekly = "Nej";
                }
            }
        },
        async deletePodcast(id) {
            const resp = await fetch("https://warm-chamber-88577.herokuapp.com/api/podcasts/" + id, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json"
                }
            });

            const data = await resp.json();

            this.deleted = data[0];
            this.getPodcasts();
        }
    },
    mounted() {
        this.getPodcasts();
    }
}
</script>




<style scoped>
    .section{
        margin-top: 2em;
    }

</style>