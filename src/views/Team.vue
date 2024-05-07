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
              <h2 class="heading-title">Team</h2>
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

    <!-- Start team Area  -->
    <div class="rn-team-wrapper ptb--120 bg_color--1">
      <v-container>
        <v-row class="row">
          <v-col cols="12">
            <div class="section-title text-center mb--30">
              <span class="subtitle">Our Experts</span>
              <h2 class="heading-title">Our Skilled Team</h2>
              <p class="description">
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <TeamThree />
      </v-container>
    </div>
    <!-- Start team Area  -->

    <!-- Start team Area  -->
    <div class="rn-team-wrapper ptb--120 bg_color--5">
      <v-container>
        <v-row class="row">
          <v-col cols="12">
            <div class="section-title text-center mb--30">
              <span class="subtitle">Our Experts</span>
              <h2 class="heading-title">Our Skilled Team</h2>
              <p class="description">
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <TeamTwo />
      </v-container>
    </div>
    <!-- Start team Area  -->

    <!-- Start team Area  -->
    <div class="rn-team-wrapper ptb--120 bg_color--1">
      <v-container>
        <v-row class="row">
          <v-col cols="12">
            <div class="section-title text-center mb--30">
              <span class="subtitle">Our Experts</span>
              <h2 class="heading-title">Our Skilled Team</h2>
              <p class="description">
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <Team />
      </v-container>
    </div>
    <!-- Start team Area  -->

    <Footer />
  </div>
</template>

<script>
  import Header from "../components/header/Header";
  import Team from "../components/team/Team";
  import TeamThree from "../components/team/TeamThree";
  import TeamTwo from "../components/team/TeamTwo";
  import Footer from "../components/footer/Footer";
  export default {
    components: {
      Header,
      Team,
      TeamTwo,
      TeamThree,
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
            text: "Team",
            to: "",
            disabled: true,
          },
        ],
      };
    },

    methods: {},
  };
</script>
