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
                                Chatt
                            </span>
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
<style></style>