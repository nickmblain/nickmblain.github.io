<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" :src="logo" />
    </Header>
    <!-- End Header Area -->
    <!-- Start 404 Page  -->
    <div class="error-page-inner bg_color--4">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="inner">
              <h1 class="heading-title theme-gradient">404!</h1>
              <h3 class="sub-title">Page not found</h3>
              <span>The page you were looking for could not be found.</span>
              <div class="error-button">
                <router-link class="btn-default" to="/"
                  >Back To Homepage</router-link
                >
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End 404 Page  -->
    <FooterTwo />
  </div>
</template>

<script>
  import Header from "../components/header/Header";
  import FooterTwo from "../components/footer/FooterTwo";
  export default {
    components: {
      Header,
      FooterTwo,
    },
    data() {
      return {
        logo: require("../assets/images/logo/logo.png"),
      };
    },
  };
</script>
