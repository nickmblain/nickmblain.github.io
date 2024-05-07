<template>
  <footer class="footer-area footer-style-01 bg_color--6">
    <div class="im-call-to-action-area ptb--70 im-separator">
      <v-container>
        <v-row class="align-center">
          <v-col xl="6" lg="8" md="6" sm="12" cols="12">
            <div class="inner">
              <h2 class="white--text mb--0">
                Enough Talk, Let's Build Something Together
              </h2>
            </div>
          </v-col>
          <v-col lg="4" offset-xl="2" md="6" sm="12" cols="12">
            <div
              class="text-left call-to-cation-tbn text-md-right mt_md--20 mt_sm--20"
            >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="footer-wrapper ptb--70">
      <v-container class="container">
        <v-row>
          <v-col lg="4" md="4" sm="6" cols="12">
            <div class="ft-text">
              <div class="logo">
                <a href="/"><img :src="logo" alt="brand image"/></a>
              </div>
              <p>
                Copyright © {{ new Date().getFullYear() }}
                <a href="/">nb-resume</a> Built with love in
                Eagle Mountain, UT All rights reserved.
              </p>
            </div>
          </v-col>
          <v-col
            lg="2"
            offset-xl="1"
            md="6"
            sm="6"
            cols="12"
            class="mt_mobile--40"
          >
            <div class="footer-link">
              <h4>Quick Link</h4>
              <ul class="ft-link">
                <li><router-link to="/portfolio">Portfolio</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/blog">Our Blog</router-link></li>
                <li><router-link to="/team">Our Team</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
              </ul>
            </div>
          </v-col>
          <v-col lg="2" md="2" sm="6" cols="12" class="mt_md--40 mt_sm--40">
            <div class="footer-link">
              <h4>Company</h4>
              <ul class="ft-link">
                <li><router-link to="/service">Service</router-link></li>
                <li><router-link to="/gallery">Gallery</router-link></li>
                <li><router-link to="/pricing-plan">Pricing</router-link></li>
                <li><router-link to="/video-popup">Video PopUp</router-link></li>
                <li><router-link to="/office-location">Office Location</router-link></li>
              </ul>
            </div>
          </v-col>
          <v-col lg="3" md="3" sm="6" cols="12" class="mt_md--40 mt_sm--40">
            <div class="footer-link">
              <h4>Say Hello</h4>
              <ul class="ft-link">
                <li>
                  Email:
                  <a href="mailto:admin@example.com">admin@example.com</a>
                </li>
                <li>
                  Email: <a href="mailto:hr@example.com">hr@example.com</a>
                </li>
                <li>Phone: <a href="tel:123-456-7890">01215256874</a></li>
              </ul>
              <div class="social-share-inner mt--20">
                <ul
                  class="social-share social-style--2 d-flex justify-content-start liststyle mt--15"
                >
                  <li v-for="(social, i) in socialList" :key="i">
                    <a :href="social.url" target="_blank">
                      <i class="fab" :class="social.icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        logo: require("../../assets/images/logo/logo-light.png"),
        socialList: [
          {
            icon: "fa-facebook-f",
            url: "https://www.facebook.com/",
          },
          {
            icon: "fa-linkedin-in",
            url: "https://www.linkedin.com/",
          },
          {
            icon: "fa-twitter",
            url: "https://twitter.com/",
          },
          {
            icon: "fa-instagram",
            url: "https://www.instagram.com/",
          },
        ],
      };
    },
  };
</script>
