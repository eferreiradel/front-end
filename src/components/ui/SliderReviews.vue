<template>
  <div class="continer-fluid my-5">
    <div class="container">
      <div class=" text-center py-5">
        <h1>
          Cosa Dicono su di noi
        </h1>
      </div>
    </div>
    <div class="container-fluid py-5 bg--primary">
      <div class="row justify-content-center">
      <div class="col-12 col-lg-10 col-xl-8 rounded bg-light shadow">
            <Splide :options="this.splideOptions">
              <template v-for="(review, index) in reviews" :key="index">
                <SplideSlide >
                    <div class="container-fluid">
                      <div class="container px-0">
                        <div class="row">
                          <div class="slider col-12 col-md-4 d-flex align-items-center px-0">
                            <div class="container-aside bg-light p-5 p-md-0">
                              <div class="image-container p-0">
                                <img :src="review.thumb" alt="User Photo">
                              </div>
                            </div>
                          </div>
                          <div class="col-12 col-md-8 d-flex gap-3 p-2 p-md-5 flex-column bg-light">
                            <div class="container heading px-0 d-block d-md-flex text-center  d-md-justify-content-start  align-items-center gap-3">
                              <div>
                                <h2>
                                  {{ review.heading }}
                              </h2>
                              </div>
                              <div class="d-flex gap-2 align-items-center justify-content-center">
                                <span v-for="(vote, index) in review" :key="index">
                                  <i class="fa-solid fa-star"></i>
                                </span>
                              </div>
                            </div>
                            <div class="container content line-clamp-3 px-0">
                              <p>
                                {{ review.content }}
                              </p>
                            </div>
                            <span class="line"></span>
                            <div class="container user px-0 p-5 p-md-0">
                              <h3>
                                {{ review.user }}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </SplideSlide>
              </template>
            </Splide>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import PrimaryButton from './PrimaryButton.vue';


export default {
  name: "SliderReviews",
  data() {
    return {
      splideOptions: {
        type: "loop",
        perPage: 1,
        autoplay: true,
        focus: "center",
        autoplay: true,
        arrows: false,
        interval: 6000,
        pauseOnHover: true,
      },

      reviews: [
        {
          thumb: "https://loremflickr.com/320/240/paris,girl/all",
          user: "Lucia",
          heading: "Super ",
          content: "Il Professor Giorgino è un eccellente educatore nel campo della matematica. Con una vasta esperienza nell'insegnamento, ha dimostrato di avere una passione innata per la materia e un impegno straordinario.",
          vote: 4,
        },
        { 
          thumb: "https://loremflickr.com/320/240/paris,man/all",
          user: "Luca",
          heading: "Eccellente",
          content: "Il suo approccio all'insegnamento è noto per essere chiaro, coinvolgente e accessibile a tutti gli studenti, sa come trasmettere la complessità della matematica in modo semplice e comprensibile.",
          vote: 5,
        },
      ],
    };
  },
  components: {
    Splide,
    SplideSlide,
    PrimaryButton
},
};
</script>
<style scoped lang="scss">
@import "../../assets/scss/variables.scss";
.slider {
  border-radius: 20px;

}
.content {
  font-weight: lighter;
}
.line {
  width: 10%;
  height: 3px;
  background-color: $color__primary;
}
i {
  color: $color__stars;
}
.line-clamp-3 {
  height: 80px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.container-aside {
  // background-color: $color__primary;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .image-container {
    // border: 5px solid $color__primary;
    border-radius: 50%;
    overflow: hidden; 
    
    img {
      width: 200px; 
      height: 200px; 
      border-radius: 50%;
      // border: 5px solid $color__stars;
      object-fit: cover;
    }
  }
 
}
</style>
