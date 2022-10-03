<!--Komponent för artikel utan bakgrundsfärg. Har en titel och en prop för content-->
<template>
    <article class="white-text">
        <h2 class="center">{{title}}</h2>
        <p>{{content}}</p>
    </article>
</template>

<script>
export default {
    name: "WideArticle",
    props: {
        title: String,
        content: String
    }
}
</script>

<style scoped>
    article{
        margin-top:3em;
    }

</style>