<template>
    <button>
        {{ btnText }}
    </button>
</template>
<script>
    export default {
        name: "SubmitButton",
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
    width: 100%;
    background-color: $color__primary;
    border-radius: 10px;
    border: 1px solid #000;
    color: black;
    } 
</style>