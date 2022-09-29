<template>
    <article class="quote">
        <p class="white-text">“Listening to podcast, reading a book, listening to an aduibook and watching films isn't waste of time. It's
            how somebody becomes wise!”
            <em>― Deyth Banger</em>
        </p>
    </article>
</template>


<style scoped>
.quote {
    position: absolute;
    top: 20%;
    left: 10%;
    border: 2px solid #4a148c;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    padding: 2rem;
    font-family: 'Manrope', sans-serif;
    max-width: 400px;
    width: 100%;
}

@media only screen and (max-width: 900px) {
    .quote {
        top: 16%;
        max-width: 50%;
    }
}

@media only screen and (max-width: 800px){
    .quote{
        display: none;
    }
}
</style>