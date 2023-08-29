<template>
    <div class="navbar--toggle">
        <i class="fa-solid fa-bars"></i>
    </div>
</template>

<script>
    export default {
        name: "NavBarToggle",
        data() {
            return {
            }
        },
    }
</script>

<style scoped style lang="scss">
    @import "../../style.scss";
    
    .navbar--toggle {
        cursor: pointer;
    }
    .fa-solid {
        color: white;
        font-size: 32px;
    }

</style>