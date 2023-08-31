<template>
    <Jumbotron />
    <SliderHome />
    <div class="container">
        <div class="row">
            <h1 class="fw-bolder mt-5">Imparare non è mai stato così facile!</h1>
            <div class="col d-md-flex">
                <div class="col-12 col-md-4 offset-md-2 d-flex flex-column justify-content-center p-5">
                    <h2>Cerca</h2>
                    <p>Consulta liberamente i profili e contatta l'insegnante che fa per te secondo le tue esigenze (tariffe, diploma, commenti, lezioni online o a domicilio).</p>
                </div>
                <div class="col-12 col-md-4 p-5">
                    <img class="img-fluid" src="../assets/gifs/search.gif" alt="">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col d-md-flex">
                <div class="d-none d-md-block col-12 col-md-4 offset-md-2 p-5">
                    <img class="img-fluid" src="../assets/gifs/message.gif" alt="">
                </div>
                <div class="col-12 col-md-4 d-flex flex-column justify-content-center p-5">
                    <h2>Contatta</h2>
                    <p>Veloci come un lampo, gli insegnanti ti rispondono in qualche ora! E se non trovi l'insegnante perfetto, la nostra equipe ti aiuterà nella ricerca.</p>
                </div>
                <div class="d-block d-md-none col-12 col-md-4 offset-md-2 p-5">
                    <img class="img-fluid" src="../assets/gifs/message.gif" alt="">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col d-md-flex">
                <div class="col-12 col-md-4 offset-md-2 d-flex flex-column justify-content-center p-5">
                    <h2>Prenota</h2>
                    <p>Discuti e programma le lezioni con il tuo insegnante o istruttore direttamente tramite la messaggeria del tuo account.</p>
                </div>
                <div class="col-12 col-md-4 p-5">
                    <img class="img-fluid" src="../assets/gifs/calendar.gif" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Jumbotron from '../components/layouts/Jumbotron.vue'
    import SliderHome from '../components/ui/SliderHome.vue'

    export default {
        name: "AppHome",
        components: {
            Jumbotron,
            SliderHome
        }
    }
</script>
<style></style>