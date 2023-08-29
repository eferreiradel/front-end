<template>
    <Jumbotron />
    <SliderHome />
</template>

<script>
    import Jumbotron from '../components/layouts/Jumbotron.vue'
    import SliderHome from '../components/ui/SliderHome.vue'

    export default {
        name: "AppHome",
        components: {
            Jumbotron,
            SliderHome
        }
    }
</script>
<style></style>