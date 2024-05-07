<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" :src="logo" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Breadcrump Area  -->
    <div
      class="rn-page-title-area pt--120 pb--190 bg_image bg_image--15"
      data-black-overlay="6"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-center rn-page-title pt--100">
              <h2 class="heading-title theme-gradient">Cntact With Us</h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <!-- Start Contact Address Area  -->
    <div class="rn-contact-top-area ptb--120 bg_color--5">
      <v-container>
        <div class="text-center section-title mb--30">
          <span class="subtitle">Our contact address</span>
          <h2 class="heading-title">Quick Contact Address</h2>
          <p class="description">
            There are many variations of passages of Lorem Ipsum available,
            <br />
            but the majority have suffered alteration.
          </p>
        </div>
        <ContactAddress />
      </v-container>
    </div>
    <!-- End Contact Address Area  -->

    <!-- Start Contact Area  -->
    <div class="rn-contact-page ptb--120 bg_color--1">
      <div class="contact-form--1">
        <v-container>
          <Contact>
            <img
              slot="contact-img"
              src="../assets/images/about/about-12.jpg"
              alt="contact images"
            />
          </Contact>
        </v-container>
      </div>
    </div>
    <!-- End Contact Area  -->

    <!-- Start Google MAp -->
    <div class="google-map rn-contact-map-area position-relative">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Dhaka%20bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe
          ><a href="https://embedgooglemap.net/maps/70"></a><br />
          <a href="https://www.embedgooglemap.net">google map code embed</a>
        </div>
      </div>
    </div>
    <!-- End Google MAp -->

    <!-- Start Brand Area -->
    <div class="rn-brand-area bg_color--5 ptb--120">
      <v-container>
        <Brand />
      </v-container>
    </div>
    <!-- End Brand Area -->
    <Footer />
  </div>
</template>

<script>
  import Header from "../components/header/Header";
  import ContactAddress from "../components/contact/ContactAddress";
  import Contact from "../components/contact/Contact";
  import Brand from "../components/brand/Brand";
  import Footer from "../components/footer/Footer";
  export default {
    components: { Header, ContactAddress, Contact, Brand, Footer },
    data() {
      return {
        logo: require("../assets/images/logo/logo.png"),
      };
    },
  };
</script>

<style lang="scss">
  .mapouter {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 800px;
    width: 100%;
    @media only screen and (max-width: 1199px) {
      height: 500px;
    }
    @media only screen and (max-width: 992px) {
      height: 420px;
    }
  }
  .gmap_canvas iframe {
    width: 100%;
    height: 100%;
  }
</style>
