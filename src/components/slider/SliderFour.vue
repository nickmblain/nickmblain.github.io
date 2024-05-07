<template>
  <div>
    <VueSlickCarousel
      v-bind="settings"
      class="slider-activation rn-slick-dot dot-light"
    >
      <div
        class="slide slide-style-2 slider-box-content without-overlay d-flex align-center bg_image"
        data-black-overlay="2"
        v-for="(slider, i) in sliderContent"
        :key="i"
        :style="{ backgroundImage: 'url(' + slider.src + ')' }"
      >
        <v-container>
          <div class="text-left inner">
            <h1 class="heading-title">{{ slider.title }}</h1>
            <p class="description">
              {{ slider.desc }}
            </p>
            <div class="slide-btn">
              <router-link class="btn-default" to="/contact"
                >Contact Us</router-link
              >
            </div>
          </div>
        </v-container>
      </div>
      <!-- End Single Slide  -->
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from "vue-slick-carousel";

  export default {
    components: { VueSlickCarousel },
    data() {
      return {
        sliderContent: [
          {
            src: require("../../assets/images/bg/bg-image-32.jpg"),
            title: "Business",
            desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.`,
          },
          {
            src: require("../../assets/images/bg/bg-image-31.jpg"),
            title: "Corporate",
            desc: `There are many variations of passages but the majority have suffered alteration.There are many variations of passages but the majority have suffered alteration.`,
          },
        ],
        settings: {
          fade: true,
          dots: true,
          arrows: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          margin: 20,
        },
      };
    },
  };
</script>

<style lang="scss">
  .slick-slide {
    img {
      display: block;
      width: 100%;
    }
  }
</style>
