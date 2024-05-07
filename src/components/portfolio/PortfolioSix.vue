<template>
  <v-row>
    <!-- Start Single Portfolio  -->
    <v-col
      xl="3"
      lg="3"
      md="4"
      sm="6"
      cols="12"
      class="portfolio-tilthover"
      v-for="(item, i) in portfolioContent"
      :key="i"
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
            src: require("../../assets/images/portfolio/portfolio-static-01.jpg"),
            category: "Development",
            title: "Web Design",
            description:
              "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-static-02.jpg"),
            category: "Product Design",
            title: "App Development",
            description:
              "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-static-03.jpg"),
            category: "Design",
            title: "Web Development",
            description:
              "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-static-04.jpg"),
            category: "Shop",
            title: "Photoshop Design",
            description:
              "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-static-05.jpg"),
            category: "Interior",
            title: "Interior Design",
            description:
              "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-static-06.jpg"),
            category: "Ecommerce",
            title: "Ecommerce",
            description:
              "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-static-07.jpg"),
            category: "Medical",
            title: "Medical Application",
            description:
              "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-static-08.jpg"),
            category: "Development",
            title: "Web Programming",
            description:
              "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
          },
        ],
      };
    },
  };
</script>
