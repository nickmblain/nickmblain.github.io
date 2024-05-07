<template>
  <div>
    <!-- Start Header Area -->
    <Header class="personal-portfolio">
      <img slot="logo" :src="logo" alt="logo" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Slider Area  -->
    <div class="rn-slider-area personal-portfolio-slider-area">
      <div
        class="justify-center slide slider_fixed_height slider-style-3 d-flex align-center bg_image bg_image--16 white-overlay-mobile"
      >
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="text-left inner">
                <span class="theme-gradient font-500">Front End Developer</span>
                <h1 class="heading-title">Hello, I’m <span>Nick.</span></h1>
                <p class="description">
                  Work in progress... I’m working on a professional, visually sophisticated and
                  technologically <br />
                  proficient, responsive and multi-functional Vue portfolio.
                </p>
                <div class="slide-btn">
                  <scrollactive
                    active-class="v-btn--active"
                    bezier-easing-value=".5,0,.35,1"
                    :offset="71"
                  >
                    <a class="btn-default scrollactive-item" traget="_blank" href="https://app.enhancv.com/share/efd7f7cb/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
                      >Download CV</a
                    >
                  </scrollactive>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <!-- End Slider Area -->

    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>

<script>
import feather from "feather-icons";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      logo: require("../assets/images/logo/logo-symbol-dark.png"),
      index: null,
    };
  },
  methods: {
    iconSvg(icon) {
      return feather.icons[icon].toSvg();
    },
  },
};
</script>

<style lang="scss">
.bg_image--16 {
  background-image: url("../assets/images/header-bg.jpg");
}
</style>
