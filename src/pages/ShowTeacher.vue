<template>
    <div v-if="teacherData" class="container">
        <div class="d-flex flex-wrap">
            <div class="my-bgGreen my-rounded col-12 col-md-6 col-lg-4 mt-3">
                <div class="d-flex flex-column align-items-center text-white py-4 gap-3">
                    <img :src="teacherData.profile_image" class="img-fluid rounded-circle mt-3 border border-3 border-white" alt="Nome Cognome">
                    <h3>{{ teacherData.name }} {{ teacherData.surname }}</h3>
                    <p class="card-text m-0">
                        <span :class="teacherData.avg_vote >= 1 ? 'fa fa-star fs-5 checked' : 'fa fa-star fs-5'"></span>
                        <span :class="teacherData.avg_vote >= 2 ? 'fa fa-star fs-4 checked' : 'fa fa-star fs-4'"></span>
                        <span :class="teacherData.avg_vote >= 3 ? 'fa fa-star fs-3 checked' : 'fa fa-star fs-3'"></span>
                        <span :class="teacherData.avg_vote >= 4 ? 'fa fa-star fs-4 checked' : 'fa fa-star fs-4'"></span>
                        <span :class="teacherData.avg_vote >= 5 ? 'fa fa-star fs-5 checked' : 'fa fa-star fs-5'"></span>
                    </p>
                    <div class="d-flex gap-3 bg-light text-dark rounded-pill py-2 px-5 justify-content-around">
                        <div class="d-flex flex-column align-items-center p-2">
                            <h5>Città</h5>
                            <span>{{ teacherData.city }}</span>
                        </div>
                        <div class="d-flex flex-column align-items-center p-2">
                            <h5>Prezzo</h5>
                            <span>{{ teacherData.price_for_hour }}€/ora</span>
                        </div>
                    </div>
                    <div class="d-flex text-dark flex-wrap justify-content-center align-items-center gap-2">
                        <template v-for="subject in teacherData.subjects">
                            <div class="subject bg-light py-2 px-3 rounded-pill border">{{subject.name}}</div>
                        </template>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column gap-5 pt-5 ps-5 pe-5 col-12 col-md-6 col-lg-8 mt-3">
                <div class="d-flex flex-column gap-2">
                    <h3 class="ps-4">Luogo del corso</h3>
                    <div class="d-flex flex-wrap gap-2">
                        <div v-if="teacherData.is_live_lesson" class="rounded-pill border px-3 py-2">
                            In presenza
                        </div>
                        <div v-if="teacherData.is_remote_lesson" class="rounded-pill border px-3 py-2">
                            Via webcam
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column gap-2">
                    <h3 class="ps-4">Riguardo {{ teacherData.name }}</h3>
                    <p class="m-0 w-100 my-rounded border p-4">
                        {{ teacherData.description }}
                    </p>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column gap-5 py-5 col-12">
            <div class="d-flex flex-column gap-2">
                    <h3 class="ps-5">Recensioni</h3>
                    <div class="d-flex flex-column gap-4">
                        <div v-for="review in teacherData.review" class="m-0 w-100 my-rounded border p-4 px-5">
                            <h5>{{ review.name }}</h5>
                            <p class="m-0">{{ review.review_text }}</p>
                        </div>
                    </div>
                </div>
        </div>
        <button class="btn text-light position-fixed bottom-0 w-100 container my-3 fs-3 py-3 my-rounded my-bgGreen">CONTATTA {{ teacherData.name }}</button>

    </div>
    <div v-else class="position-absolute top-50 start-50 translate-middle">
        Caricamento dati profilo...
    </div>
</template>

<script>
    import {store} from '../store'

    export default {
        name: "ShowTeacher",
        data() {
            return {
                store,
                teacherData: null
            }
        },
        methods:{ 

        },
        mounted(){
            store.getUserById(this.$route.params.userId).then(userData => {
                this.teacherData = userData;
                console.log(this.teacherData);
            });
        }
    }
</script>

<style scoped style lang="scss">
    @import "../style.scss";

    .my-bgGreen{
        background-color: $color__primary;
    }

    img{
        width: 150px !important;
    }

    .my-rounded{
        border-radius: 3rem;
    }
</style>