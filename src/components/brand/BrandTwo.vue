<template>
  <!-- Start Brand Area -->
  <v-row class="mt--30">
    <v-col cols="12">
      <ul class="brand-list branstyle--2">
        <li v-for="(brand, i) in brandImages" :key="i">
          <img :src="brand.src" alt="Logo Images" />
        </li>
      </ul>
    </v-col>
  </v-row>
  <!-- End Brand Area -->
</template>

<script>
  export default {
    data() {
      return {
        brandImages: [
          {
            src: require("../../assets/images/brand/brand-01.png"),
          },
          {
            src: require("../../assets/images/brand/brand-02.png"),
          },
          {
            src: require("../../assets/images/brand/brand-03.png"),
          },
          {
            src: require("../../assets/images/brand/brand-04.png"),
          },
          {
            src: require("../../assets/images/brand/brand-05.png"),
          },
          {
            src: require("../../assets/images/brand/brand-06.png"),
          },
        ],
      };
    },
  };
</script>
