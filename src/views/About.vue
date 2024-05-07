<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" :src="logo" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Breadcrump Area  -->
    <div
      class="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1"
      data-black-overlay="6"
    >
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
              <h2 class="heading-title">About</h2>
              <ul class="page-list">
                <li v-for="(item, i) in breadcrumbs" :key="i">
                  <router-link :to="item.to" :disabled="item.disabled">{{
                    item.text
                  }}</router-link>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <!-- Start About Area  -->
    <div class="about-area ptb--120 bg_color--1">
      <div class="about-wrapper">
        <About>
          <img
            slot="thum-img"
            class="w-100"
            src="../assets/images/about/about-1.png"
            alt="About Images"
          />
        </About>
      </div>
    </div>
    <!-- Start About Area  -->

    <!-- Start Counterup Area  -->
    <div class="rn-counterup-area ptb--120 bg_color--5">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-center section-title">
              <span class="subtitle">Experts growts</span>
              <h2 class="heading-title">Our Company Growth</h2>
              <p class="description">
                We have grown strength over the past 20 years.
              </p>
            </div>
          </v-col>
        </v-row>
        <CounterOne />
      </v-container>
    </div>
    <!-- End Counterup Area  -->

    <!-- Start Finding us Area  -->
    <div
      class="rn-finding-us-area attacment-fixed rn-finding-us ptb--120 bg_color--1 bg_image bg_image--18"
      data-black-overlay="5"
    >
      <v-container>
        <v-row>
          <v-col lg="8" offset-lg="2">
            <div class="inner">
              <div class="content-wrapper">
                <div class="text-center content">
                  <h4 class="theme-gradient">Find Your Work Now</h4>
                  <p>
                   It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.
                  </p>
                  <router-link class="btn-default" to="/contact"
                    >Get Started</router-link
                  >
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Finding us Area  -->

    <!-- Start team Area  -->
    <div class="rn-team-area bg_color--1 ptb--120">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="text-center section-title mb--25">
              <span class="subtitle">Skilled team</span>
              <h2 class="heading-title">Skilled Team</h2>
              <p class="description">
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <!-- End row -->
        <TeamThree />
      </v-container>
    </div>
    <!-- Start team Area  -->

    <!-- Start Testimonial Area  -->
    <div class="rn-testimonial-area bg_color--5 ptb--120">
      <v-container>
        <Testimonial />
      </v-container>
    </div>
    <!-- Start Testimonial Area  -->

    <!-- Start Brand Area -->
    <div class="rn-brand-area bg_color--1 ptb--120">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="text-center section-title mb--30">
              <span class="subtitle">Top clients</span>
              <h2 class="heading-title">We worked with brands.</h2>
            </div>
          </v-col>
        </v-row>
        <Brand />
      </v-container>
    </div>
    <!-- End Brand Area -->
    <Footer />
  </div>
</template>

<script>
  import Header from "../components/header/Header";
  import About from "../components/about/About";
  import CounterOne from "../components/counter/CounterOne";
  import TeamThree from "../components/team/TeamThree";
  import Testimonial from "../components/testimonial/Testimonial";
  import Brand from "../components/brand/Brand";
  import Footer from "../components/footer/Footer";
  export default {
    components: {
      Header,
      About,
      CounterOne,
      TeamThree,
      Testimonial,
      Brand,
      Footer,
    },
    data() {
      return {
        logo: require("../assets/images/logo/logo.png"),
        breadcrumbs: [
          {
            text: "Home",
            to: "/",
            disabled: false,
          },
          {
            text: "About",
            to: "",
            disabled: true,
          },
        ],
      };
    },
  };
</script>
