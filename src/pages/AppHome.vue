<template>
  <div>
    <Jumbotron class="my-margin-jumbo" />
    <SliderHome class="my-margin-slider" />
    <BulletPoints class="" />
    <SliderReviews></SliderReviews>
    <CallToAction class="my-margin" />
  </div>
</template>

<script>
import Jumbotron from "../components/layouts/Jumbotron.vue";
import SliderHome from "../components/ui/SliderHome.vue";
import BulletPoints from "../components/ui/BulletPoints.vue";
import CallToAction from "../components/ui/CallToAction.vue";
import SliderReviews from "../components/ui/SliderReviews.vue";
import Footer from "../components/ui/Footer.vue";

export default {
  name: "AppHome",
  components: {
    Jumbotron,
    SliderHome,
    BulletPoints,
    CallToAction,
    SliderReviews,
},
};
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
