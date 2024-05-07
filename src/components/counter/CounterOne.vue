<template>
  <v-row class="mt--30">
    <!-- Start Single Counterup  -->
    <v-col
      lg="3"
      md="3"
      sm="6"
      cols="12"
      class="im_single_counterup"
      v-for="(counter, i) in counterUpContent"
      :key="i"
    >
      <div class="im_counterup">
        <div class="inner">
          <div class="icon" v-html="iconSvg(counter.icon)"></div>
          <h5 class="counter count">
            <VisibilitySensor @change="onChange">
              <countTo
                :endVal="status ? counter.endVal : 0"
                :autoplay="countUp"
                :duration="3000"
              ></countTo>
            </VisibilitySensor>
          </h5>
          <p class="description">
            {{ counter.desc }}
          </p>
        </div>
      </div>
    </v-col>
    <!-- Start Single Counterup  -->
  </v-row>
</template>

<script>
  import VisibilitySensor from "vue-visibility-sensor";
  import countTo from "vue-count-to";
  import feather from "feather-icons";
  export default {
    components: {
      countTo,
      VisibilitySensor,
    },
    data() {
      return {
        countUp: true,
        status: false,
        counterUpContent: [
          {
            icon: "heart",
            endVal: 199,
            desc: `Staticfied Customers`,
          },
          {
            icon: "clock",
            endVal: 575,
            desc: `Days Of Operation`,
          },
          {
            icon: "check-circle",
            endVal: 49,
            desc: `Complete Project`,
          },
          {
            icon: "award",
            endVal: 55,
            desc: `Win Awards`,
          },
        ],
      };
    },
    methods: {
      onChange(isVisible) {
        if (isVisible) {
          this.status = true;
        }
      },
      iconSvg(icon) {
        return feather.icons[icon].toSvg();
      },
    },
  };
</script>
