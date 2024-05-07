<template>
  <v-row>
    <!-- Start Single Portfolio  -->
    <v-col
      lg="3"
      md="4"
      sm="6"
      cols="12"
      v-for="(item, i) in portfolioContent"
      :key="i"
      class="mb--30"
    >
      <div class="im_portfolio">
        <div class="thumbnail_inner">
          <div class="thumbnail">
            <a href="portfolio-details.html">
              <img class="w-100" :src="item.src" alt="Portfolio Images" />
            </a>
          </div>
        </div>
        <div class="content">
          <div class="inner">
            <div class="portfolio_heading">
              <div class="category_list">
                <router-link to="/portfolio-details">{{
                  item.category
                }}</router-link>
              </div>
              <h4 class="heading-title">
                <router-link to="/portfolio-details">{{
                  item.title
                }}</router-link>
              </h4>
            </div>
            <div class="portfolio_hover">
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
        <router-link
          class="transparent_link"
          to="/portfolio-details"
        ></router-link>
      </div>
    </v-col>
    <!-- End Single Portfolio  -->
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        portfolioContent: [
          {
            src: require("../../assets/images/portfolio/portfolio-1.jpg"),
            category: "Development",
            title: "You can see your Portfolio",
            description:
              "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-2.jpg"),
            category: "Html",
            title: "Getting tickets to the big show",
            description:
              "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-3.jpg"),
            category: "Graphic",
            title: "You can see your Portfolio",
            description:
              "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-4.jpg"),
            category: "Freelancer",
            title: "You can see your Portfolio",
            description:
              "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-5.jpg"),
            category: "Freelancer",
            title: "The Language of Developer",
            description:
              "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-6.jpg"),
            category: "Freelancer",
            title: "You can see your Portfolio",
            description:
              "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-7.jpg"),
            category: "App Development",
            title: "The Language of Developer",
            description:
              "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-8.jpg"),
            category: "Freelancer",
            title: "You can see your Portfolio",
            description:
              "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
          },
        ],
      };
    },
  };
</script>
