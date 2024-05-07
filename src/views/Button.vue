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
              <h2 class="heading-title">Button</h2>
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

    <div class="rn-button-wrapper ptb--120">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="button-group">
              <a class="btn-default btn-large" href="#button">Button Solid</a
              ><a class="btn-default btn-border btn-large" href="#button"
                >Button Border</a
              ><a class="btn-default btn-dark btn-large" href="#button"
                >Button Dark</a
              ><a
                class="btn-default btn-dark btn-border btn-large"
                href="#button"
                >Button Border</a
              >
            </div>
            <div class="button-group mt--50">
              <a class="btn-default" href="#button">Button Solid</a
              ><a class="btn-default btn-border" href="#button">Button Border</a
              ><a class="btn-default btn-dark" href="#button">Button Dark</a
              ><a class="btn-default btn-dark btn-border" href="#button"
                >Button Border</a
              >
            </div>
            <div class="button-group mt--50">
              <a class="btn-default size-md" href="#button">Button Solid</a
              ><a class="btn-default btn-border size-md" href="#button"
                >Button Border</a
              ><a class="btn-default btn-dark size-md" href="#button"
                >Button Solid</a
              ><a class="btn-default btn-dark btn-border size-md" href="#button"
                >Button Border</a
              >
            </div>
            <div class="button-group mt--50">
              <a class="btn-default size-sm" href="#button">Button Solid</a
              ><a class="btn-default btn-border size-sm" href="#button"
                >Button Border</a
              ><a class="btn-default btn-dark size-sm" href="#button"
                >Button Solid</a
              ><a class="btn-default btn-dark btn-border size-sm" href="#button"
                >Button Border</a
              >
            </div>
            <div class="button-group mt--50">
              <a class="btn-default color-secondary" href="#button"
                >Button Solid</a
              ><a class="btn-default color-secondary size-md" href="#button"
                >Button Border</a
              ><a class="btn-default color-secondary size-sm" href="#button"
                >Button Border</a
              >
            </div>
            <div class="button-group mt--50">
              <a class="btn-default btn-border color-secondary" href="#button"
                >Button Border</a
              >
            </div>
            <div class="button-group mt--50">
              <a class="btn-transparent" href="#button">View More Button</a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Button Area  -->

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
            text: "Button",
            to: "",
            disabled: true,
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped></style>
