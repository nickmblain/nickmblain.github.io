<template>
  <div class="wrapper">
    <v-container>
      <v-row class="justify-between align-center">
        <v-col lg="12">
          <div class="text-center inner">
            <div class="callto-action-area callto-action_area">
              <h2 class="heading-title white--text mb--30">
                Interested you <br />
                working with us.
              </h2>
              <div class="contact-btn">
                <router-link class="btn-default" to="/contact"
                  >Contact Us</router-link
                >
              </div>
            </div>
            <div class="justify-center logo">
              <router-link to="/"
                ><img
                  src="../../assets/images/logo/logo-light.png"
                  alt="Logo images"
              /></router-link>
            </div>
            <ul class="justify-center social-share d-flex liststyle">
              <li v-for="(social, i) in socialList" :key="i">
                <a :href="social.url" target="_blank"
                  ><i class="fab" :class="social.icon"></i
                ></a>
              </li>
            </ul>
            <div class="text mt--20">
              <p>
                © {{ new Date().getFullYear() }}
                <a
                  target="_blank"
                  class="copyright_txt"
                  href="https://themeforest.net/user/ib-themes"
                  >ib-themes</a
                >. All Rights Reserved.
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
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
            icon: "fab fa-instagram",
            url: "https://www.instagram.com/",
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .v-application a {
    &.copyright_txt {
      color: var(--color-gray);
    }
  }
</style>
