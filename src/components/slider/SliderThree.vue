<template>
  <div>
    <VueSlickCarousel
      v-bind="settings"
      class="slider-digital-agency slider-activation rn-slick-dot dot-light mb--0 color-white"
    >
      <div
        class="slide slide-style-2 fullscreen d-flex align-center bg_image"
        data-black-overlay="2"
        v-for="(slider, i) in sliderContent"
        :key="i"
        :style="{ backgroundImage: 'url(' + slider.src + ')' }"
      >
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="text-center inner">
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
            src: require("../../assets/images/bg/bg-image-22.jpg"),
            title: "UX Research.",
            desc: ` There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration.`,
          },
          {
            src: require("../../assets/images/bg/bg-image-21.jpg"),
            title: "Marketing.",
            desc: ` There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration.`,
          },
          {
            src: require("../../assets/images/bg/bg-image-23.jpg"),
            title: "Development",
            desc: ` There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration.`,
          },
          {
            src: require("../../assets/images/bg/bg-image-20.jpg"),
            title: "Freelancing",
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
