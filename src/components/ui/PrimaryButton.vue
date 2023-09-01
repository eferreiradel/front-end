<template>
    <button type="button">
        {{ btnText }}
    </button>
</template>
<script>
    export default {
        name: "PrimaryButton",
        data() {
            return {
                
            }
        },
        props: {
            btnText: String
        }
    }
</script>
<style scoped lang="scss">

    @import "../../style.scss";

    button {
        background-color: $color__secondary;
        border: 1px solid #000;
        color: black;
        transition: 0.3s;
    }

    button:hover {
        background-color: $color__light !important;
        color: #000;
        border: 1px solid #000;
    }

</style>