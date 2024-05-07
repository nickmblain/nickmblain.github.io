<template>
  <v-row>
    <!-- Start Single Team Area  -->
    <v-col
      lg="4"
      md="4"
      sm="6"
      cols="12"
      v-for="team in teamContent"
      :key="team.id"
    >
      <div class="team team-style--bottom">
        <div class="thumbnail">
          <img :src="team.src" alt="Team Images" />
        </div>
        <div class="content">
          <h4 class="heading-title">{{ team.title }}</h4>
          <p class="designation">{{ team.designation }}</p>
        </div>
        <SocialIcon />
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
            title: "Benjamin",
            designation: "Sr. Web Developer",
          },
          {
            id: 2,
            src: require("../../assets/images/team/team-02.jpg"),
            title: "Theodore Sefa",
            designation: "Front-end Engineer",
          },
          {
            id: 3,
            src: require("../../assets/images/team/team-03.jpg"),
            title: "Christopher",
            designation: "Sr. Graphic Designer",
          },
          {
            id: 4,
            src: require("../../assets/images/team/team-04.jpg"),
            title: "Thomas",
            designation: "Sr. Web Developer",
          },
          {
            id: 5,
            src: require("../../assets/images/team/team-05.jpg"),
            title: "Hudson",
            designation: "Front-end Engineer",
          },
          {
            id: 6,
            src: require("../../assets/images/team/team-06.jpg"),
            title: "Maverick",
            designation: "Sr. Graphic Designer",
          },
        ],
      };
    },
  };
</script>
