<template>
    <div class="container-fluid bg-dark py-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-6 d-flex flex-column gap-3 py-5">
                    <div class="text-center">
                        <Logo></Logo>
                    </div>
                    <div class="py-5">
                        <p class="text-light text-center">
                            Se hai domande, suggerimenti o hai bisogno di assistenza, siamo qui per aiutarti. Puoi raggiungerci attraverso i seguenti canali
                        </p>
                    </div>
                    <div class="d-block d-md-flex align-items-center justify-content-center text-light">
                        <div class="d-flex gap-2 px-4 py-2 align-items-center">
                            <i class="fa-solid fa-phone"></i>
                            <span>
                                0445 1243985
                            </span>
                        </div>
                        <div class="d-block d-md-flex gap-2 px-4 py-2 align-items-center">
                            <i class="fa-solid fa-envelope"></i>
                            <span>
                                contatto@myprof.com
                            </span>
                        </div>
                        <div class="d-block d-md-flex gap-2 px-4 py-2 align-items-center">
                            <i class="fa-solid fa-comment"></i>
                            <span>
                                Chat
                            </span>
                        </div>
                    </div>
                    <div class="pt-5 d-flex flex-column d-md-flex flex-md-row justify-content-md-between align-items-md-center">
                        <div class="order-2 order-md-1 text-light text-center">
                            &copy; 2023 myprof. Tutti i diritti riservati.
                        </div>
                        <div class="text-center order-1 order-md-2 social">
                            <i class="me-3 fa-brands fa-square-facebook"></i>
                            <i class="me-3 fa-brands fa-square-instagram"></i>
                            <i class="fa-brands fa-square-youtube"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Logo from './Logo.vue';
import PrimaryButton from './PrimaryButton.vue';
export default {
    name: "Footer",
    data() {
        return {};
    },
    components: { Logo }
}
</script>
<style scoped>

.social > i {
    color: white;
    font-size: 2rem;
    cursor: pointer;
}

</style>