<template>
  <v-row class="mt--20">
    <v-col cols="12">
      <ul class="brand-style-2">
        <li v-for="(brand, i) in brandImages" :key="i">
          <img :src="brand.src" alt="Logo Images" />
        </li>
      </ul>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        brandImages: [
          {
            src: require("../../assets/images/brand/brand-01.png"),
            url: "#",
          },
          {
            src: require("../../assets/images/brand/brand-02.png"),
            url: "#",
          },
          {
            src: require("../../assets/images/brand/brand-03.png"),
            url: "#",
          },
          {
            src: require("../../assets/images/brand/brand-04.png"),
            url: "#",
          },
          {
            src: require("../../assets/images/brand/brand-05.png"),
            url: "#",
          },
          {
            src: require("../../assets/images/brand/brand-06.png"),
            url: "#",
          },
          {
            src: require("../../assets/images/brand/brand-02.png"),
            url: "#",
          },
          {
            src: require("../../assets/images/brand/brand-03.png"),
            url: "#",
          },
          {
            src: require("../../assets/images/brand/brand-04.png"),
            url: "#",
          },
        ],
      };
    },
  };
</script>
