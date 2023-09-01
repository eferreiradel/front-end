<template>
    <div class="card shadow border" style="width: 18rem;">
        <img :src="teacher.profile_image" class="card-img-top rounded-circle ps-5 pe-5 mt-4" alt="Nome Cognome">
        <div class="card-body d-flex flex-column align-items-center">
            <h5 class="card-title m-0">{{ teacher.name }} {{ teacher.surname }}</h5>
            <p class="card-text m-0 p-3">
                <span :class="teacher.avg_vote >= 1 ? 'fa fa-star fs-5 checked' : 'fa fa-star fs-5'"></span>
                <span :class="teacher.avg_vote >= 2 ? 'fa fa-star fs-4 checked' : 'fa fa-star fs-4'"></span>
                <span :class="teacher.avg_vote >= 3 ? 'fa fa-star fs-3 checked' : 'fa fa-star fs-3'"></span>
                <span :class="teacher.avg_vote >= 4 ? 'fa fa-star fs-4 checked' : 'fa fa-star fs-4'"></span>
                <span :class="teacher.avg_vote >= 5 ? 'fa fa-star fs-5 checked' : 'fa fa-star fs-5'"></span>
            </p>
            <div class="subjects d-flex flex-wrap justify-content-center align-items-center" style="height: 100px;">
                <template v-for="subject in teacher.subjects">
                    <div class="subject p-2 rounded m-1 border text-center">{{subject.name}}</div>
                </template>
            </div>
            <p class="card-text fw-bold p-3 m-0">{{(teacher && teacher.price_for_hour) ?? "0€/ora"}} €/ora</p>
            <PrimaryButton @click="goToShowTeacher" btnText="INFORMAZIONI" class="w-100"/>
        </div>
    </div>

</template>

<script>
    import PrimaryButton from '../components/ui/PrimaryButton.vue'
    
    export default {
        name: "TeacherCard",
        components: {
            PrimaryButton
        },
        props: {
            teacher: Object
        },
        methods: {
            goToShowTeacher(){
                this.$router.push({ name: 'showTeacher', params: { userId: this.teacher.id } });
            }
        }
    }
</script>
<style>
    .checked {
        color: orange;
    }
</style>