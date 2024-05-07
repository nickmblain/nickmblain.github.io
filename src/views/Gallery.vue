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
              <h2 class="heading-title">Gallery</h2>
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

    <!-- Start Gallery Area  -->
    <div class="rn-portfolio-area pt--60 pb--120 bg_color--1 line-separator">
      <v-container>
        <v-row class="gallery-wrapper gallery-grid" id="animated-thumbnials">
          <!-- Start Single Gallery -->
          <a
            class="item-portfolio-static gallery image col-md-6 col-sm-6"
            v-for="(image, imageIndex) in items"
            :key="imageIndex"
            @click="index = imageIndex"
          >
            <div class="portfolio-static">
              <div class="thumbnail-inner">
                <div class="thumbnail">
                  <img :src="image.thumb" alt="Portfolio Images" />
                </div>
              </div>
              <div class="content">
                <div class="inner">
                  <p>{{ image.tag }}</p>
                  <h4>{{ image.title }}</h4>
                </div>
              </div>
            </div>
          </a>
          <!-- End Single Gallery -->
        </v-row>
        <CoolLightBox
          :items="items"
          :index="index"
          :fullScreen="true"
          :effect="'fade'"
          @close="index = null"
        >
        </CoolLightBox>
      </v-container>
    </div>
    <!-- End Gallery Area  -->

    <!-- Start Gallery Area  -->
    <div class="creative-portfolio-wrapper ptb--120 bg_color--1">
      <v-container>
        <div class="mt_dec--40">
          <PortfolioFour />
        </div>
      </v-container>
    </div>
    <!-- End Gallery Area  -->

    <Footer />
  </div>
</template>

<script>
  import Header from "../components/header/Header";
  import PortfolioFour from "../components/portfolio/PortfolioFour";
  import Footer from "../components/footer/Footer";
  export default {
    components: {
      Header,
      PortfolioFour,
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
            text: "Gallery",
            to: "",
            disabled: true,
          },
        ],
        items: [
          {
            tag: "Web Design",
            title: "T-shirt design is the part of design",
            thumb: require("../assets/images/portfolio/big/dp-big--portfolio-01.jpg"),
            src: require("../assets/images/portfolio/big/dp-big--portfolio-01.jpg"),
          },
          {
            tag: "App Development",
            title: "The service provide for designer",
            thumb: require("../assets/images/portfolio/big/dp-big--portfolio-02.jpg"),
            src: require("../assets/images/portfolio/big/dp-big--portfolio-02.jpg"),
          },
          {
            tag: "Web Design",
            title: "Mobile App landing Design",
            thumb: require("../assets/images/portfolio/big/dp-big--portfolio-03.jpg"),
            src: require("../assets/images/portfolio/big/dp-big--portfolio-03.jpg"),
          },
          {
            tag: "Web Design",
            title: "T-shirt design is the part of design",
            thumb: require("../assets/images/portfolio/big/dp-big--portfolio-04.jpg"),
            src: require("../assets/images/portfolio/big/dp-big--portfolio-04.jpg"),
          },
          {
            tag: "Mobile App Development",
            title: "Mobile App landing Design",
            thumb: require("../assets/images/portfolio/big/dp-big--portfolio-05.jpg"),
            src: require("../assets/images/portfolio/big/dp-big--portfolio-05.jpg"),
          },
          {
            tag: "Web Design",
            title: "Logo Design creativity",
            thumb: require("../assets/images/portfolio/big/dp-big--portfolio-06.jpg"),
            src: require("../assets/images/portfolio/big/dp-big--portfolio-06.jpg"),
          },
        ],
        index: null,
      };
    },
  };
</script>
