<template>
    <div class="card shadow border" style="width: 18rem;">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" class="card-img-top rounded-circle ps-5 pe-5 mt-4" alt="Nome Cognome">
        <div class="card-body d-flex flex-column align-items-center">
            <h5 class="card-title m-0">{{(teacher && teacher.name) ?? "Nome Cognome"}}</h5>
            <p class="card-text m-0 p-3">
                <span class="fa fa-star fs-5 checked"></span>
                <span class="fa fa-star fs-4 checked"></span>
                <span class="fa fa-star fs-3 checked"></span>
                <span class="fa fa-star fs-4"></span>
                <span class="fa fa-star fs-5"></span>
            </p>
            <div class="subjects d-flex flex-wrap justify-content-center align-items-center" style="height: 100px;">
                <div class="subject p-2 rounded m-1 border text-center">Matematica</div>
                <div class="subject p-2 m-1 rounded border text-center">Italiano</div>
                <div class="subject p-2 m-1 rounded border text-center">Informatica</div>
                <div class="subject p-2 m-1 rounded border text-center">Geografia</div>
            </div>
            <p class="card-text fw-bold p-3 m-0">{{(teacher && teacher.price_for_hour) ?? "0€/ora"}}</p>
            <PrimaryButton btnText="CONTATTA" class="w-100"/>
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
    }
</script>
<style>
    .checked {
        color: orange;
    }
</style>