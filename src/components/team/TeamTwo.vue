<template>
  <v-row>
    <!-- Start Single Team Area  -->
    <v-col
      lg="3"
      md="3"
      sm="6"
      cols="6"
      v-for="team in teamContent"
      :key="team.id"
    >
      <div class="team-static mt--30">
        <div class="thumbnail">
          <img :src="team.src" alt="Team Images" />
        </div>
        <div class="inner">
          <div class="content">
            <h4 class="heading-title">{{ team.title }}</h4>
            <p class="designation">{{ team.designation }}</p>
          </div>
          <SocialIcon class="social-transparent liststyle d-flex" />
        </div>
      </div>
    </v-col>
    <!-- End Single Team Area  -->
  </v-row>
</template>

<script>
  import SocialIcon from "../../components/social/Social";
  export default {
    components: {
      SocialIcon,
    },
    data() {
      return {
        teamContent: [
          {
            id: 1,
            src: require("../../assets/images/team/team-01.jpg"),
            title: "Jone Due",
            designation: "Sr. Web Developer",
          },
          {
            id: 2,
            src: require("../../assets/images/team/team-03.jpg"),
            title: "Fatima-Asrafi",
            designation: "Front-end Engineer",
          },
          {
            id: 3,
            src: require("../../assets/images/team/team-05.jpg"),
            title: "Al-Amin Bali",
            designation: "Sr. Graphic Designer",
          },
          {
            id: 4,
            src: require("../../assets/images/team/team-06.jpg"),
            title: "Fatima-Asrafi",
            designation: "Front-end Engineer",
          },
        ],
      };
    },
  };
</script>
