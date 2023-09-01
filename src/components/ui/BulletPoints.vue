<template>
    <div class="container">
        <div class="row">
            <h1 class="text-center fw-bolder my-margin-text">Imparare non è mai stato così facile!</h1>
            <div class="col d-lg-flex">
                <div class="col-12 col-lg-4 offset-lg-2 d-flex flex-column justify-content-center p-5">
                    <h2>Cerca</h2>
                    <p>Consulta liberamente i profili e contatta l'insegnante che fa per te secondo le tue esigenze (tariffe, diploma, commenti, lezioni online o a domicilio).</p>
                </div>
                <div class="col-12 col-lg-4 p-5">
                    <img class="img-fluid" src="../../assets/gifs/search.gif" alt="">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col d-lg-flex">
                <div class="d-none d-lg-block col-12 col-lg-4 offset-lg-2 p-5">
                    <img class="img-fluid" src="../../assets/gifs/message.gif" alt="">
                </div>
                <div class="col-12 col-lg-4 d-flex flex-column justify-content-center p-5">
                    <h2>Contatta</h2>
                    <p>Veloci come un lampo, gli insegnanti ti rispondono in qualche ora! E se non trovi l'insegnante perfetto, la nostra equipe ti aiuterà nella ricerca.</p>
                </div>
                <div class="d-block d-lg-none col-12 col-lg-4 offset-lg-2 p-5">
                    <img class="img-fluid" src="../../assets/gifs/message.gif" alt="">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col d-lg-flex">
                <div class="col-12 col-lg-4 offset-lg-2 d-flex flex-column justify-content-center p-5">
                    <h2>Prenota</h2>
                    <p>Discuti e programma le lezioni con il tuo insegnante o istruttore direttamente tramite la messaggeria del tuo account.</p>
                </div>
                <div class="col-12 col-lg-4 p-5">
                    <img class="img-fluid" src="../../assets/gifs/calendar.gif" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BulletPoints",
        data() {
            return {
                
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "../../style.scss";

    .my-margin-text {
        margin-bottom: 5rem;
    }

    h1 {
        color: $color__dark;
    }
</style>