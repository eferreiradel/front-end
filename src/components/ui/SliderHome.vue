<template>
    <div class="container">
        <div class="row">
            <h2 class="my-4 text-center">Prof in Evidenza</h2>
            <Splide :options="splideOptions">
                <template v-for="(teacherGroup, index) in teacherGroups" :key="index">
                    <SplideSlide>
                        <div class="d-flex justify-content-evenly mb-4">
                            <TeacherCard />
                        </div>
                    </SplideSlide>
                </template>
            </Splide>
        </div>
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import TeacherCard from '../TeacherCard.vue'

export default {
    name: "SliderHome",
    components: {
        Splide,
        SplideSlide,
        TeacherCard
    },
    data() {
        return {
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
            teachers: [
                {
                    name: "Mario",
                    description: "Discord clone",
                    subject: "Matematica"
                },
                {
                    name: "Mario",
                    description: "Discord clone",
                },
                {
                    name: "Mario",
                    description: "Dropbox clone",
                },
                {
                    name: "Mario",
                    description: "What's App Web  clone",
                },
                {
                    name: "Mario",
                    description: "Dc Comics  clone",
                },
            ]
        }
    },
    computed: {
    teacherGroups() {
        const groups = [];
            for (let i = 0; i < this.teachers.length; i += 3) {
                groups.push(this.teachers.slice(i, i + 3));
            }
            return groups;
    }
}
}
</script>

<style scoped>

    h2, h4, p {
        margin: 0;
    }

    h2 {
        font-size: 2.5rem;
    }

    h5 {
        font-size: 2.5rem;
    }

    span {
        font-size: 2.3rem;
    }

</style>