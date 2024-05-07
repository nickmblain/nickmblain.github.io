<template>
  <v-col lg="12">
    <div class="tab-default">
      <v-tabs v-model="tab" flat hide-slider>
        <v-tab v-for="item in items" :key="item.id" :ripple="false">
          {{ item.name }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in tabContent" :key="item.id">
          <div class="single-tab-content">
            <div v-if="item.isDesc">
              <p>
                {{ item.desc }}
              </p>
              <p>
                {{ item.desc2 }}
              </p>
            </div>

            <div class="list0style-inner mt--30" v-if="item.isList">
              <h4>Lorem ipsum dolor sit.</h4>
              <ul class="list-style--1">
                <li class="d-flex" v-for="(list, i) in listOne" :key="i">
                  <i v-html="iconSvg(list.icon)"></i>
                  {{ list.desc }}
                </li>
              </ul>
            </div>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-col>
</template>
<script>
  import feather from "feather-icons";
  export default {
    data() {
      return {
        tab: null,
        items: [
          {
            id: 1,
            name: "Our history",
          },
          {
            id: 2,
            name: "Our mission",
          },
          {
            id: 3,
            name: "Our Vission",
          },
          {
            id: 4,
            name: "support",
          },
        ],
        tabContent: [
          {
            id: 1,
            desc: ` `,
            isList: true,
          },
          {
            id: 2,
            desc: `Fatima ipsum dolor sit amet consectetur adipisicing elit. Neque ab aliquid, atque enim, vero nobis quam beatae nesciunt aliquam molestias, optio hic laborum esse. Deserunt architecto officiis laudantium corporis voluptatem.`,
            desc2: `Fatima ipsum dolor sit amet elit.vero nobis quam beatae nesciunt aliquam molestias, optio hic laborum esse. Deserunt architecto officiis`,
            isDesc: true,
          },
          {
            id: 3,
            desc: `John ipsum dolor sit amet consectetur adipisicing elit. Neque ab aliquid, atque enim, vero nobis quam beatae nesciunt aliquam molestias, optio hic laborum esse. Deserunt architecto officiis laudantium corporis voluptatem.`,
            desc2: `Fatima ipsum dolor sit amet elit.vero nobis quam beatae nesciunt aliquam molestias, optio hic laborum esse. Deserunt architecto officiis`,
            isDesc: true,
          },
          {
            id: 4,
            desc: `Fatima ipsum dolor sit amet consectetur adipisicing elit. Neque ab aliquid, atque enim, vero nobis quam beatae nesciunt aliquam molestias, optio hic laborum esse. Deserunt architecto officiis laudantium corporis voluptatem.`,
            desc2: `Jannin ipsum dolor sit amet nesciunt aliquam molestias, optio hic laborum esse. Deserunt architecto officiis laudantium corporis voluptatem.`,
            isDesc: true,
          },
        ],
        listOne: [
          {
            icon: "check",
            desc: `The Philosophy Of business analytics`,
          },
          {
            icon: "check",
            desc: ` Fast-Track Your business`,
          },
          {
            icon: "check",
            desc: `Lies And Damn Lies About business`,
          },
          {
            icon: "check",
            desc: `The Ultimate Deal On business`,
          },
        ],
      };
    },
    methods: {
      iconSvg(icon) {
        return feather.icons[icon].toSvg();
      },
    },
  };
</script>
