<template>
    <template v-if="!store.requestsOnLoading">
        <div class="container">
            <div class="row">
                <h2 class="text-center">Insegnanti in evidenza</h2>
                <Splide :options="splideOptions">
                    <template v-for="(user, index) in store.users" :key="index">
                        <SplideSlide>
                            <div class="d-flex justify-content-evenly mb-5">
                                <TeacherCard :teacher="user"/>
                            </div>
                        </SplideSlide>
                    </template>
                </Splide>
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

    h2, h4, p {
        margin: 0;
    }

    h2 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 5rem;
        color: $color__dark;
    }

    h5 {
        font-size: 2.5rem;
    }

    span {
        font-size: 2.3rem;
    }

</style>