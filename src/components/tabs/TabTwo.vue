<template>
  <v-col lg="12">
    <div class="tab-default">
      <v-tabs v-model="tab" flat hide-slider>
        <v-tab v-for="item in items" :key="item.id" :ripple="false">
          {{ item.name }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          transition="fade-transition"
          v-for="item in tabContent"
          :key="item.id"
        >
          <v-card flat>
            <v-card-text>
              <div class="single-tab-content">
                <ul>
                  <li v-for="(item, i) in item.content" :key="i">
                    <router-link to="/service"
                      >{{ item.title }}
                      <span> - {{ item.name }}</span></router-link
                    >
                    {{ item.desc }}
                  </li>
                </ul>
                <div class="progress-wrapper" v-if="item.isSkill">
                  <div class="rn-progress-charts">
                    <h6 class="heading heading-h6">Designing</h6>
                    <div class="progress fadeInLeft">
                      <div class="progress-bar" style="width: 95%;">
                        <span class="percent-label">95%</span>
                      </div>
                    </div>
                  </div>
                  <div class="rn-progress-charts mt--25">
                    <h6 class="heading heading-h6">Managment</h6>
                    <div class="progress">
                      <div class="progress-bar" style="width: 85%;">
                        <span class="percent-label">85%</span>
                      </div>
                    </div>
                  </div>
                  <div class="rn-progress-charts mt--25">
                    <h6 class="heading heading-h6">Marketing</h6>
                    <div class="progress">
                      <div class="progress-bar" style="width: 75%;">
                        <span class="percent-label">75%</span>
                      </div>
                    </div>
                  </div>
                  <div class="rn-progress-charts mt--25">
                    <h6 class="heading heading-h6">Development</h6>
                    <div class="progress">
                      <div class="progress-bar" style="width: 90%;">
                        <span class="percent-label">90%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-col>
</template>
<script>
  export default {
    data() {
      return {
        tab: null,
        items: [
          {
            id: 1,
            name: "Main skills",
          },
          {
            id: 2,
            name: "Award",
          },
          {
            id: 3,
            name: "Experience",
          },
          {
            id: 4,
            name: "Education",
          },
        ],

        tabContent: [
          {
            id: 1,
            isSkill: true,
          },
          {
            id: 2,
            content: [
              {
                title: "Awwwards.com",
                name: "Winner",
                desc: " 2019 - 2020",
              },
              {
                title: "CSS Design Awards",
                name: "Winner",
                desc: "2017 - 2018",
              },
              {
                title: "Design nominees",
                name: "site of the day",
                desc: "2013 - 2014",
              },
              {
                title: "Awwwards.com",
                name: "Winner",
                desc: " 2015 - 2016",
              },
            ],
          },
          {
            id: 3,
            content: [
              {
                title: "Sr. Front-end Engineer",
                name: "Google",
                desc: "2018 - Current",
              },
              {
                title: "Front-end Engineer",
                name: "Microsoft",
                desc: "2017 - 2018",
              },
              {
                title: "Software Engineer",
                name: "Alibaba",
                desc: "2013- 2014",
              },
              {
                title: "Lead Software Engineer",
                name: "Amazon",
                desc: "2019- 2020",
              },
            ],
          },
          {
            id: 4,
            content: [
              {
                title: "MSc In CSE",
                name: "Institute, Los Angeles, CA",
                desc: "2010",
              },
              {
                title: "BSc In CSE",
                name: "ABC Institute, Los Angeles, CA",
                desc: "2009",
              },
              {
                title: "Diploma in Computer Science",
                name: "Gamma Technical Institute",
                desc: "2009",
              },
              {
                title: "Graphic Designer",
                name: "ABC Institute, Los Angeles, CA",
                desc: "2007",
              },
            ],
          },
        ],
      };
    },
  };
</script>
