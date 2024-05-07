<template>
  <v-row>
    <!-- Start Single Portfolio  -->
    <v-col
      lg="4"
      md="4"
      sm="6"
      cols="12"
      class="mt--40"
      v-for="(item, i) in portfolioContent"
      :key="i"
    >
      <div class="im_portfolio text-center">
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
            src: require("../../assets/images/portfolio/portfolio-4.jpg"),
            category: "Development",
            title: "Web Design",
            description:
              "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-5.jpg"),
            category: "Product Design",
            title: "App Development",
            description:
              "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-6.jpg"),
            category: "Design",
            title: "Photoshop Design",
            description:
              "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-7.jpg"),
            category: "Shop",
            title: "Woocommerce",
            description:
              "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-8.jpg"),
            category: "Medical",
            title: "Medical Application",
            description:
              "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-9.jpg"),
            category: "Photoshop",
            title: "Photo Editing",
            description:
              "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
          },
        ],
      };
    },
  };
</script>
