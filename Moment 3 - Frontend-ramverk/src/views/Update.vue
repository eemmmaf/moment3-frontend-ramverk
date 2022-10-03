<template>
    <h2 class="white-text">Uppdatera podcast</h2>
    <!--Skriver ut att podcasten har lagts till-->
    <div id="success" class="white-text center-align" v-if="success">
        <p>{{success}} </p>
    </div>
    <div v-if="podcast">
        <form @submit.prevent="updatePodcast(podcast)">

            <div class="row">
                <div class="input-field col s12 m6">
                    <label for="name">Podcastens namn</label><br>
                    <input v-model="podcast.name" type="text" id="namn" name="namn" class="white-text">
                    <!-- Kontroll om felmeddelande och skriver ut om fel -->
                    <div class="white-text" v-if="nameError">
                        <span>{{nameError}}</span>
                    </div>
                </div>


                <div class="input-field col s12 m6">
                    <label for="category">Podcastens kategori</label><br>
                    <input v-model="podcast.category" type="text" id="category" name="category" class="white-text">
                    <!-- Kontroll om felmeddelande och skriver ut om fel -->
                    <div class="white-text" v-if="catError">
                        <span>{{catError}}</span>
                    </div>
                </div>
            </div>

            <div class="row">
                <!-- Antal medlemmar -->
                <div class="input-field col s12 m6">
                    <label for="members">Antal medlemmar</label><br>
                    <input v-model="podcast.members" type="number" name="members" id="members"
                        class="white-text"><br><br>
                    <!-- Kontroll om felmeddelande och skriver ut om fel -->
                    <div class="white-text" v-if="memberError">
                        <span>{{memberError}}</span>
                    </div>
                </div>

                <!--Checkbox för om podcasten släpps veckovis-->
                <div class="input-field col s12 m6">
                    <p>
                        <label for="weekly">
                            <p>Släpps podcasten veckovis?</p>
                            <input id="weekly" name="weekly" type="checkbox" v-model="podcast.weekly" />
                            <span>Ja</span>
                        </label>
                    </p>
                </div>
            </div>

            <!--Knapp för att lägga till-->
            <button class="btn waves-effect waves-light purple darken-4 btn-large" type="submit" name="action">Ändra
                <i class="material-icons right">check
                </i>
            </button>
        </form>
    </div>
    <div v-else>
        <p class="white-text center-align">Läser in podcast...</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            podcast: null,
            success: "",
            nameError: "",
            catError: "",
            memberError: ""
        }
    },
    methods: {
        //Lägger til podcast
        async updatePodcast(podcast) {
            if (podcast.name && podcast.category && podcast.members != null || "") {
                let updatedBody = {
                    id: this.id,
                    name: podcast.name,
                    category: podcast.category,
                    members: podcast.members,
                    weekly: podcast.weekly
                };

                //Fetch-anrop med metoden PUT
                const resp = await fetch("https://warm-chamber-88577.herokuapp.com/api/podcasts/" + this.id, {
                    method: "PUT",
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(updatedBody)
                });

                //Lägger till ett meddelande att podcasten har uppdaterats
                this.success = "Podcasten har uppdaterats";
                
                //Gör utskrift av felmeddelande tomma ifall det lyckas
                this.nameError = "";
                this.catError = "";
                this.memberError = "";

            } else {
                //Gör meddelandena tomma by default
                this.nameError = "";
                this.catError = "";
                this.memberError = "";
                //Lägger till ett meddelande att podcasten lagts till
                this.success = "";


                //Felmeddelande för namn
                if (!podcast.name) {
                    this.nameError = "Fyll i namn";
                }
                //Felmeddelande för kategori
                if (!podcast.category) {
                    this.catError = "Fyll i kategori";
                }
                //Felmeddelande för antal medlemmar
                if (!podcast.members) {
                    this.memberError = "Fyll i antal medlemmar";
                }
            }
        }

    },
    async mounted() {
        const resp = await fetch("https://warm-chamber-88577.herokuapp.com/api/podcasts/" + this.id);
        const data = await resp.json();
        this.podcast = data;
    }
}



</script>

<style scoped>

</style>