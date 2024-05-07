<template>
  <div>
    <VueSlickCarousel
      v-bind="settings"
      class="rn-slider-area slider-activation rn-slick-dot dot-light mb--0"
    >
      <div
        class="slide slide-style-2 d-flex align-center justify-center fullscreen bg_image"
        data-black-overlay="8"
        v-for="(slider, i) in sliderContent"
        :key="i"
        :style="{ backgroundImage: 'url(' + slider.src + ')' }"
      >
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="inner text-center">
                <h1 class="heading-title theme-gradient">{{ slider.title }}</h1>
                <p class="description">
                  {{ slider.desc }}
                </p>
                <div class="slide-btn">
                  <router-link
                    class="btn-default btn-border btn-large btn-opacity"
                    to="/contact"
                    >Contact Us</router-link
                  >
                </div>
              </div>
            </v-col>
          </v-row>
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
            src: require("../../assets/images/bg/bg-image-15.jpg"),
            title: "Marketing",
            desc: ` There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration.`,
          },
          {
            src: require("../../assets/images/bg/bg-image-12.jpg"),
            title: "Development.",
            desc: ` There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration.`,
          },
          {
            src: require("../../assets/images/bg/bg-image-13.jpg"),
            title: "UX Research.",
            desc: ` There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration.`,
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
          margin: 20,
          adaptiveHeight: true,
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
