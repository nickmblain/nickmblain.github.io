<template>
  <v-row>
    <v-col cols="12">
      <!-- Start Tab Content  -->
      <div class="rn-testimonial-content">
        <v-row align="center">
          <v-col md="6" sm="12" cols="12" class="tesimonail-conent-inner">
            <v-tabs-items v-model="tab">
              <v-tab-item v-for="item in testimonialContent" :key="item.id">
                <v-card flat v-for="(item, i) in item.content" :key="i">
                  <v-card-text>
                    <div class="inner">
                      <p>
                        {{ item.description }}
                      </p>
                    </div>
                    <div class="author-info">
                      <h6>
                        <span>{{ item.name }}</span> -
                        {{ item.designation }}
                      </h6>
                    </div>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
            <!-- End .v-tabs-items -->
          </v-col>
          <v-col md="6" sm="12" cols="12" class="mt_md--40 mt_sm--40">
            <v-tabs v-model="tab" centered hide-slider center-active>
              <v-tab v-for="item in tabItems" :key="item.id" :ripple="false">
                <div class="thumb">
                  <img :src="item.src" alt="testimonial image" />
                </div>
              </v-tab>
            </v-tabs>
            <!-- End .v-tabs -->
          </v-col>
        </v-row>
      </div>
      <!-- End .rn-testimonial-content -->
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        tab: null,
        testimonialContent: [
          {
            id: 1,
            content: [
              {
                name: "AKLIMA",
                description:
                  "Aklima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
                designation: " COO, AMERIMAR ENTERPRISES, INC.",
              },
            ],
          },
          {
            id: 2,
            content: [
              {
                name: "FATIMA ASRAFY",
                description:
                  "Fatima Asrafy standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
                designation: " COO, AMERIMAR ENTERPRISES, INC.",
              },
            ],
          },
          {
            id: 3,
            content: [
              {
                name: "JANNAT TUMPA",
                description:
                  "Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
                designation: " COO, AMERIMAR ENTERPRISES, INC.",
              },
            ],
          },
          {
            id: 4,
            content: [
              {
                name: "JOHNS DUE ",
                description:
                  "Standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Malorum original since the 1500s.",
                designation: " COO, AMERIMAR ENTERPRISES, INC.",
              },
            ],
          },
          {
            id: 5,
            content: [
              {
                name: "JOHN SMITH",
                description:
                  "John Smith The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
                designation: " COO, AMERIMAR ENTERPRISES, INC.",
              },
            ],
          },
          {
            id: 6,
            content: [
              {
                name: "AMAR ORTHI",
                description:
                  "Chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Malorum original original since the 1500s.",
                designation: " COO, AMERIMAR ENTERPRISES, INC.",
              },
            ],
          },
          {
            id: 7,
            content: [
              {
                name: "FATIMA MA",
                description:
                  "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
                designation: " COO, AMERIMAR ENTERPRISES, INC.",
              },
            ],
          },
          {
            id: 8,
            content: [
              {
                name: "JON CUMMINS",
                description:
                  "Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Malorum reproduced below original since the 1500s.",
                designation: " COO, AMERIMAR ENTERPRISES, INC.",
              },
            ],
          },
        ],

        tabItems: [
          {
            id: 1,
            src: require("../../assets/images/client/testimonial-1.jpg"),
          },
          {
            id: 2,
            src: require("../../assets/images/client/testimonial-2.jpg"),
          },
          {
            id: 3,
            src: require("../../assets/images/client/testimonial-3.jpg"),
          },
          {
            id: 4,
            src: require("../../assets/images/client/testimonial-4.jpg"),
          },
          {
            id: 5,
            src: require("../../assets/images/client/testimonial-5.jpg"),
          },
          {
            id: 6,
            src: require("../../assets/images/client/testimonial-9.jpg"),
          },
          {
            id: 7,
            src: require("../../assets/images/client/testimonial-7.jpg"),
          },
          {
            id: 8,
            src: require("../../assets/images/client/testimonial-8.jpg"),
          },
        ],
      };
    },
  };
</script>
