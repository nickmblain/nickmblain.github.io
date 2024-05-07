<template>
  <ul class="social-icon">
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
        ],
      };
    },
  };
</script>
