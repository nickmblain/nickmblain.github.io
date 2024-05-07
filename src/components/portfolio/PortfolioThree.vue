<template>
  <div>
    <v-tabs v-model="tab" centered flat hide-slider color="primary">
      <v-tab :ripple="false" v-for="item in tabItems" :key="item.id">{{
        item.name
      }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabContent" :key="item.id" transition="fade-transition">
        <CoolLightBox
          :items="item.content"
          :index="index"
          :fullScreen="true"
          :effect="'fade'"
          @close="index = null"
        >
        </CoolLightBox>
        <div
          class="gallery-wrapper gallery-grid mesonry-list grid-metro3"
          id="animated-thumbnials"
        >
          <div
            v-for="(item, i) in item.content"
            :key="i"
            @click="index = i"
            class="image masonry_item portfolio-33-33"
          >
            <div class="item-portfolio-static ">
              <div class="portfolio-static">
                <div class="thumbnail-inner">
                  <div class="thumbnail">
                    <img :src="item.thumb" alt="portfolio image" />
                  </div>
                </div>

                <div class="content">
                  <div class="inner">
                    <p>{{ item.tag }}</p>
                    <h4>{{ item.title }}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tab: null,
        index: null,
        tabItems: [
          {
            id: 1,
            name: "All Project",
          },
          {
            id: 2,
            name: "Web Design",
          },
          {
            id: 3,
            name: "Logo Design",
          },
          {
            id: 4,
            name: "Mobile App",
          },
        ],
        tabContent: [
          {
            id: 1,
            content: [
              {
                thumb: require("../../assets/images/portfolio/dp-portfolio-01.jpg"),
                src: require("../../assets/images/portfolio/big/dp-big--portfolio-01.jpg"),
                tag: "Web Design",
                title: `T-shirt design is the part of design`,
              },
              {
                thumb: require("../../assets/images/portfolio/dp-portfolio-02.jpg"),
                src: require("../../assets/images/portfolio/big/dp-big--portfolio-02.jpg"),
                tag: "App Development",
                title: `The service provide for designer`,
              },
              {
                thumb: require("../../assets/images/portfolio/dp-portfolio-03.jpg"),
                src: require("../../assets/images/portfolio/big/dp-big--portfolio-03.jpg"),
                tag: "Web Design",
                title: `Mobile App landing Design`,
              },
              {
                thumb: require("../../assets/images/portfolio/dp-portfolio-04.jpg"),
                src: require("../../assets/images/portfolio/big/dp-big--portfolio-04.jpg"),
                tag: "Logo Design",
                title: `Logo Design creativity`,
              },
              {
                thumb: require("../../assets/images/portfolio/dp-portfolio-05.jpg"),
                src: require("../../assets/images/portfolio/big/dp-big--portfolio-05.jpg"),
                tag: "Web Design",
                title: `Getting tickets to the big show`,
              },
              {
                thumb: require("../../assets/images/portfolio/dp-portfolio-06.jpg"),
                src: require("../../assets/images/portfolio/big/dp-big--portfolio-06.jpg"),
                tag: "Web Design",
                title: `T-shirt design is the part of design`,
              },
              {
                thumb: require("../../assets/images/portfolio/dp-portfolio-07.jpg"),
                src: require("../../assets/images/portfolio/big/dp-big--portfolio-07.jpg"),
                tag: "Freelancer",
                title: `Web application create a app`,
              },
              {
                thumb: require("../../assets/images/portfolio/dp-portfolio-08.jpg"),
                src: require("../../assets/images/portfolio/big/dp-big--portfolio-08.jpg"),
                tag: "Logo Designer",
                title: `Show your mobile data.`,
              },
              {
                thumb: require("../../assets/images/portfolio/dp-portfolio-09.jpg"),
                src: require("../../assets/images/portfolio/big/dp-big--portfolio-09.jpg"),
                tag: "Logo Designer",
                title: `Data application is a mobile data.`,
              },
            ],
          },
          {
            id: 2,
            content: [
              {
                thumb: require("../../assets/images/portfolio/dp-portfolio-03.jpg"),
                src: require("../../assets/images/portfolio/big/dp-big--portfolio-03.jpg"),
                tag: "Web Design",
                title: `Mobile App landing Design`,
              },
              {
                thumb: require("../../assets/images/portfolio/dp-portfolio-04.jpg"),
                src: require("../../assets/images/portfolio/big/dp-big--portfolio-04.jpg"),
                tag: "Web Design",
                title: `Web Design creativity`,
              },
              {
                thumb: require("../../assets/images/portfolio/dp-portfolio-05.jpg"),
                src: require("../../assets/images/portfolio/big/dp-big--portfolio-05.jpg"),
                tag: "Web Design",
                title: `Getting tickets to the big show`,
              },
            ],
          },
          {
            id: 3,
            content: [
              {
                thumb: require("../../assets/images/portfolio/dp-portfolio-02.jpg"),
                src: require("../../assets/images/portfolio/big/dp-big--portfolio-02.jpg"),
                tag: "Logo Design",
                title: `The service provide for designer`,
              },
              {
                thumb: require("../../assets/images/portfolio/dp-portfolio-04.jpg"),
                src: require("../../assets/images/portfolio/big/dp-big--portfolio-04.jpg"),
                tag: "Logo Design",
                title: `Logo Design creativity`,
              },
            ],
          },
          {
            id: 4,
            content: [
              {
                thumb: require("../../assets/images/portfolio/dp-portfolio-01.jpg"),
                src: require("../../assets/images/portfolio/big/dp-big--portfolio-01.jpg"),
                tag: "Mobile App",
                title: `T-shirt design is the part of design`,
              },
              {
                thumb: require("../../assets/images/portfolio/dp-portfolio-03.jpg"),
                src: require("../../assets/images/portfolio/big/dp-big--portfolio-03.jpg"),
                tag: "Mobile App",
                title: `Mobile App landing Design`,
              },
              {
                thumb: require("../../assets/images/portfolio/dp-portfolio-05.jpg"),
                src: require("../../assets/images/portfolio/big/dp-big--portfolio-05.jpg"),
                tag: "Mobile App",
                title: `Getting tickets to the big show`,
              },
            ],
          },
        ],
      };
    },
  };
</script>
