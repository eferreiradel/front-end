<template>
    <div class="jumbotron">
        <div class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col col-md-12">
                        <div class="row d-flex justify-content-center mt-5 mt-md-2">
                            <div class="col col-md-6 col-lg-6 col-xl-6 justify-content-center  d-flex flex-column gap-1">
                                <h3>Trova il tuo</h3>
                                <h2>insegnante</h2>
                                <h1>ideale</h1>
                                <p>Online o in presenza,<br> scegli tra migliaia di insegnanti</p>
                                <div class="mt-5 col-12 col-md-8">
                                    <MainSelect></MainSelect>
                                </div>
                            </div>
                            <div class="img-container col-md-6 col-lg-6 col-xl-6 py-3 px-0 d-flex align-items-center">
                                <img class="img-fluid" src="../../../public/images/5894781.jpg" alt="">
                            </div>
                        </div>
                        <div class="text-center p-5">
                            <i class="fa-solid fa-angle-down"></i>
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
    import {store} from '../../store.js'

    export default {
    name: "Jumbotron",
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    components: {
        MainSelect,
        SubjectPannel
    },
    mounted(){
    }
    }
</script>

<style scoped lang="scss">  
    @import "../../style.scss";
    .jumbotron {
        h1 {
            font-size: 6rem;
            font-weight: 800;
            color: $color__secondary;
        }

        h2 {
            font-size: 3.8rem;
            font-weight: 700;
            color: $color__dark;
        }
        
        h3 {
            font-size: 3.8rem;
            font-weight: 700;
            color: $color__dark;
        }

        p {
            font-weight: 500;
            font-size: 1.2rem;
            color: $color__dark;
        }

        input {
            border: 1px solid black;
        }
        i {
            font-size: 3rem;
            color: $color__secondary;
            animation: move-up-down 1s linear infinite;
        }
        @keyframes move-up-down {
            0% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-20px);
            }
            100% {
                transform: translateY(0);
            }
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