<template>
  <v-row>
    <v-col
      lg="4"
      md="4"
      sm="6"
      cols="12"
      class="mt--30"
      v-for="pricing in pricingContent"
      :key="pricing.id"
    >
      <div class="rn-pricing" :class="{ active: pricing.active }">
        <div class="pricing-table-inner">
          <div class="pricing-header">
            <h4 class="heading-title">{{ pricing.title }}</h4>
            <div class="pricing">
              <span class="price">{{ pricing.price }}</span>
              <span class="subtitle">{{ pricing.subtitle }}</span>
            </div>
          </div>

          <div class="pricing-body">
            <ul class="list-style--1">
              <li v-for="(singleList, i) in pricing.listItem" :key="i">
                <i v-html="iconSvg(icon)"></i>{{ singleList.list }}
              </li>
            </ul>
          </div>

          <div class="pricing-footer">
            <a class="rn-btn" href="#pricing">Purchase Now</a>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  import feather from "feather-icons";
  export default {
    data() {
      return {
        icon: "check",
        pricingContent: [
          {
            id: 1,
            title: "Free",
            price: 29,
            subtitle: "USD Per Month",
            active: false,
            listItem: [
              {
                list: "5 PPC Campaigns",
              },
              {
                list: "Digital Marketing",
              },
              {
                list: "Marketing Agency",
              },
              {
                list: "Seo Friendly",
              },
              {
                list: "UI/UX designs",
              },
            ],
          },
          {
            id: 2,
            title: "Business",
            price: 30,
            subtitle: "USD Per Month",
            active: true,
            listItem: [
              {
                list: "5 PPC Campaigns",
              },
              {
                list: "Digital Marketing",
              },
              {
                list: "Marketing Agency",
              },
              {
                list: "Seo Friendly",
              },
              {
                list: "UI/UX designs",
              },
            ],
          },
          {
            id: 3,
            title: "Advanced",
            price: 29,
            subtitle: "USD Per Month",
            active: false,
            listItem: [
              {
                list: "5 PPC Campaigns",
              },
              {
                list: "Digital Marketing",
              },
              {
                list: "Marketing Agency",
              },
              {
                list: "Seo Friendly",
              },
              {
                list: "UI/UX designs",
              },
            ],
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
