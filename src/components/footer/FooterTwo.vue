<template>
  <!-- Start Footer Style Two  -->
  <div class="footer-style-2 ptb--30 bg_color--6" data-black-overlay="6">
    <div class="wrapper plr--50 plr_sm--20">
      <v-row align="center">
        <v-col lg="4" md="4" sm="6" cols="12">
          <div class="inner">
            <div class="text-center d-block logo text-sm-left mb_sm--20">
              <router-link to="/"
                ><img src="data:image/png;base64,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" alt="Nick's Logo"
              /></router-link>
            </div>
          </div>
        </v-col>
        <!-- End .col -->
        <v-col lg="4" md="4" sm="6" cols="12">
          <div class="text-center inner">
            <ul class="justify-center social-share d-flex liststyle">
              <li v-for="(social, i) in socialList" :key="i">
                <a :href="social.url" target="_blank"
                  ><i class="fab" :class="social.icon"></i
                ></a>
              </li>
            </ul>
          </div>
        </v-col>
        <!-- End .col -->
        <v-col lg="4" md="4" sm="12" cols="12">
          <div class="text-center inner text-md-right mt_md--20 mt_sm--20">
            <div class="text">
              <p>
                Built with love in Eagle Mountain, UT - {{ new Date().getFullYear() }}
              </p>
            </div>
          </div>
        </v-col>
        <!-- End .col -->
      </v-row>
    </div>
  </div>
  <!-- End Footer Style Two  -->
</template>

<script>
  export default {
    data() {
      return {
        socialList: [
          {
            icon: "fa-linkedin-in",
            url: "https://www.linkedin.com/in/nicholas-blain-09110b41/",
          },
        ],
      };
    },
  };
</script>
