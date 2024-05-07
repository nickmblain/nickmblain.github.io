<template>
  <div>
    <v-navigation-drawer
      class="hidden-md-and-up header-one-page-nav-drawer demo-page-drawer"
      v-model="drawer"
      fixed
      width="320"
    >
      <v-list-item class="pa-5">
        <div class="logo">
          <img
            src="../../assets/images/logo/logo-symbol-dark.png"
            alt="brand-image"
          />
        </div>
        <v-spacer></v-spacer>
        <v-btn
          class="close-icon"
          icon
          @click="drawer = !drawer"
          v-html="iconSvg(closeIcon)"
        >
        </v-btn>
      </v-list-item>
      <scrollactive
        active-class="v-btn--active"
        bezier-easing-value=".5,0,.35,1"
      >
        <v-list>
          <v-list-item
            :ripple="false"
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            link
            class="scrollactive-item"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- End mobile menu sidebar item list -->
        </v-list>
      </scrollactive>

      <v-list>
        <v-list-item
          :ripple="false"
          link
          target="_blank"
          href="https://www.ibthemespro.com/docs/nb-resume/"
        >
          <v-list-item-content>
            <v-list-item-title>Documentation</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          :ripple="false"
          link
          target="_blank"
          href="https://support.rainbowit.net/support/login"
        >
          <v-list-item-content>
            <v-list-item-title>Friendly Support</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- End sidebar mobile menu -->

    <v-app-bar
      dark
      elevation="0"
      color="transparent"
      absolute
      class="default-header preview-header"
    >
      <router-link to="/" class="logo">
        <slot name="logo"></slot>
      </router-link>
      <!-- End brand logo -->
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only hidden-sm-only height-auto">
        <scrollactive
          active-class="v-btn--active"
          bezier-easing-value=".5,0,.35,1"
          :offset="1"
        >
          <v-btn
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            link
            :ripple="false"
            text
            class="scrollactive-item"
            >{{ item.title }}</v-btn
          >
        </scrollactive>
        <v-btn
          text
          :ripple="false"
          link
          target="_blank"
          href="https://www.ibthemespro.com/docs/nb-resume/"
          >Documentation</v-btn
        >
        <v-btn
          text
          :ripple="false"
          link
          target="_blank"
          href="https://support.rainbowit.net/support/login"
          >Friendly Support</v-btn
        >
      </v-toolbar-items>
      <!-- End header menu item -->
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
  export default {
    data: () => ({
      drawer: false,
      items: [
        { title: "View Demo", to: "#view-demo" },
        { title: "Feature", to: "#feature" },
        { title: "FAQ", to: "#faq" },
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

<style lang="scss">
  @media only screen and (max-width: 767px) {
    .default-header a.btn-default {
      font-size: 14px;
      letter-spacing: 0;
      padding: 7px 16px;
    }
  }
  .demo-page-drawer {
    &.v-navigation-drawer--is-mobile .v-list {
      padding-bottom: 0 !important;
    }
  }
  .preview-header {
    &.v-toolbar:not(.tab-toolbar)
      .v-btn.v-btn.v-size--default:not(.btn-default) {
      &:hover {
        color: var(--color-primary);
      }
    }
  }

  .demo-page-drawer.v-navigation-drawer--is-mobile
    .v-list-item--link:last-child {
    border-bottom: 1px solid var(--color-border);
  }
</style>
