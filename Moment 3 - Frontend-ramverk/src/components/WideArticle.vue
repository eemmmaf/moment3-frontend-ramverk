<template>
    <article class="white-text">
        <h2>{{title}}</h2>
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

</style>