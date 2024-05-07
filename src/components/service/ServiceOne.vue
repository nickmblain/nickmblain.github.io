<template>
  <div class="service-wrapper service-white">
    <v-row class="row--25">
      <!-- Start Single Service  -->
      <v-col
        xl="4"
        lg="4"
        md="4"
        sm="6"
        cols="12"
        v-for="(service, i) in serviceContent"
        :key="i"
      >
        <div class="service service__style--1">
          <div class="icon" v-html="iconSvg(service.icon)"></div>
          <div class="content">
            <h4 class="heading-title">
              {{ service.title }}
            </h4>
            <p>
              {{ service.desc }}
            </p>
          </div>
        </div>
      </v-col>
      <!-- End Single Service  -->
    </v-row>
  </div>
</template>

<script>
  import feather from "feather-icons";
  export default {
    data() {
      return {
        serviceContent: [
          {
            icon: "activity",
            title: "Awarded Design",
            desc: `There are many variations variations of passages`,
          },
          {
            icon: "cast",
            title: "Design & Creative",
            desc: `Passages there are many variations variations`,
          },
          {
            icon: "map",
            title: "App Development",
            desc: `Variations There are many variations of passages`,
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

<style lang="scss" scoped>
  .single-service.service__style--3 {
    text-align: center;
  }
</style>
