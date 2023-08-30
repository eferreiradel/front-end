<template>
    <div class="container-fluid navBar d-flex align-items-center">
        <div class="container">
            <div class="row justify-content-center px-0">
                <div class="col col-md-12 col-lg-10 col-xl-8 px-0">
                    <div class="container px-0 d-flex align-items-center justify-content-between">
                        <div class="d-lg-none">
                            <AppHeaderToggle></AppHeaderToggle>
                        </div>
                        <div class="d-none d-lg-block">
                            <nav>
                                <div class="d-flex gap-5">
                                    <a href="@">Accedi</a>
                                    <a href="@">Professori</a>
                                </div>
                            </nav>
                        </div>
                        <div class="">
                            <Logo></Logo>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import AppHeaderToggle from "../ui/AppHeaderToggle.vue";
import Logo from "../ui/Logo.vue";
import OffCanvas from "../ui/OffCanvas.vue";
export default {
    name: "AppHeader",
    components: {
    AppHeaderToggle,
    OffCanvas,
    Logo
}
}
</script>

<style scoped lang="scss">
    @import "../../style.scss";
    .navBar {
        background-color: $color__primary;
        // padding: 1rem auto;
        height: $appheader__height;
        // border-bottom: 1px solid black;
        i {
            color: white;
        }
    }
</style>