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
              <h2 class="heading-title">Video Popup</h2>
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

    <!-- Start Video Popup Area  -->
    <div class="rn-section ptb--120 bg_color--1 line-separator">
      <v-container>
        <v-row>
          <v-col
            lg="12"
            v-for="(image, imageIndex) in gridItems3"
            :key="imageIndex"
          >
            <div class="thumbnail position-relative">
              <img class="w-100" :src="image.thumb" alt="About Images" />
              <a
                class="video-popup position-top-center theme-color play__btn"
                @click="index3 = imageIndex"
                ><span class="play-icon"></span
              ></a>
            </div>
          </v-col>
        </v-row>
        <CoolLightBox
          :items="gridItems3"
          :index="index3"
          @close="index3 = null"
        >
        </CoolLightBox>
      </v-container>
    </div>
    <!-- End Video Popup Area  -->

    <!-- Start Video Popup Area  -->
    <div class="rn-section ptb--120 bg_color--1 line-separator">
      <v-container>
        <v-row>
          <!-- Start Single Video Button  -->
          <v-col
            lg="6"
            md="6"
            sm="6"
            cols="12"
            v-for="(image, imageIndex) in gridItems2"
            :key="imageIndex"
            :class="image.class"
          >
            <div class="thumbnail position-relative">
              <img class="w-100" :src="image.thumb" alt="About Images" />
              <a
                class="video-popup position-top-center play__btn"
                :class="{ 'black-color': image.active }"
                @click="index2 = imageIndex"
                ><span class="play-icon"></span
              ></a>
            </div>
          </v-col>
          <!-- End Single Video Button  -->
        </v-row>
      </v-container>
      <CoolLightBox :items="gridItems2" :index="index2" @close="index2 = null">
      </CoolLightBox>
    </div>
    <!-- End Video Popup Area  -->

    <!-- Start Video Popup Area  -->
    <div class="rn-section ptb--120 bg_color--1">
      <v-container>
        <v-row>
          <!-- Start Single Video Button  -->
          <v-col
            lg="4"
            md="4"
            sm="6"
            cols="12"
            v-for="(image, imageIndex) in gridItems"
            :key="imageIndex"
            :class="image.responisve"
          >
            <div class="thumbnail position-relative">
              <img class="w-100" :src="image.thumb" alt="About Images" />
              <a
                class="video-popup position-top-center play__btn size-medium"
                :class="{ 'black-color': image.active }"
                @click="index = imageIndex"
                ><span class="play-icon"></span
              ></a>
            </div>
          </v-col>
          <!-- End Single Video Button  -->
        </v-row>
        <CoolLightBox :items="gridItems" :index="index" @close="index = null">
        </CoolLightBox>
      </v-container>
    </div>
    <!-- End Video Popup Area  -->

    <Footer />
  </div>
</template>

<script>
  import Header from "../components/header/Header";
  import Footer from "../components/footer/Footer";
  export default {
    components: {
      Header,
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
            text: "Video Popup",
            to: "",
            disabled: true,
          },
        ],
        gridItems: [
          {
            active: false,
            responisve: "",
            thumb: require("../assets/images/portfolio/portfolio-big-01.jpg"),
            src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
          },
          {
            active: true,
            responisve: "mt_sm--30",
            thumb: require("../assets/images/portfolio/portfolio-big-02.jpg"),
            src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
          },
          {
            active: true,
            responisve: "mt_sm--30 mt_md--30",
            thumb: require("../assets/images/portfolio/portfolio-big-03.jpg"),
            src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
          },
        ],
        gridItems2: [
          {
            active: false,
            thumb: require("../assets/images/portfolio/portfolio-big-02.jpg"),
            src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
            class: "mt_sm--0",
          },
          {
            active: true,
            thumb: require("../assets/images/portfolio/portfolio-big-02.jpg"),
            src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
            class: "mt_sm--30",
          },
        ],
        gridItems3: [
          {
            thumb: require("../assets/images/blog/bl-big-01.jpg"),
            src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
          },
        ],
        index: null,
        index2: null,
        index3: null,
      };
    },
  };
</script>
