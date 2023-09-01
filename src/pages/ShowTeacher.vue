<template>
    <div v-if="teacherData" class="container">
        <div class="d-flex flex-column flex-md-row flex-wrap mt-5">
            <div class="order-2 order-md-1 d-flex flex-column gap-5 col-12 col-md-6 col-lg-6 mt-3">
                <div class="d-flex ps-4 flex-column gap-2">
                    <!-- <h5 class="p-4">{{ teacherData.name }} {{ teacherData.surname }}</h5> -->
                    <div class="m-0 w-100  p-4 my-rounded border">
                        <span>Descrizione</span>
                        <h1>{{ teacherData.description }}</h1>
                    </div>
                    <h3 class="mt-3 p-4">Luogo del corso</h3>
                    <div class="d-flex flex-wrap gap-2">
                        <div v-if="teacherData.is_live_lesson" class="rounded-pill border px-3 py-2">
                            <i class="fa-solid fa-location-pin"></i> In presenza
                        </div>
                        <div v-if="teacherData.is_remote_lesson" class="rounded-pill border px-3 py-2">
                            <i class="fa-solid fa-video"></i> Via webcam
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="order-1 order-md-2 col-md-6">
                <div class="my-bgGreen my-rounded col-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2 mt-3">
                    <div class="d-flex flex-column align-items-center text-white py-4 gap-3">
                        <img :src="teacherData.profile_image" class="img-fluid rounded-circle mt-3 border border-3 border-white" alt="Nome Cognome">
                        <h2>{{ teacherData.name }} {{ teacherData.surname }}</h2>
                        <p class="card-text m-0">
                            <span :class="teacherData.avg_vote >= 1 ? 'fa fa-star fs-5 checked' : 'fa fa-star fs-5'"></span>
                            <span :class="teacherData.avg_vote >= 2 ? 'fa fa-star fs-4 checked' : 'fa fa-star fs-4'"></span>
                            <span :class="teacherData.avg_vote >= 3 ? 'fa fa-star fs-3 checked' : 'fa fa-star fs-3'"></span>
                            <span :class="teacherData.avg_vote >= 4 ? 'fa fa-star fs-4 checked' : 'fa fa-star fs-4'"></span>
                            <span :class="teacherData.avg_vote >= 5 ? 'fa fa-star fs-5 checked' : 'fa fa-star fs-5'"></span>
                        </p>
                        <p>({{ teacherData.total_votes }} voti)</p>
                        <div class="d-flex gap-3 bg-light text-dark rounded-pill p-md-3 py-2 px-5 justify-content-around">
                            <div class="d-flex flex-column align-items-center p-2">
                                <h5>Città</h5>
                                <span>{{ teacherData.city }}</span>
                            </div>
                            <div class="d-flex flex-column align-items-center p-2">
                                <h5>Prezzo</h5>
                                <span>{{ teacherData.price_for_hour }}€/ora</span>
                            </div>
                        </div>
                        <div class="d-flex text-dark flex-wrap justify-content-center align-items-center gap-2 p-md-3">
                            <template v-for="subject in teacherData.subjects">
                                <div class="subject bg-light py-2 px-3 rounded-pill border">{{subject.name}}</div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-4 ps-5">
            <h3 class="my-4">Contatta</h3>
            <div class="col-12 col-md-6">
                <form action="" method="POST" enctype="multipart/form-data">
                    <div class="my-4">
                        <input type="text" name="name" id="name" class="form-control" placeholder="Nome" required>
                    </div>
                    <div class="mb-4">
                        <input type="email" name="email" id="email" class="form-control" placeholder="Email" required>
                    </div>
                    <div class="mb-4">
                        <textarea name="content" id="content" class="form-control" placeholder="Messaggio" required></textarea>
                    </div>
                    <div class="mb-4">
                        <button type="submit" class="btn btn-primary">Invia</button>
                    </div>
                </form>
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
        <div class="container">
            <div class="row">
                <div class="mx-auto d-flex justify-content-center align-items-center">
                    <button class="w-50 my-btn-container btn text-light my-3 fs-3 py-3 position-fixed bottom-0 my-rounded my-bgGreen w-100 text-center">
                        CONTATTA {{ teacherData.name }}
                    </button>
                </div>
            </div>
        </div>
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
        background-color: $color__secondary;
    }

    img{
        width: 150px !important;
    }

    .my-rounded{
        border-radius: 3rem;
    }

    .my-btn-container {
        max-width: 300px;
    }

</style>