<template>
  <!-- Start Service Area  -->
  <v-row class="service-main-wrapper">
    <!-- Start Single Service  -->
    <v-col
      lg="4"
      md="6"
      sm="6"
      cols="12"
      v-for="(service, i) in serviceContent"
      :key="i"
    >
      <div class="text-left service service__style--2">
        <router-link to="/service-details">
          <div class="service">
            <div class="icon" v-html="iconSvg(service.icon)"></div>
            <div class="content">
              <h3 class="heading-title">{{ service.title }}</h3>
              <p>
                {{ service.desc }}
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </v-col>
    <!-- End Single Service  -->
  </v-row>
  <!-- Start Service Area  -->
</template>

<script>
  import feather from "feather-icons";
  export default {
    data() {
      return {
        serviceContent: [
          {
            icon: "cast",
            title: "Business Stratagy",
            desc: ` I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
          },
          {
            icon: "layers",
            title: "Website Development",
            desc: ` I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
          },
          {
            icon: "users",
            title: "Marketing & Reporting",
            desc: `I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
          },
          {
            icon: "monitor",
            title: "Mobile Development",
            desc: `I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
          },
          {
            icon: "mail",
            title: "Email Marketing",
            desc: ` I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
          },
          {
            icon: "copy",
            title: "Copywriting",
            desc: ` I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
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
