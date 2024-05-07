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
              <h2 class="heading-title">Pricing Plane</h2>
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

    <!-- Start Pricing Plan Area  -->
    <div class="rn-pricing-table-area ptb--120 bg_color--5">
      <v-container>
        <div class="mt_dec--30">
          <PricingPlan />
        </div>
      </v-container>
    </div>
    <!-- End Pricing Plan Area  -->

    <Footer />
  </div>
</template>

<script>
  import Header from "../components/header/Header";
  import PricingPlan from "../components/pricing-plan/PricingPlan";
  import Footer from "../components/footer/Footer";
  export default {
    components: {
      Header,
      PricingPlan,
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
            text: "Pricing Plane",
            to: "",
            disabled: true,
          },
        ],
      };
    },
  };
</script>
