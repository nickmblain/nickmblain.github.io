<template>
  <div>
    <!-- Start Header Area -->
    <HeaderThree class="personal-portfolio">
      <img slot="logo" :src="logo" alt="logo" />
    </HeaderThree>
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
                  I’m working on a professional, visually sophisticated and
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

    <!-- Start About Area  -->
    <!-- <div class="about-area ptb--120 bg_color--1">
      <div class="about-wrapper">
        <div class="container">
          <AboutFive />
        </div>
      </div>
    </div> -->
    <!-- Start About Area  -->

    <!-- <div class="rn-about-area pb--120 bg_color--1">
      <v-container>
        <v-row class="row--35 align-center">
          <v-col lg="6" md="6" sm="12" cols="12">
            <div class="thumbnail">
              <img
                class="w-100"
                src="../../assets/images/about/about-4.png"
                alt="About Images"
              />
            </div>
          </v-col>
          <v-col lg="6" md="6" sm="12" cols="12">
            <div class="about-inner inner">
              <div class="section-title">
                <span class="subtitle">My Performance</span>
                <h2 class="heading-title">My Best Performance</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                  exercitationem impedit iure quia quo recusandae? adipisicing
                  elit. Enim exercitationem impedit iure quia quo recusandae?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                  exercitationem impedit iure quia quo recusandae?
                </p>
              </div>
              <div class="accordion-wrapper mt--30">
                <ul class="list-style--1">
                  <li v-for="list in listOne" :key="list.id">
                    <i v-html="iconSvg(list.icon)"></i>
                    {{ list.desc }}
                  </li>
                </ul>
              </div>
              <div class="about-button mt--30">
                <router-link class="btn-default" to="/about"
                  >See My Skill</router-link
                >
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div> -->

    <!-- Start Portfolio Area -->
    <!-- <div class="portfolio-area pb--60 bg_color--1">
      <div class="portfolio-sacousel-inner mb--55 mb_sm--0">
        <v-container>
          <v-row>
            <v-col lg="12">
              <div class="text-center section-title mb--30 mb_sm--0">
                <span class="subtitle">Our project</span>
                <h2 class="heading-title">Some of My Recent Works</h2>
                <p class="description">
                  There are many variations of passages of Lorem Ipsum
                  available,
                  <br />
                  but the majority have suffered alteration.
                </p>
              </div>
            </v-col>
          </v-row>
          <PortfolioFour />
          <v-row>
            <v-col lg="12">
              <div class="text-center view-more-btn mt--60 mt_sm--30">
                <router-link class="btn-default" to="#"
                  >View Projects</router-link
                >
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div> -->
    <!-- End Portfolio Area -->

    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>

<script>
import feather from "feather-icons";
import HeaderThree from "../../components/header/HeaderThree";
import AboutFive from "../../components/about/AboutFive";
import Brand from "../../components/brand/Brand";
import PortfolioFour from "../../components/portfolio/PortfolioFour";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/FooterTwo";
import CallToAction from "../../components/callto-action/CallToAction";

export default {
  components: {
    HeaderThree,
    AboutFive,
    Brand,
    PortfolioFour,
    Contact,
    Footer,
    CallToAction,
  },
  data() {
    return {
      logo: require("../../assets/images/logo/logo-symbol-dark.png"),
      items: [
        {
          thumb: require("../../assets/images/about/about-10.png"),
          src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
        },
      ],
      index: null,
      listOne: [
        {
          id: 1,
          icon: "check",
          desc: `The Philosophy Of business analytics`,
        },
        {
          id: 2,
          icon: "check",
          desc: ` Fast-Track Your business`,
        },
        {
          id: 3,
          icon: "check",
          desc: `Lies And Damn Lies About business`,
        },
        {
          id: 4,
          icon: "check",
          desc: `Lies And Damn Lies About business`,
        },
      ],
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
.no-spacer-inside-brand {
  .row.mt--20 {
    margin-top: 0 !important;
  }
}

.bg_image--16 {
  background-image: url("https://imroz.ibthemespro.com/img/bg-image-28.5027ada3.jpg");
}
</style>
