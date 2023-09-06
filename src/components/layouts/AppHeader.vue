<template>
    <div class="container-fluid navBar d-flex fixed-top justify-content-center align-items-center">
        <div class="container">
            <div class="row">
                <div class="my-padding d-flex justify-content-between aling-items-center">
                    <div class="d-lg-none d-flex align-items-center">
                        <AppHeaderToggle></AppHeaderToggle>
                    </div>
                    <div class="ms-3">
                        <Logo></Logo>
                    </div>
                    <div class="container-link-nav d-none d-lg-block d-lg-flex align-items-center d-flex gap-5">
                        <a href="http://127.0.0.1:8000/login">Accedi</a>
                        <a href="http://127.0.0.1:8000/register">Dare lezioni</a>
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
        padding: 0.5rem;
        background-color: $color__primary;
        height: $appheader__height;
        // border-bottom: 1px solid black;
        i {
            color: white;
        }

        .container-link-nav {
            a {
                padding: 0.5rem;
                transition: 0.5s;
            }
            a:hover {
                border-radius: 10px;
                background-color: white;
                color: $color__primary;
            }
        }

        .my-padding {
            padding: 0.3rem ;
        }
    }
</style>