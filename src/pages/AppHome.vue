<template>
    <Jumbotron class="my-margin-jumbo"/>
    <SliderHome class="my-margin-slider"/>
    <BulletPoints class="" />
    <CallToAction class="my-margin" />
</template>

<script>
    import Jumbotron from '../components/layouts/Jumbotron.vue'
    import SliderHome from '../components/ui/SliderHome.vue'
    import BulletPoints from '../components/ui/BulletPoints.vue'
    import CallToAction from '../components/ui/CallToAction.vue'

    export default {
        name: "AppHome",
        components: {
            Jumbotron,
            SliderHome,
            BulletPoints,
            CallToAction,
        }
    }
</script>

<style scoped lang="scss">
    @import "../style.scss";

    .my-margin-jumbo {
        margin-bottom: 6rem;
    }

    .my-margin-slider {
        margin-bottom: 12rem;
    }

    
    .my-margin {
        margin-bottom: 15rem;
    }
</style>