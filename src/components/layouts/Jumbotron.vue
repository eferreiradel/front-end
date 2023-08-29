<template>
    <div class="jumbotron mt-5 pb-5">
        <div class="container">
            <div class="row">
                <h3>Trova</h3>
                <h2>L'INSEGNANTE</h2>
                <h1>ideale</h1>
                <p>Online o in presenza, scegli tra migliaia di insegnanti</p>
            </div>
            <input class="mt-5 form-control form-control-lg" type="text" placeholder="Che cosa vuoi imparare?">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Jumbotron",
        data() {
            return {

            }
        }
    }
</script>

<style scoped lang="scss">  
    @import "../../style.scss";
    .jumbotron {
        h1 {
            font-size: 5rem;
            font-weight: 700;
            color: $color__primary;
        }

        h2 {
            font-size: 2.5rem;
        }
        
        h3 {
            font-size: 2.5rem;
        }

        input {
            border: 1px solid black;
        }
    }    
</style>