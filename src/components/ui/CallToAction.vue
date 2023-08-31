<template>
    <div class="container my-5">
        <div class="row col-8 offset-2">
            <div class="my-cta-container p-5">
                <div id="lg">
                    <h3 class="d-none d-lg-block">Anche tu,<br> diventa un super insegnante</h3>
                    <p class="mt-4 d-none d-lg-block">Condividi le tue conoscenze, vivi della tua passione!</p>
                </div>
                <div id="sm">
                    <h3 class="d-block d-lg-none">Anche tu,<br> diventa un super insegnante</h3>
                    <p class="mt-4 d-block d-lg-none">Condividi le tue conoscenze, vivi della tua passione!</p>
                </div>
                <a href="http://127.0.0.1:8000/register">
                    <button class="button" type="button">
                        Registrati
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "CallToAction",
        data() {
            return {
                
            }
        },
        props: {
            btnText: String
        }
    }
</script>

<style scoped lang="scss">
    @import "../../style.scss";

    .my-cta-container {
        background-color: $color__primary;
        border-radius: 25px;
        background-image: url(src/assets/images/northlandscapes-iceland-dark-light-07.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: right;
        #lg h3 {
            font-size: 3rem;
            color: white;
            font-weight: 800;
        }

        #lg p {
            font-size: 1.5rem;
            color: white;
            font-weight: 600;
        }

        #sm h3 {
            font-size: 1.5rem;
            color: rgb(255, 255, 255);
            font-weight: 800;
        }

        #sm p {
            font-size: 1rem;
            color: white;
        }

        button {
            background-color: $color__primary;
            border: 1px solid #000;
            color: black;
            padding: 1rem 2rem;
            border-radius: 25px;
            margin-top: 2rem;
            transition: 0.3s;
        }

        button:hover {
            background-color: $color__light !important;
            color: #000;
            border: 1px solid #000;
        }
    }
</style>