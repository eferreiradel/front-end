<template>
    <button>
        {{ btnText }}
    </button>
</template>
<script>
    export default {
        name: "DangerButton",
        data() {
            return {
            }
        },
        props: {
            btnText: String
        }
    }
</script>
<style scoped style lang="scss">
    @import "../../style.scss";
    button {
    background-color: $color__danger;
    border-radius: 10px;
    border: 1px solid #000;
    color: black;
    } 
</style>