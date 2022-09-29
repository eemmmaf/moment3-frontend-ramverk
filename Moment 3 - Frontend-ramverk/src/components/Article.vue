<template>
        <article class="purple darken-4 white-text">
            <h2 class="center-align">{{title}}</h2>
            <p>{{content}}</p>
            <p>{{content2}}</p>
        </article>
</template>

<script>
export default {
    name: "Article",
    props: {
        title: String,
        content: String,
        content2: String
    }
}
</script>

<style scoped>

article {
    padding: 0.5em;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

h2{
    margin-top:0.2em;
    font-size: 2.5em;
}



@media only screen and (max-width: 800px){
    article{
        margin-top: 3rem;
        max-width: 800px;
        width: 100%;
    }
}
</style>