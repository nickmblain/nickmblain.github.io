<template>
  <ul
    class="social-share social-style--2 color-black d-flex justify-content-start liststyle"
  >
    <li v-for="(social, i) in socialList" :key="i">
      <a target="_blank" :href="social.url"
        ><i class="fab" :class="social.icon"></i
      ></a>
    </li>
  </ul>
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
