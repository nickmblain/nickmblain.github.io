<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" :src="logo" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Breadcrump Area  -->
    <div
      class="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"
      data-black-overlay="5"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-center rn-page-title pt--100">
              <h2 class="heading-title theme-gradient">
                Getting tickets to the big show
              </h2>
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

    <!-- Start Portfolio Details Area  -->
    <div class="rn-portfolio-details ptb--120 bg_color--1">
      <v-container>
        <v-row>
          <v-col>
            <div class="portfolio-details">
              <div class="row row--35 mb--50">
                <div class="col-lg-6">
                  <div class="inner">
                    <div class="section-title">
                      <h2 class="heading-title">Creative agency</h2>
                      <p class="description mt--30">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form have suffered alteration in some form.
                      </p>
                      <p class="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </div>
                    <div class="flex-wrap portfolio-view-list d-flex">
                      <div class="port-view">
                        <span>Branch</span>
                        <h4>Ability</h4>
                      </div>
                      <div class="port-view">
                        <span>Project Types</span>
                        <h4>Website</h4>
                      </div>
                      <div class="port-view">
                        <span>Program</span>
                        <h4>Creative Type</h4>
                      </div>
                    </div>
                    <div class="portfolio-details-btn mt--30">
                      <router-link
                        class="btn-default btn-border"
                        to="/portfolio"
                        >Launch The Site</router-link
                      >
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div
                    class="portfolio-details-accordion mt_lg--40 mt_md--40 mt_sm--40"
                  >
                    <div class="inner">
                      <div class="section-title">
                        <h4 class="heading-title">Our Products</h4>
                        <p class="description mt--30">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form have suffered alteration in some form.
                        </p>
                        <p class="description mt--30">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration.
                        </p>
                        <ul class="list-style--1">
                          <li v-for="list in listOne" :key="list.id">
                            <i v-html="iconSvg(list.icon)"></i>
                            {{ list.desc }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="portfolio-thumb-inner">
                <div class="thumb position-relative mb--30">
                  <CoolLightBox
                    :items="items"
                    :index="index"
                    @close="index = null"
                  >
                  </CoolLightBox>

                  <div class="thumbnail position-relative">
                    <div v-for="(image, imageIndex) in items" :key="imageIndex">
                      <img
                        class="w-100"
                        :src="image.thumb"
                        alt="About Images"
                      />
                      <a
                        @click="index = imageIndex"
                        class="video-popup position-top-center theme-color play__btn"
                        ><span class="play-icon"></span
                      ></a>
                    </div>
                  </div>
                </div>
                <div class="thumb mb--30">
                  <img
                    src="../../assets/images/portfolio/portfolio-big-02.jpg"
                    alt="Portfolio Images"
                  />
                </div>
                <div class="thumb">
                  <img
                    src="../../assets/images/portfolio/portfolio-big-01.jpg"
                    alt="Portfolio Images"
                  />
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Portfolio Details Area  -->

    <!-- Start Related Work  -->
    <div class="portfolio-related-work pb--120 bg_color--1">
      <v-container>
        <v-row>
          <v-col>
            <div class="text-center section-title">
              <span class="theme-color font--18 fontWeight600"
                >Related Work</span
              >
              <h2>Our More Projects</h2>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt--10">
          <!-- Start Single Work  -->
          <v-col
            lg="6"
            md="6"
            cols="12"
            v-for="(project, i) in moreProjects"
            :key="i"
          >
            <div class="text-center related-work mt--30">
              <div class="thumb">
                <a href="/portfolio-details">
                  <img :src="project.src" alt="Portfolio-images" />
                </a>
              </div>
              <div class="inner">
                <h4>
                  <a href="/portfolio-details">{{ project.title }}</a>
                </h4>
                <span class="category">{{ project.categorie }}</span>
              </div>
            </div>
          </v-col>
          <!-- End Single Work  -->
        </v-row>
      </v-container>
    </div>
    <!-- End Related Work  -->

    <Footer />
  </div>
</template>

<script>
  import Header from "../../components/header/Header";
  import Footer from "../../components/footer/Footer";
  import feather from "feather-icons";

  export default {
    components: {
      Header,
      Footer,
    },
    data() {
      return {
        logo: require("../../assets/images/logo/logo.png"),
        items: [
          {
            thumb: require("../../assets/images/portfolio/portfolio-big-03.jpg"),
            src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
          },
        ],
        listOne: [
          {
            id: 1,
            icon: "check",
            desc: `5 PPC Campaigns the majority.`,
          },
          {
            id: 2,
            icon: "check",
            desc: `Digital Marketing going to.`,
          },
          {
            id: 3,
            icon: "check",
            desc: ` Marketing Agency passage of.`,
          },
          {
            id: 4,
            icon: "check",
            desc: ` Seo Friendly you are going.`,
          },
        ],
        socialList: [
          {
            url: "https://www.facebook.com/",
            icon: "facebook",
          },
          {
            url: "https://www.linkedin.com/",
            icon: "linkedin",
          },
          {
            url: "https://instagram.com/",
            icon: "instagram",
          },
          {
            url: "https://twitter.com/",
            icon: "twitter",
          },
        ],
        moreProjects: [
          {
            src: require("../../assets/images/portfolio/related-image-01.jpg"),
            title: "Digital Analysis",
            categorie: "Technique",
          },
          {
            src: require("../../assets/images/portfolio/related-image-02.jpg"),
            title: "Plan Management",
            categorie: "Planning",
          },
        ],
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
