<template>
  <div class="brand-page">
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
              <h2 class="heading-title">Brand</h2>
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

    <!-- Start Brand Area -->
    <div class="rn-brand-area ptb--120 bg_color--5">
      <v-container>
        <BrandTwo />
      </v-container>
    </div>
    <!-- End Brand Area -->

    <!-- Start Brand Area -->
    <div class="rn-brand-area ptb--120 bg_color--1">
      <v-container>
        <BrandThree />
      </v-container>
    </div>
    <!-- End Brand Area -->

    <!-- Start Brand Area -->
    <div class="rn-brand-area ptb--120 bg_color--5">
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
  import Brand from "../components/brand/Brand";
  import BrandThree from "../components/brand/BrandThree";
  import BrandTwo from "../components/brand/BrandTwo";
  import Footer from "../components/footer/Footer";
  export default {
    components: {
      Header,
      Brand,
      BrandThree,
      BrandTwo,
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
            text: "Brand",
            to: "",
            disabled: true,
          },
        ],
      };
    },
  };
</script>

<style lang="scss">
  .brand-page {
    .row.mt--30,
    .row.mt--20 {
      margin-top: 0 !important;
    }
  }
</style>
