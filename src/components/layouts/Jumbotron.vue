<template>
    <div class="jumbotron">
        <h3>Trova</h3>
        <h2>L'INSEGNANTE</h2>
        <h1>IDEALE</h1>
    </div>
</template>
<script>
    export default {
        name: "Jumbotron",
        data() {
            return {

            }
        }
    }
</script>

<style scoped lang="scss">  
    @import "../../style.scss";
    .jumbotron {
        height: calc(100vh - $appheader__height);
    }    
</style>