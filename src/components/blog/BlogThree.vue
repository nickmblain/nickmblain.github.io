<template>
  <v-row class="mt_dec--30">
    <!-- Start Blog Area  -->
    <v-col
      lg="4"
      md="4"
      sm="6"
      cols="12"
      v-for="(item, i) in blogContent"
      :key="i"
    >
      <div class="im_box mt--30">
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
                <router-link to="/blog-details">{{ item.title }}</router-link>
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
    </v-col>
    <!-- End Blog Area  -->
  </v-row>
</template>

<script>
  export default {
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
      };
    },
  };
</script>
