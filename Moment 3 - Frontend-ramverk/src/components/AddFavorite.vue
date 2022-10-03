<template>
    <div class="row">
        <form @submit.prevent="addPodcast()">
            <!--Skriver ut felmeddelande med alla fel -->
            <div class="center-align white-text" v-if="error.length">
                <p>Fyll i följande fel:</p>
                <ul>
                    <!--Loopar igenom fel och skriver ut-->
                    <li v-for="e in error" v-bind:key="e.id">
                        {{e}}</li>
                </ul>
            </div>
            <!--Skriver ut att podcasten har lagts till-->
            <div id="success" class="white-text center-align" v-if="success">
                <p>{{success}} </p>
            </div>


            <div class="row">
                <!--Podcastens namn-->
                <div class="input-field col s12 m6">
                    <label for="name">Podcastens namn:</label><br>
                    <input v-model="name" type="text" name="name" id="name" class="white-text"><br><br>

                    <!-- Kontroll om felmeddelande och skriver ut om fel -->
                    <div class="white-text" v-if="nameError">
                        <span>{{nameError}}</span>
                    </div>
                </div>


                <!--Podcastens kategori-->
                <div class="input-field col s12 m6">
                    <label for="category">Kategori:</label><br>
                    <input v-model="category" type="text" name="category" id="category" class="white-text"><br><br>


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
                    <input v-model="members" type="number" name="members" id="members" class="white-text"><br><br>

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
                            <input v-model="weekly" id="weekly" name="weekly" type="checkbox" value="false" />
                            <span>Ja</span>
                        </label>
                    </p>
                </div>
            </div>

            <!--Knapp för att lägga till-->
            <button class="btn waves-effect waves-light purple darken-4 btn-large" type="submit" name="action">Lägg till
                <i class="material-icons right">add_circle</i>
            </button>
        </form>
        <!-- Slut på formulär -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            category: "",
            members: "",
            weekly: false,
            error: [],
            success: "",
            nameError: "",
            catError: "",
            memberError: ""
        }
    },
    methods: {
        //Lägger til podcast
        async addPodcast() {
            if (this.name && this.category && this.members != null || "") {
                let favoriteBody = {
                    name: this.name,
                    category: this.category,
                    members: this.members,
                    weekly: this.weekly
                };
                //Fetch-anrop med metoden POST
                const resp = await fetch("https://warm-chamber-88577.herokuapp.com/api/podcasts", {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(favoriteBody)
                });

                //Tömmer input-fält
                this.name = "";
                this.category = "";
                this.members = "";
                this.weekly = false;
                //Läser in listan på nytt
                this.$emit("addedPodcast");

                //Gör utskrift av felmeddelande tomma ifall det lyckas
                this.nameError = "";
                this.catError = "";
                this.memberError = "";
                //Tömmer error-arrayen om allt är ifyllt, ifall något fanns där innan
                this.error = [];
                //Lägger till ett meddelande att podcasten lagts till
                this.success = "Podcasten har lagts till";
            }

            //Skriver ut felmeddelande om allt inte är ifyllt
            else {
                //Gör meddelandena tomma by default
                this.nameError = "";
                this.catError = "";
                this.memberError = "";
                this.error = [];
                this.success = "";
                this.weekly = false;

                //Felmeddelande för namn
                if (!this.name) {
                    this.error.push("Namn måste fyllas i");
                    this.nameError = "Fyll i namn";
                }
                //Felmeddelande för kategori
                if (!this.category) {
                    this.error.push("Kategori måste fyllas i");
                    this.catError = "Fyll i kategori";
                }
                //Felmeddelande för antal medlemmar
                if (!this.members) {
                    this.error.push("Antal medlemmar måste fyllas i");
                    this.memberError = "Fyll i antal medlemmar";
                }
            }

        }
    }
}

</script>

    