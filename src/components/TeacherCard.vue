<template>
    <div class="card shadow green-angle border" style="width: 18rem;">
        <div class="gold-crown">
            <i class="fas fa-crown" style="color: gold; font-size: 24px;"></i> <!-- Aggiungi l'icona della coroncina -->
        </div>
        <div class="ps-5 pe-5">
            <div class="ratio ratio-1x1 rounded-circle mt-4 overflow-hidden">
                <img :src="teacher.profile_image.startsWith('http') ? teacher.profile_image : `http://localhost:8000/storage/${teacher.profile_image}`" class="object-fit-cover" alt="Nome Cognome">
            </div>
        </div>
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
<style scoped lang="scss">
@import "../style.scss";

    .checked {
        color: orange;
    }

    .card {
    position: relative;
    border: 5px solid green; /* Imposta il colore e lo spessore dei bordi verdi */
    border-radius: 10px; /* Imposta la curvatura dei bordi */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0); /* Aggiungi un effetto di ombra */
    }

    .card::before {
        content: "";
        position: absolute;
        top: -1;
        right: -1;
        border-width: 0 80px 80px 0;
        border-color: transparent $color__primary transparent transparent;
        border-style: solid;
        box-shadow: 5px -5px 5px rgba(0, 0, 0, 0.4);
    }

    .gold-crown {
    position: absolute;
    top: 23px; /* Posiziona l'icona verticalmente al centro dell'angolo */
    right: 23px; /* Posiziona l'icona orizzontalmente al centro dell'angolo */
    transform: translate(50%, -50%); /* Centra l'icona */
    color: gold;
    font-size: 24px;
    }
</style>