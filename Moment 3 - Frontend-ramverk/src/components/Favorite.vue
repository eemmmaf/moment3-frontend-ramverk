<!--Komponent för utskrift av podcasts i tabellen-->
<template>
    <tr>
        <td>{{podcast.name}}
        </td>
        <td>{{podcast.category}}</td>
        <td>{{podcast.members}}</td>
        <td>{{podcast.weekly}}</td>
        <!--Knappen för att ta bort som skrivs ut i tabellen-->
        <td><button @click="$emit('delete')" class="purple lighten-4 waves-effect waves-dark">Ta bort<i
                    class="tiny material-icons right">delete</i></button></td>
        <td>
            <Router-link :to="{name: 'Update', params: { id: podcast.id } }" class="white-text"> Uppdatera </Router-link>
        </td>
    </tr>
</template>

<script>
export default {
    props: {
        podcast: Object
    }
}

</script>

<style scoped>
    td a{
        text-decoration: underline;
    }

</style>