<template>
        <article>
            <h2>{{title}}</h2>
            <p>{{content}}</p>
        </article>
</template>

<script>
export default {
    name: "Article",
    props: {
        title: String,
        content: String
    }
}
</script>

<style scoped>

article {
    background-color: #1b141b;
    max-width: 550px;
    width: 100%;
    padding: 2rem;
}

h2 {
    font-size: 2.6rem;
    font-family: 'Manrope', sans-serif;
}

p {
    font-size: 1.8rem;
    font-family: 'Open-sans', sans-serif;
}

@media only screen and (max-width: 800px){
    article{
        margin-top: 3rem;
        max-width: 800px;
        width: 100%;
    }
}
</style>