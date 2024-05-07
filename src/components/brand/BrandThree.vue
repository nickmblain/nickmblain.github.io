<template>
  <ul class="brand-style-2">
    <li v-for="(brand, i) in brandImages" :key="i">
      <a :href="brand.url">
        <img :src="brand.src" alt="Logo Images" />
      </a>
    </li>
  </ul>
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
        ],
      };
    },
  };
</script>
