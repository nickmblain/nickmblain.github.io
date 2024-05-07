<template>
  <div class="header-three">
    <v-navigation-drawer
      class="hidden-md-and-up"
      v-model="drawer"
      absolute
      temporary
      width="320"
    >
      <v-list-item class="pa-5">
        <div class="logo">
            <img src="../../assets/images/logo/logo-symbol-dark.png" alt="brand-image">
        </div>
          <v-spacer></v-spacer>
          <v-btn class="close-icon"  icon @click="drawer = !drawer" v-html="iconSvg(closeIcon)">
          </v-btn>
      </v-list-item>

    </v-navigation-drawer>
    <!-- End sidebar mobile menu -->

    <v-app-bar
      dark
      elevation="0"
      color="transparent"
      absolute
      class="default-header"
    >
      <router-link to="/" class="logo">
        <slot name="logo"></slot>
      </router-link>
      <!-- End brand logo -->

      <!-- End header menu item -->
      <v-spacer></v-spacer>
      <div class="social-share-inner d-none d-sm-block">
        <socialTwo />
      </div>
      <v-btn
        icon
        :ripple="false"
         class="ma-0 pa-0 hidden-md-and-up menu_icon"
        @click="drawer = !drawer"
        v-html="iconSvg(icon)"
      >
      </v-btn>
      <!-- End mobile menu icon -->
    </v-app-bar>
    <!-- End top header navbar -->
  </div>
</template>

<script>
  import feather from "feather-icons";
  import socialTwo from "../social/SocialTwo";
  export default {
    components: {
      socialTwo,
    },
    data: () => ({
      drawer: false,
      items: [
        { title: "About", to: "/about" },
        { title: "Contact", to: "/contact" },
      ],

      icon: "menu",
      closeIcon: "x",
    }),
    methods: {
      iconSvg(icon) {
        return feather.icons[icon].toSvg();
      },
    },
  };
</script>

