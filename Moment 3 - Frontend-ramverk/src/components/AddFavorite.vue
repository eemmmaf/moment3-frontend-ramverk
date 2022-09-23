<template>
    <form @submit.prevent="addPodcast()">
        <div class="flex-form">
            <div>
                <label for="name">Podcastens namn:</label><br>
                <input v-model="name" type="text" name="name" id="name"><br><br>
            </div>
            <div>
                <label for="category">Kategori:</label><br>
                <input v-model="category" type="text" name="category" id="category"><br><br>
            </div>
        </div>
        <div class="flex-form">
            <div>
                <label for="members">Antal medlemmar</label><br>
                <input v-model="members" type="number" name="members" id="members"><br><br>
            </div>
            <div>
                <label for="weekly">Släpps veckovis</label><br>
                <select v-model="weekly" name="weekly" id="weekly">
                    <option value="1">Ja</option>
                    <option value="0">Nej</option>
                </select> <br><br>
            </div>
        </div>
        <input type="submit" value="Lägg till">
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: "Podcastens namn",
            category: "Kategori",
            members: 1,
            weekly: 1
        }
    },
    methods: {
        async addPodcast() {
            if (this.name && this.category && this.weekly && this.members != null) {
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
                const data = await resp.json();
                //Tömmer input-fält
                this.name = "";
                this.category = "";
                this.members = "";
                this.weekly = "";
                //Läser in listan på nytt
                this.$emit("addedPodcast");
            }
        }
    }
}
</script>

<style scoped>
form {
    max-width: 800px;
    width: 100%;
    margin: auto;
    padding: 1.5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border: 1px solid #301b33;
}

input[type="submit"] {
    background-color: #ea80fc;
    max-width: 350px;
    width: 100%;
    margin: auto;
    display: block;
    padding: 1rem;
    border: none;
    border-radius: 7px;
    font-family: 'Manrope', sans-serif;
    font-weight: bold;
    font-size: 1.6rem;
    cursor: pointer;
    margin-top: 3rem;
    margin-bottom: 2rem;
}

input[type="submit"]:hover {
    background-color: #9e5ea9;
}

input[type="text"],
input[type="number"] {
    background-color: #332533;
    max-width: 350px;
    width: 100%;
    padding: 1rem 0.5rem;
    border: 1px solid #8c6c90;
    color: white;
    font-family: 'Manrope', sans-serif;
}

select {
    background-color: #332533;
    border: 1px solid #8c6c90;
    color: white;
    font-family: 'Manrope', sans-serif;
    max-width: 350px;
    width: 100%;
    padding: 1rem 0.5rem;
}

label {
    color: white;
    font-size: 1.8rem;
    font-family: 'Manrope', sans-serif;
}

/* Flex-containern för namn och kategori i formuläret*/
.flex-form {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    flex-wrap: wrap;
}

.flex-form div {
    max-width: 350px;
    width: 100%;
}

@media only screen and (max-width: 731px) {

    .flex-form {
        justify-content: center;
        margin-top: 0;
    }

    .flex-form div {
        margin: auto;
        width: 100%;
    }

    input[type="text"],
    input[type="number"],
    select {
        max-width: 700px;
        width: 100%;
    }

    .flex-form div {
        max-width: 700px;
        width: 100%;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }
    
}
</style>
    