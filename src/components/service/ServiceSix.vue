<template>
  <v-row class="service-one-wrapper">
    <!-- Start Single Service  -->
    <v-col
      xl="4"
      lg="4"
      md="4"
      sm="6"
      cols="12"
      class="mt--30"
      v-for="(item, i) in serviceContent"
      :key="i"
    >
      <div class="service service__style--1">
        <div class="icon">
          <img :src="item.src" alt="Creative Agency" />
        </div>
        <div class="content mt--20">
          <h4 class="heading-title">
            {{ item.title }}
          </h4>
          <p>
            {{ item.desc }}
          </p>
        </div>
      </div>
    </v-col>
    <!-- End Single Service  -->
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        serviceContent: [
          {
            src: require("../../assets/images/icons/icon-01.png"),
            title: "Interior Design",
            desc: `I throw myself down among the tall grass by the stream as I lie close to the earth.`,
          },
          {
            src: require("../../assets/images/icons/icon-02.png"),
            title: "Landcape Design",
            desc: `I throw myself down among the tall grass by the stream as I lie close to the earth.`,
          },
          {
            src: require("../../assets/images/icons/icon-03.png"),
            title: "Home Interior",
            desc: `I throw myself down among the tall grass by the stream as I lie close to the earth.`,
          },
        ],
      };
    },
  };
</script>
