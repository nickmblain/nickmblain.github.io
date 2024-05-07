<template>
  <v-row class="row--35" align="center">
    <v-col lg="6" md="6" cols="12">
      <div class="thumbnail">
        <img
          class="w-100"
          src="../../assets/images/about/about-4.png"
          alt="About Images"
        />
      </div>
    </v-col>
    <v-col lg="6" md="6" cols="12">
      <div class="about-inner inner">
        <div class="section-title">
          <span class="subtitle">Our working process</span>
          <h2 class="heading-title">Working Process</h2>
        </div>
        <div class="rn-accordion mt--20">
          <Accordion />
        </div>

        <div class="about-button mt--50">
          <a class="rn-button-style--2 btn-solid" href="about.html"
            >See how it works</a
          >
        </div>
      </div>
    </v-col>
  </v-row>
</template>
<script>
  import Accordion from "../../components/accordion/Accordion";
  export default {
    components: {
      Accordion,
    },
    data() {
      return {};
    },
  };
</script>
