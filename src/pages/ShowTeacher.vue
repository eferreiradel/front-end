<template>
    <div v-if="teacherData" class="container-fluid px-0 bg-shaded">
        <!-- <div class="wallpaper">
            <img src="../../public/images/wallpaper.jpg" alt="">
        </div> -->
        <ContactModal></ContactModal>
        <div class="container-fluid cover-teacher">
            <div class="container">
                <div class="row pt-5 pb-5">
                    <div class="col-12 col-md-3 d-flex align-items-center justify-content-center">
                        <div class="image-container rounded-pill object-fit-cover">
                            <img :src="teacherData.profile_image.startsWith('http') ? teacherData.profile_image : `http://localhost:8000/storage/${teacherData.profile_image}`"
                                class="object-fit-cover w-100 profile-img" alt="Nome Cognome">
                        </div>
                    </div>
                    <div class="col-12 col-md-9 container-left d-flex flex-column justify-content-end">
                        <div class="container-fluid">
                            <div class="container px-0">
                                <div class="row">
                                    <div class="col-12 d-flex gap- flex-column px-0">
                                        <div class="text-light">
                                            <h3 class="font-weight-bold">{{ teacherData.name }} {{ teacherData.surname }}
                                            </h3>
                                        </div>
                                        <div v-for="subject in teacherData.subjects" class="w-100 text-light py-2">
                                            <span class="badge bg-light rounded-pill text-dark">{{ subject.name }}</span>
                                        </div>
                                        <div class="px-0">
                                            <h5 class="text-light">Modalità</h5>
                                        </div>
                                        <div class="d-flex flex-wrap gap-4 px-0 text-light">
                                            <span v-if="teacherData.is_live_lesson" class="badge bg-light text-dark rounded-pill">
                                                <i class="fa-solid fa-location-pin"></i> In presenza {{ teacherData.city }}
                                            </span>
                                            <span v-if="teacherData.is_remote_lesson" class="badge bg-light text-dark rounded-pill">
                                                <i class="fa-solid fa-video"></i> Via webcam
                                            </span>
                                        </div>
                                        <div class="container-fluid">

                                        </div>
                                        <div class="container d-flex justify-content-end">
                                            <button class="my-button-primary font-weight-bolder rounded-pill" data-bs-target="#ContactModal"
                                                data-bs-toggle="modal">
                                                CONTATTA
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="container">
                <div class="row py-5">
                    <div class="col-12 col-md-5 d-flex gap-3 flex-column">
                        <div class="d-flex gap-3 flex-column">
                            <h3>
                                My class
                            </h3>
                            <div class="line my-3"></div>
                        </div>
                        <div>
                            <p>{{ teacherData.description }}</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-7">
                        <div class="container-fluid">
                            <div class="container">
                                <div class="row">
                                    <div class="col-6 px-0">
                                        <div class="text-center">
                                            <h4>
                                                VOTI
                                            </h4>
                                            <p class="card-text m-0">
                                                <span
                                                    :class="teacherData.avg_vote >= 1 ? 'fa fa-star fs-4 checked' : 'fa fa-star fs-5'"></span>
                                                <span
                                                    :class="teacherData.avg_vote >= 2 ? 'fa fa-star fs-4 checked' : 'fa fa-star fs-4'"></span>
                                                <span
                                                    :class="teacherData.avg_vote >= 3 ? 'fa fa-star fs-4 checked' : 'fa fa-star fs-3'"></span>
                                                <span
                                                    :class="teacherData.avg_vote >= 4 ? 'fa fa-star fs-4 checked' : 'fa fa-star fs-4'"></span>
                                                <span
                                                    :class="teacherData.avg_vote >= 5 ? 'fa fa-star fs-4 checked' : 'fa fa-star fs-5'"></span>
                                            </p>
                                            <div class="text-center">
                                                <p>({{ teacherData.total_votes }} voti)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6 px-0 text-center">
                                        <div>
                                            <h4>TARIFFA ORARIA</h4>
                                        </div>
                                        <div>
                                            <h1>{{ teacherData.price_for_hour }}€</h1>
                                        </div>
                                    </div>
<!-- REVIEWS -->                        
                                    <div class="container-fluid px-0">
                                        <div class="container px-0 py-5">
                                            <Splide :options="this.splideOptions" aria-label="My Favorite Images">
                                                <template v-for="review in teacherData.review">
                                                    <SplideSlide>
                                                        <div class="card line-clamp-3 w-100 p-5">
                                                            <div class="px-5">
                                                                <h5>{{ review.name }}</h5>
                                                                <p class="font-weight-light">{{ review.review_text }}</p>
                                                            </div>
                                                        </div>
                                                    </SplideSlide>
                                                </template>
                                            </Splide>
                                        </div>
                                    </div>
<!-- Lascia una tua Recensione -->
                                    <div class="container-fluid px-0">
                                        <div class="container px-0">
                                            <div class="col-12">
                                                <div class="px-0 py-5 d-flex gap-2 flex-column">
                                                    <div>
                                                        <p>Lascia una recensione</p>
                                                    </div>
                                                    <form @submit.prevent="sendReviewVoteForm">
                                                        <div class="stars d-flex align-items-center mt-3">
                                                            <i v-for="(star, index) in 5" :key="index"
                                                                @click="switchStars(index + 1)"
                                                                :class="(index + 1) <= voteForm.vote ? 'fa fa-star fs-3 checked' : 'fa fa-star fs-3'"></i>
                                                        </div>
                                                        <p v-if="this.sendVote == true" class="text-success">Voto inviato con successo! &#10003; </p>
                                                        <p v-if="this.sendVote == false" class="text-danger">Ops qualcosa è andato storto! &#10007; </p>
                                                        <div class="my-4">
                                                            <input v-model="reviewForm.name" type="text" name="name"
                                                                id="name" class="form-control" placeholder="Nome">
                                                        </div>
                                                        <div class="mb-4">
                                                            <textarea v-model="reviewForm.review_text" name="content"
                                                                id="content" class="form-control"
                                                                placeholder="Messaggio"></textarea>
                                                        </div>
                                                        <div class="mb-4 d-flex justify-content-end">
                                                            <button type="submit my-button-primary" class="">Invia</button>
                                                        </div>
                                                        <div v-if="this.sendReview == true">
                                                            <p class="text-success">Recensione inviata con successo! &#10003;
                                                            </p>
                                                        </div>
                                                        <div v-if="this.sendReview == false">
                                                            <p class="text-danger">Ops qualcosa è andato storto! &#10007;
                                                            </p>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <Loading />
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import ContactModal from '../components/ui/ContactModal.vue';
import SliderReviews from '../components/ui/SliderReviews.vue';
import { store } from '../store';
import axios from 'axios'
import Loading from '../components/ui/Loading.vue';

export default {
    name: "ShowTeacher",
    data() {
        return {
            store,
            teacherData: null,
            sendMessage: null,
            sendReview: null,
            sendVote: null,
            contactForm: {
                userId: this.$route.params.userId,
                email: '',
                message_text: ''
            },
            voteForm: {
                userId: this.$route.params.userId,
                vote: null,
            },
            reviewForm: {
                userId: this.$route.params.userId,
                name: '',
                review_text: ''
            },
            splideOptions: {
            type: "loop",
            perPage: 1,
            autoplay: true,
            focus: "center",
            autoplay: true,
            arrows: true,
            interval: 6000,
            pauseOnHover: true,
            pagination: false,
            },
        };
    },
    methods: {
        switchStars(index) {
            this.voteForm.vote = index;
            console.log("Voto: " + this.voteForm.vote);
        },
        sendMessageForm() {
            axios.post('http://localhost:8000/api/sendmessage', this.contactForm)
                .then(response => {
                    console.log(response);
                    this.sendMessage = true;
                    this.contactForm.email = "";
                    this.contactForm.message_text = "";
                })
                .catch(error => {
                    console.error(error);
                    this.sendMessage = false;
                });
        },
        sendReviewVoteForm() {
            if (this.voteForm.vote) {
                axios.post('http://localhost:8000/api/sendvote', this.voteForm)
                    .then(response => {
                        console.log(response);
                        this.sendVote = true;
                    })
                    .catch(error => {
                        console.error(error);
                        this.sendVote = false;
                    });
            }
            if (this.reviewForm.name && this.reviewForm.review_text) {
                axios.post('http://localhost:8000/api/sendreview', this.reviewForm)
                    .then(response => {
                        console.log(response);
                        this.sendReview = true;
                        this.reviewForm.name = "";
                        this.reviewForm.review_text = "";
                    })
                    .catch(error => {
                        console.error(error);
                        this.sendReview = false;
                    });
            }
        }
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    mounted() {
        store.getUserById(this.$route.params.userId).then(userData => {
            this.teacherData = userData;
            console.log(this.teacherData);
        });
        window.addEventListener('scroll', this.handleScroll);
    },
    components: {
    ContactModal,
    Splide,
    SplideSlide,
    SliderReviews,
    Loading
}
}
</script>

<style scoped style lang="scss">
@import "../style.scss";

// .wallpaper {
//     width: 100%;
//     height: 200px;
//     position: absolute;
//     z-index: -100;
//     // height: 50px;
// }
// .wallpaper img {
//     height: 100%;
//     width: 100%;
//     object-fit: cover;
// }
.line {
    height: 2px;
    background-color: $color__primary;
    width: 10%;
}

.cover-teacher {
    background-image: url("../../public/images/wallpaper.jpg");
    background-size: cover;
    mix-blend-mode: multiply;
    // background: $color__primary;
    // background: linear-gradient(180deg, $color__dark 0%, $color__dark 90%, rgba(52, 52, 175, 0) 90%, rgba(255, 255, 255, 0) 100%);
}

.my-bgGreen {
    background-color: $color__primary;
    border: 1px solid $color__dark;
}

.my-bgGreen-btn {
    background-color: $color__secondary;
    border: 1px solid $color__dark;
}

.profile-img {
    border-radius: 50%;
    height: 200px;
    width: 200px;
    ;
}

.my-rounded {
    border-radius: 3rem;
}

.my-btn-container {
    color: $color__dark;
    max-width: 300px;
    border: 1px solid $color__dark;
    display: none;
    transition: opacity 0.4s ease-out, transform 0.4s ease-out;
}

.my-btn-container:hover {
    background-color: $color__light !important;
    color: #000;
    border: 1px solid #000;
}

.my-btn-container-static {
    font-size: 1.2rem;
    padding: 3rem;
    color: $color__dark;
    border: 1px solid $color__dark;
}

.my-btn-container-static:hover {
    background-color: $color__light !important;
    color: #000;
    border: 1px solid #000;
}

.my-border {
    border: 1px solid $color__dark !important;
    border-radius: 15px;
}

.my-border-img {
    border: 3px solid $color__light !important;
}

h2 {
    font-weight: 700;
}</style>