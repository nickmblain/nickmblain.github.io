<template>
  <!-- Start Slider Area  -->
  <div class="rn-slider-area demo_slider-area">
    <!-- Start Single Slide  -->
    <div
      class="slide slide-style-1 slider-fixed--height d-flex align-center bg_image bg_image--1"
      data-black-overlay="8"
    >
      <v-container class="position-relative">
        <v-row>
          <v-col cols="12">
            <div class="inner">
              <h1 class="heading-title theme-gradient">
                Design Driven Development Your Web Products.
              </h1>
            </div>
          </v-col>
        </v-row>
        <!-- End .row -->
        <!-- Start Service Area  -->
        <div class="service-wrapper service-white">
          <ServiceOne />
        </div>
        <!-- End Service Area  -->
      </v-container>
    </div>
    <!-- End Single Slide  -->
  </div>
  <!-- End Slider Area  -->
</template>

<script>
  import ServiceOne from "../../components/service/ServiceOne";
  export default {
    components: {
      ServiceOne,
    },
  };
</script>

<style lang="scss">
  .demo_slider-area {
    .slide.slide-style-1 .inner {
      padding-top: 70px;
    }
    @media only screen and (max-width: 991px) {
      .slider-fixed--height {
        padding-bottom: 70px;
      }
      .service-white .service__style--1 .content p {
        padding: 0 30px;
      }
    }
  }
  .slider-wrapper {
    .demo_slider-area {
      .service-wrapper {
        margin-bottom: 0;
      }
    }
  }
</style>
