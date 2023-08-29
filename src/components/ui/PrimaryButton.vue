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
    background-color: $color__primary;
    border: 1px solid #000;
    color: black;
    
    } 

</style>