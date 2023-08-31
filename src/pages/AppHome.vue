<template>
    <Jumbotron />
    <SliderHome />
    <BulletPoints />
    <CallToAction />
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
<style></style>