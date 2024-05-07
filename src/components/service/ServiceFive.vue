<template>
  <v-row>
    <v-col
      md="4"
      sm="6"
      cols="12"
      class="mt--30"
      v-for="(service, i) in serviceContent"
      :key="i"
    >
      <div class="standard-service">
        <div class="thumbnai">
          <img :src="service.src" alt="Corporate Images" />
        </div>
        <div class="content">
          <h3>
            <router-link to="/service-details">{{ service.title }}</router-link>
          </h3>
          <p>
            {{ service.desc }}
          </p>
          <router-link class="btn-transparent rn-btn-dark" to="/service-details"
            ><span class="text">Read More</span></router-link
          >
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        serviceContent: [
          {
            src: require("../../assets/images/featured/corporate-01.jpg"),
            title: "Thinking Development",
            desc: `I throw myself down among the tall grass by the stream`,
          },
          {
            src: require("../../assets/images/featured/corporate-02.jpg"),
            title: "Business Consulting",
            desc: `I throw myself down among the tall grass by the stream`,
          },
          {
            src: require("../../assets/images/featured/corporate-03.jpg"),
            title: "Business Development",
            desc: `I throw myself down among the tall grass by the stream`,
          },
        ],
      };
    },
  };
</script>
