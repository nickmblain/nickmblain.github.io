<template>
  <v-row>
    <!-- Start Single Counterup  -->
    <v-col
      md="3"
      sm="3"
      cols="6"
      v-for="(counter, i) in counterUpContent"
      :key="i"
    >
      <div class="rn-counterup counterup_style--2 mt--30">
        <h5 class="counter count">
          <VisibilitySensor @change="onChange">
            <countTo
              :endVal="status ? counter.endVal : 0"
              :autoplay="countUp"
              :duration="3000"
            ></countTo>
          </VisibilitySensor>
        </h5>
        <h4 class="description">
          {{ counter.desc }}
        </h4>
      </div>
    </v-col>
    <!-- Start Single Counterup  -->
  </v-row>
</template>

<script>
  import VisibilitySensor from "vue-visibility-sensor";
  import countTo from "vue-count-to";

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
            endVal: 660,
            desc: `HAPPY CLIENTS`,
          },
          {
            endVal: 894,
            desc: `STORIES`,
          },
          {
            endVal: 500,
            desc: `AWARDS`,
          },
          {
            endVal: 640,
            desc: `FEATURES`,
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
    },
  };
</script>
