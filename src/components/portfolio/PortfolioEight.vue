<template>
  <div>
    <!-- Start Portfolio Activation  -->
    <VueSlickCarousel
      v-bind="settings"
      class="rn-slick-activation portfolio-slick-activation item-fluid slick-dotted rn-slick-dot mt--40 mt_sm--40"
    >
      <!-- Start Single Portfolio  -->
      <div class="im_portfolio" v-for="(item, i) in portfolioContent" :key="i">
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
      <!-- End Single Portfolio  -->
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from "vue-slick-carousel";
  export default {
    components: {
      VueSlickCarousel,
    },
    data() {
      return {
        portfolioContent: [
          {
            src: require("../../assets/images/portfolio/interior/portfolio-8.jpg"),
            category: "Interior",
            title: "Kitchen Collection",
            description:
              "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/interior/portfolio-9.jpg"),
            category: "Home Design",
            title: "Office Decoration",
            description:
              "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/interior/portfolio-10.jpg"),
            category: "Interior",
            title: "Bedroom Lighting",
            description:
              "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/interior/portfolio-11.jpg"),
            category: "Interior",
            title: "Home Interior",
            description:
              "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/interior/portfolio-9.jpg"),
            category: "Design",
            title: "Landcape Design",
            description:
              "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/interior/portfolio-8.jpg"),
            category: "Interior",
            title: "Home Interior",
            description:
              "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
          },
        ],
        // for all works
        settings: {
          dots: true,
          arrows: true,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 0,

          responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 1263,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 770,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
            {
              breakpoint: 599,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              },
            },
          ],
        },
      };
    },
  };
</script>
