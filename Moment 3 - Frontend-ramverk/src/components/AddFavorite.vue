<template>
    <div class="row">
        <form @submit.prevent="addPodcast()">
            <!--Skriver ut felmeddelande -->
            <div class="center-align white-text" v-if="error.length">
                <p>Fyll i följande fel:</p>
                <ul>
                    <li v-for="e in error" v-bind:key="e.id">
                        {{e}}</li>
                </ul>
            </div>
            <!--Skriver ut att podcasten har lagts till-->
            <div id="success" class="white-text center-align" v-if="success">
                <p>{{success}} </p>
            </div>


            <div class="row">
                <div class="input-field col s12 m6">
                    <!--NAMN-->
                    <label for="name">Podcastens namn:</label><br>
                    <input v-model="name" type="text" name="name" id="name" class="white-text"><br><br>

                    <!-- Kontroll om felmeddelande -->
                    <div class="white-text" v-if="nameError">
                        <span>{{nameError}}</span>
                    </div>
                </div>


                <!--KATEGORI-->
                <div class="input-field col s12 m6">
                    <label for="category">Kategori:</label><br>
                    <input v-model="category" type="text" name="category" id="category" class="white-text"><br><br>

                    <!-- Kontroll om felmeddelande -->
                    <div class="white-text" v-if="catError">
                        <span>{{catError}}</span>
                    </div>
                </div>
            </div>


            <!--Flexcontainer-->
            <div class="row">
                <div class="input-field col s12 m6">
                    <!-- ANTAL MEDLEMMAR -->
                    <label for="members">Antal medlemmar</label><br>
                    <input v-model="members" type="number" name="members" id="members" class="white-text"><br><br>

                    <!-- Kontroll om felmeddelande -->
                    <div class="white-text" v-if="memberError">
                        <span>{{memberError}}</span>
                    </div>
                </div>


                <div class="input-field col s12 m6">
                    <label for="weekly">Släpps veckovis</label><br>
                    <select v-model="weekly" name="weekly" id="weekly" class="white-text">
                        <option value="" disabled selected>Ja eller nej</option>
                        <option value="1">Ja</option>
                        <option value="0">Nej</option>
                    </select> <br><br>
                    <!-- Kontroll om felmeddelande -->
                    <div class="white-text" v-if="weeklyError">
                        <span>{{weeklyError}}</span>
                    </div>
                </div>
            </div>




            <button class="btn waves-effect waves-light purple darken-4 btn-large" type="submit" name="action">Lägg till
                <i class="material-icons right">add_circle</i>
            </button>
        </form>
    </div>
</template>

<script>
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
});  


export default {
    data() {
        return {
            name: "",
            category: "",
            members: "",
            weekly: null,
            error: [],
            success: "",
            nameError: "",
            catError: "",
            memberError: "",
            weeklyError: ""
        }
    },
    methods: {
        async addPodcast() {
            if (this.name && this.category && this.weekly && this.members != null || "") {
                let favoriteBody = {
                    name: this.name,
                    category: this.category,
                    members: this.members,
                    weekly: this.weekly
                };
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
                this.weekly = "";
                //Läser in listan på nytt
                this.$emit("addedPodcast");

                this.nameError = "";
                this.catError = "";
                this.memberError = "";
                this.weeklyError = "";
                //Tömmer error-arrayen om allt är ifyllt, ifall något fanns där innan
                this.error = [];
                //Lägger till ett meddelande att podcasten lagts till
                this.success = "Podcasten har lagts till";
            }

            //Skriver ut felmeddelande om allt inte är ifyllt
            else {
                this.nameError = "";
                this.catError = "";
                this.memberError = "";
                this.weeklyError = "";
                this.error = [];
                this.success = "";
                if (!this.name) {
                    this.error.push("Namn måste fyllas i");
                    this.nameError = "Fyll i namn";
                }
                if (!this.category) {
                    this.error.push("Kategori måste fyllas i");
                    this.catError = "Fyll i kategori";
                }
                if (!this.members) {
                    this.error.push("Antal medlemmar måste fyllas i");
                    this.memberError = "Fyll i antal medlemmar";
                }
                if (!this.weekly) {
                    this.error.push("Fyll i om podcasten släpps varje vecka");
                    this.weeklyError = "Välj Ja eller Nej";
                }
            }
        }
    },
}

</script>


<style scoped>

</style>
    