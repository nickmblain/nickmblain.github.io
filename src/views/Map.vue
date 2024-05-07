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
              <h2 class="heading-title">Office Location</h2>
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

     <!-- Start Office Location Area -->
    <div class="rn-contact-map-wrapper ptb--120 bg_color--1">
      <v-container>
        <v-row>
           <v-col lg="6" md="6" cols="12">
            <Map/>
          </v-col>
          <v-col lg="6" md="6" cols="12" class="mt_md--30 mt_sm--30">
            <Map/>
          </v-col>
        </v-row>
      </v-container>
    </div>
     <!-- End Office Location Area Area -->

     <!-- Start Office Location Area -->
    <div class="rn-contact-map-wrapper ptb--120 bg_color--5">
      <v-container>
        <v-row>
          <v-col lg="4" md="6" cols="12">
            <Map/>
          </v-col>
          <v-col lg="4" md="6" cols="12" class="mt_sm--30 mt_md--30">
            <Map/>
          </v-col>
          <v-col lg="4" md="6" cols="12" class="mt_lg--30 mt_md--30 mt_sm--30">
            <Map/>
          </v-col>
        </v-row>
      </v-container>
    </div>
     <!-- End Office Location Area Area -->

    <!-- Start Office Location Area -->
    <div class="rn-contact-map-wrapper ptb--120 bg_color--1">
      <v-container>
        <Map />
      </v-container>
    </div>
    <!-- End Office Location Area Area -->


    <Footer />
  </div>
</template>

<script>
  import Header from "../components/header/Header";
  import Map from "../components/location/Map";
  import Footer from "../components/footer/Footer";
  export default {
    components: {
      Header,
      Map,
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
            text: "Office Loacation",
            to: "",
            disabled: true,
          },
        ],
      };
    },
  };
</script>

<style lang="scss">

</style>
