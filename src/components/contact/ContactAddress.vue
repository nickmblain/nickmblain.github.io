<template>
  <v-row>
    <!-- Start Single Address  -->
    <v-col
      lg="4"
      md="4"
      sm="6"
      cols="12"
      v-for="(address, i) in addressContent"
      :key="i"
    >
      <div class="rn-address" :class="address.isAddress">
        <div class="icon" v-html="iconSvg(address.icon)"></div>
        <div class="inner">
          <h4 class="heading-title">{{ address.title }}</h4>
          <p>
            <a :href="address.to1">{{ address.info1 }}</a>
          </p>
          <p>
            <a :href="address.to2">{{ address.info2 }}</a>
          </p>
        </div>
      </div>
    </v-col>
    <!-- End Single Address  -->
  </v-row>
</template>

<script>
  import feather from "feather-icons";
  export default {
    data() {
      return {
        addressContent: [
          {
            icon: "headphones",
            title: "Contact Phone Number",
            info1: "+444 555 666 777",
            info2: "+222 222 222 333",
            to1: "tel:+444 555 666 777",
            to2: "tel:+222 222 222 333",
          },
          {
            icon: "mail",
            title: "Our Email Address",
            info1: "admin@gmail.com",
            info2: "example@gmail.com",
            to1: "mailto:admin@gmail.com",
            to2: "mailto:example@gmail.com",
          },
          {
            icon: "map",
            title: "Our Location",
            info1: "5678 Bangla Main Road, cities 580",
            info2: "GBnagla, example 54786",
            isAddress: "addres-last",
          },
        ],
      };
    },
    methods: {
      iconSvg(icon) {
        return feather.icons[icon].toSvg();
      },
    },
  };
</script>

<style lang="scss">
  .addres-last {
    p {
      pointer-events: none;
    }
  }
</style>
