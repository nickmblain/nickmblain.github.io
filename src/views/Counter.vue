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
              <h2 class="heading-title">Counter</h2>
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

    <!-- Start countreupup Area  -->
    <div class="counterup-area pt--60 pb--120 bg_color--1 inner-counter-one">
      <v-container>
        <CounterOne />
      </v-container>
    </div>
    <!-- Start countreupup Area  -->

    <!-- Start countreupup Area  -->
    <div
      class="counterup-area pt--60 pb--120 bg-theme-gradient theme-text-white inner-counter-two"
    >
      <v-container>
        <CounterOne />
      </v-container>
    </div>
    <!-- Start countreupup Area  -->

    <!-- Start countreupup Area  -->
    <div class="counterup-area pt--80 pt_sm--30 pt_md--50 pb--120 bg_color--1">
      <v-container>
        <CounterTwo />
      </v-container>
    </div>
    <!-- Start countreupup Area  -->

    <Footer />
  </div>
</template>

<script>
  import Header from "../components/header/Header";
  import CounterOne from "../components/counter/CounterOne";
  import CounterTwo from "../components/counter/CounterTwo";
  import Footer from "../components/footer/Footer";
  export default {
    components: {
      Header,
      CounterOne,
      CounterTwo,
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
            text: "Counter",
            to: "",
            disabled: true,
          },
        ],
      };
    },
  };
</script>

<style lang="scss">
  .inner-counter-one.pt--60 {
    @media screen and (max-width: 991px) {
      padding-top: 20px !important;
    }
    @media screen and (max-width: 767px) {
      padding-top: 0 !important;
    }
  }
  .inner-counter-two.pt--60 {
    @media screen and (max-width: 991px) {
      padding-top: 20px !important;
    }
    @media screen and (max-width: 767px) {
      .row.mt--30 {
        margin-top: 15px !important;
      }
    }
  }
</style>
