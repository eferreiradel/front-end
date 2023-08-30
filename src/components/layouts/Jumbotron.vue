<template>
    <div class="jumbotron py-5">
        <div class="container-fluid">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col col-md-12 col-lg-10 col-xl-8">
                        <div class="row d-flex justify-content-center">
                            <div class="col col-md-6 col-lg-6 col-xl-6 justify-content-center  d-flex flex-column gap-1">
                                <h3>Trova</h3>
                                <h2>L'INSEGNANTE</h2>
                                <h1>ideale</h1>
                                <p>Online o in presenza, scegli tra migliaia di insegnanti</p>
                                <div class="mt-5">
                                    <MainSelect></MainSelect>
                                </div>
                            </div>
                            <div class="img-container col-md-6 col-lg-6 col-xl-6 py-3 px-0 d-flex align-items-center">
                                <img class="img-fluid" src="../../../public/images/5894781.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MainSelect from "../ui/MainSelect.Vue"
    import SubjectPannel from "../ui/SubjectPannel.vue";
    export default {
    name: "Jumbotron",
    data() {
        return {
            
        }
    },
    methods: {

    },
    components: {
        MainSelect,
        SubjectPannel
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
    .img-container {
        // width: 100%;
        // height: auto;
        img {
            width: 100%;
            object-fit: cover;
        }
    }
</style>