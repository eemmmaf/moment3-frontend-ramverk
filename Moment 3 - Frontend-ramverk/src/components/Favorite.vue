<template>
    <tr>
        <td>{{podcast.name}}
        </td>
        <td>{{podcast.category}}</td>
        <td>{{podcast.members}}</td>
        <td>{{podcast.weekly}}</td>
        <button @click="$emit('delete')">Ta bort</button>
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
tbody tr {
    background-color: #1b141b;
    border-radius: 5px;
    border: 1px solid #4f3c4f;
    font-size: 1.6rem;
}

td {
    text-align: center;
    padding: 1.5rem;
}

tbody tr:hover {
    background-color: #332533;
}

button{
    margin-top: 1rem;
    color: white;
    border: 1px solid white;
    background-color: #2a1f2a;
    padding: 0.7rem;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>