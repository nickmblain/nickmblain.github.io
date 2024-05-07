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
              <h2 class="heading-title">Progressbar</h2>
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

    <!-- Start Progress Area  -->
    <div class="rn-progress-area ptb--120 bg_color--1">
      <v-container>
        <v-row>
          <!-- Start Single Chart  -->
          <v-col lg="6" md="6" sm="6" cols="12">
            <div class="progress-wrapper">
              <!-- Start Single Progress Charts -->
              <div class="rn-progress-charts">
                <h6 class="heading heading-h6">Designing</h6>
                <div class="progress fadeInLeft">
                  <div class="progress-bar" style="width: 95%">
                    <span class="percent-label">95%</span>
                  </div>
                </div>
              </div>
              <!-- End Single Progress Charts -->

              <!-- Start Single Progress Charts -->
              <div class="rn-progress-charts mt--40">
                <h6 class="heading heading-h6">Managment</h6>
                <div class="progress">
                  <div class="progress-bar" style="width: 85%">
                    <span class="percent-label">85%</span>
                  </div>
                </div>
              </div>
              <!-- End Single Progress Charts -->

              <!-- Start Single Progress Charts -->
              <div class="rn-progress-charts mt--40">
                <h6 class="heading heading-h6">Marketing</h6>
                <div class="progress">
                  <div class="progress-bar" style="width: 75%">
                    <span class="percent-label">75%</span>
                  </div>
                </div>
              </div>
              <!-- End Single Progress Charts -->

              <!-- Start Single Progress Charts -->
              <div class="rn-progress-charts mt--40">
                <h6 class="heading heading-h6">Development</h6>
                <div class="progress">
                  <div class="progress-bar" style="width: 90%">
                    <span class="percent-label">90%</span>
                  </div>
                </div>
              </div>
              <!-- End Single Progress Charts -->
            </div>
          </v-col>
          <!-- End Single Chart  -->

          <!-- Start Single Chart  -->
          <v-col lg="6" md="6" sm="6" cols="12" class="mt_sm--60">
            <div class="progress-wrapper">
              <!-- Start Single Progress Charts -->
              <div class="rn-progress-charts progress-bar--2">
                <h6 class="heading heading-h6">Designing</h6>
                <div class="progress">
                  <div class="progress-bar" style="width: 95%">
                    <span class="percent-label">95%</span>
                  </div>
                </div>
              </div>
              <!-- End Single Progress Charts -->

              <!-- Start Single Progress Charts -->
              <div class="rn-progress-charts progress-bar--2 mt--40">
                <h6 class="heading heading-h6">Managment</h6>
                <div class="progress">
                  <div class="progress-bar" style="width: 85%">
                    <span class="percent-label">85%</span>
                  </div>
                </div>
              </div>
              <!-- End Single Progress Charts -->

              <!-- Start Single Progress Charts -->
              <div class="rn-progress-charts progress-bar--2 mt--40">
                <h6 class="heading heading-h6">Marketing</h6>
                <div class="progress">
                  <div class="progress-bar" style="width: 75%">
                    <span class="percent-label">75%</span>
                  </div>
                </div>
              </div>
              <!-- End Single Progress Charts -->

              <!-- Start Single Progress Charts -->
              <div class="rn-progress-charts progress-bar--2 mt--40">
                <h6 class="heading heading-h6">Development</h6>
                <div class="progress">
                  <div class="progress-bar" style="width: 90%">
                    <span class="percent-label">90%</span>
                  </div>
                </div>
              </div>
              <!-- End Single Progress Charts -->
            </div>
          </v-col>
          <!-- End Single Chart  -->
        </v-row>
      </v-container>
    </div>
    <!-- Start Progress Area  -->

    <!-- Start Progress Area  -->
    <div class="rn-progress-area pb--120 bg_color--1">
      <v-container>
        <v-row class="mt_dec--60">
          <!-- Start Single Chart  -->
          <v-col lg="6" md="6" sm="6" cols="12">
            <div class="progress-wrapper">
              <!-- Start Single Progress Charts -->
              <div class="mt-40 rn-progress-charts progress-bar--3">
                <h6 class="heading heading-h6">Designing</h6>
                <div class="progress">
                  <div class="progress-bar" style="width: 95%">
                    <span class="percent-label">95%</span>
                  </div>
                </div>
              </div>
              <!-- End Single Progress Charts -->

              <!-- Start Single Progress Charts -->
              <div class="rn-progress-charts progress-bar--3 mt--40">
                <h6 class="heading heading-h6">Managment</h6>
                <div class="progress">
                  <div class="progress-bar" style="width: 85%">
                    <span class="percent-label">85%</span>
                  </div>
                </div>
              </div>
              <!-- End Single Progress Charts -->

              <!-- Start Single Progress Charts -->
              <div class="rn-progress-charts progress-bar--3 mt--40">
                <h6 class="heading heading-h6">Marketing</h6>
                <div class="progress">
                  <div class="progress-bar " style="width: 75%">
                    <span class="percent-label">75%</span>
                  </div>
                </div>
              </div>
              <!-- End Single Progress Charts -->

              <!-- Start Single Progress Charts -->
              <div class="rn-progress-charts progress-bar--3 mt--40">
                <h6 class="heading heading-h6">Development</h6>
                <div class="progress">
                  <div class="progress-bar" style="width: 90%">
                    <span class="percent-label">90%</span>
                  </div>
                </div>
              </div>
              <!-- End Single Progress Charts -->
            </div>
          </v-col>
          <!-- End Single Chart  -->

          <!-- Start Single Chart  -->

          <v-col lg="6" md="6" sm="6" cols="12" class=" mt_sm--20">
            <div class="progress-wrapper">
              <!-- Start Single Progress Charts -->
              <div class="rn-progress-charts mt--40">
                <h6 class="heading heading-h6">Designing</h6>
                <div class="progress">
                  <div class="progress-bar" style="width: 95%">
                    <span class="percent-label">95%</span>
                  </div>
                </div>
              </div>
              <!-- End Single Progress Charts -->

              <!-- Start Single Progress Charts -->
              <div class="rn-progress-charts custom-color--2 mt--40">
                <h6 class="heading heading-h6">Managment</h6>
                <div class="progress">
                  <div class="progress-bar" style="width: 85%">
                    <span class="percent-label">85%</span>
                  </div>
                </div>
              </div>
              <!-- End Single Progress Charts -->

              <!-- Start Single Progress Charts -->
              <div class="rn-progress-charts custom-color--3 mt--40">
                <h6 class="heading heading-h6">Marketing</h6>
                <div class="progress">
                  <div class="progress-bar" style="width: 75%">
                    <span class="percent-label">75%</span>
                  </div>
                </div>
              </div>
              <!-- End Single Progress Charts -->

              <!-- Start Single Progress Charts -->
              <div class="rn-progress-charts custom-color--4 mt--40">
                <h6 class="heading heading-h6">Development</h6>
                <div class="progress">
                  <div class="progress-bar wow fadeInLeft" style="width: 90%">
                    <span class="percent-label">90%</span>
                  </div>
                </div>
              </div>
              <!-- End Single Progress Charts -->
            </div>
          </v-col>
          <!-- End Single Chart  -->
        </v-row>
      </v-container>
    </div>
    <!-- Start Progress Area  -->

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
            text: "Progressbar",
            to: "",
            disabled: true,
          },
        ],
      };
    },
  };
</script>
