<template>
  <v-row>
    <v-col cols="12">
      <div class="slick-space-gutter--15 slickdot--20">
        <VueSlickCarousel
          v-bind="settings"
          class="rn-slick-activation slick-dotted rn-slick-dot mt--10"
        >
          <!-- Start Single Blog  -->

          <div class="im_box mt--30" v-for="(item, i) in blogContent" :key="i">
            <div class="thumbnail">
              <router-link to="/blog-details">
                <img class="w-100" :src="item.src" alt="Blog Images" />
              </router-link>
            </div>
            <div class="content">
              <div class="inner">
                <div class="content_heading">
                  <div class="category_list">
                    <router-link to="/blog-details">{{
                      item.category
                    }}</router-link>
                  </div>
                  <h4 class="heading-title">
                    <router-link to="/blog-details">{{
                      item.title
                    }}</router-link>
                  </h4>
                </div>
                <div class="content_footer">
                  <router-link to="/blog-details" class="rn-btn btn-opacity">
                    Read More
                  </router-link>
                </div>
              </div>
              <router-link
                class="transparent_link"
                to="/blog-details"
              ></router-link>
            </div>
          </div>

          <!-- End Single Blog  -->
        </VueSlickCarousel>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  import VueSlickCarousel from "vue-slick-carousel";
  export default {
    components: {
      VueSlickCarousel,
    },
    data() {
      return {
        blogContent: [
          {
            src: require("../../assets/images/blog/blog-01.jpg"),
            title: "What is the Difference between Web and Brand.",
            category: "App Development",
          },
          {
            src: require("../../assets/images/blog/blog-02.jpg"),
            title: "A big ticket gone to be an interesting look New York.",
            category: "React App",
          },
          {
            src: require("../../assets/images/blog/blog-03.jpg"),
            title: "Getting tickets to the big show have a closer look.",
            category: "Photoshop",
          },
          {
            src: require("../../assets/images/blog/blog-04.jpg"),
            title: "What is the Difference between Web and Brand.",
            category: "App Development",
          },
          {
            src: require("../../assets/images/blog/blog-05.jpg"),
            title: "A big ticket gone to be an interesting look New York.",
            category: "React App",
          },
          {
            src: require("../../assets/images/blog/blog-06.jpg"),
            title: "Getting tickets to the big show have a closer look.",
            category: "Photoshop",
          },
        ],
        // for all works
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          spaceBetween: 15,

          responsive: [
            {
              breakpoint: 890,
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
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 490,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
          ],
        },
      };
    },
  };
</script>
