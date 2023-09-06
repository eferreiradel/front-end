<template>
    <template v-if="!store.requestsOnLoading">
        <div class="container-fluid bg-shaded">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex justify-content-center py-5 align-items-center">
                            <h2 class="text-center text-light">Insegnanti in evidenza</h2>
                        </div>
                        <Splide :options="splideOptions">
                            <template v-for="(user, index) in store.users" :key="index">
                                <SplideSlide>
                                    <div class="d-flex justify-content-evenly">
                                        <TeacherCard :teacher="user"/>
                                    </div>
                                </SplideSlide>
                            </template>
                        </Splide>
                    </div>
                </div>
            </div>
        </div>
    </template>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import TeacherCard from '../TeacherCard.vue'
import {store} from '../../store.js'

export default {
    name: "SliderHome",
    components: {
        Splide,
        SplideSlide,
        TeacherCard,
    },
    data() {
        return {
            store,
            splideOptions: {
                type: 'loop',
                perPage: 3,
                focus: "center",
                autoplay: true,
                arrows: true,
                interval: 6000,
                pauseOnHover: true,
                breakpoints: {
                    992: {
                        arrows: false,
                        perPage: 1,
                    },
                    576: {
                        arrows: false,
                        perPage: 1,
                    }
                }
            },
        }
    },mounted(){
        // console.log(this.store.users);
        this.store.putAllUsers();
    }
//     computed: {
//     teacherGroups() {
//         const groups = [];
//             for (let i = 0; i < this.store.users.length; i += 3) {
//                 groups.push(this.store.users.slice(i, i + 3));
//             }
//             return groups;
//     }
// }
}
</script>

<style scoped lang="scss">
@import "../../style.scss";

    .bg-shaded {
    background: $color__primary;
    background: linear-gradient(180deg, $color__primary 0%, $color__primary 50%, rgba(52,52,175,0) 50%, rgba(255,255,255,0) 100%);
    }
    h2, h4, p {
        margin: 0;
    }

    h2 {
        font-size: 2.5rem;
        font-weight: 700;
        color: $color__dark;
    }

    h5 {
        font-size: 2.5rem;
    }

    span {
        font-size: 2.3rem;
    }

</style>