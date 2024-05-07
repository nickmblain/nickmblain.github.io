<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" :src="logo" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Breadcrump Area  -->
    <div
      class="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1"
      data-black-overlay="6"
    >
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
              <h2 class="heading-title">Column</h2>
              <ul class="page-list">
                <li v-for="(item, i) in breadcrumbs" :key="i">
                  <router-link :to="item.to" :disabled="item.disabled">{{
                    item.text
                  }}</router-link>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <!-- Start Column Area  -->
    <div class="rn-columns-area ptb--120 bg_color--5">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="single-column">
              <h4 class="tilte">One Full</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum. You need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend toitrrepeat.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Column Area  -->
    <!-- Start Column Area  -->
    <div class="rn-columns-area ptb--120 bg_color--1">
      <v-container>
        <v-row>
          <v-col
            md="6"
            sm="6"
            cols="12"
            v-for="(column, i) in oneHalfContent"
            :key="i"
            :class="column.class"
          >
            <div class="single-column">
              <h4 class="tilte">One Half</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum. You need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend toitrrepeat.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Column Area  -->
    <!-- Start Column Area  -->
    <div class="rn-columns-area ptb--120 bg_color--5">
      <v-container>
        <v-row>
          <v-col
            lg="4"
            md="4"
            sm="6"
            cols="12"
            v-for="(column, i) in oneThirdContet2"
            :key="i"
            :class="column.class"
          >
            <div class="single-column">
              <h4 class="tilte">One Third</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum. You need to be sure there isn't anything embarrassing.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Column Area  -->

    <!-- Start Column Area  -->
    <div class="rn-columns-area ptb--120 bg_color--1">
      <v-container>
        <v-row>
          <v-col
            lg="4"
            md="4"
            sm="6"
            cols="12"
            v-for="(column, i) in oneThirdContet"
            :key="i"
            :class="column.class"
          >
            <div class="single-column custom-color" :class="column.color">
              <h4 class="tilte">{{ column.title }}</h4>
              <p>
                {{ column.desc }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Column Area  -->

    <Footer />
  </div>
</template>

<script>
  import Header from "../components/header/Header";
  import Footer from "../components/footer/Footer";
  export default {
    components: {
      Header,
      Footer,
    },
    data() {
      return {
        logo: require("../assets/images/logo/logo.png"),
        breadcrumbs: [
          {
            text: "Home",
            to: "/",
            disabled: false,
          },
          {
            text: "Column",
            to: "",
            disabled: true,
          },
        ],
        oneHalfContent: [
          {
            class: "",
            title: "One Half",
            desc: `There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum. You need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend toitrrepeat.`,
          },
          {
            title: "One Half",
            class: "mt_sm--30",
            desc: `There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum. You need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend toitrrepeat.`,
          },
        ],
        oneThirdContet2: [
          {
            class: "",
            title: "One Third",
            desc: `There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum. You need to be sure there isn't anything embarrassing.`,
          },
          {
            title: "One Third",
            class: "mt_sm--30",
            desc: `There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum. You need to be sure there isn't anything embarrassing.`,
          },
          {
            title: "One Third",
            class: "mt_sm--30 mt_md--30",
            desc: `There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum. You need to be sure there isn't anything embarrassing.`,
          },
        ],
        oneThirdContet: [
          {
            class: "",
            color: "",
            title: "One Third",
            desc: `There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum. You need to be sure there isn't anything embarrassing.`,
          },
          {
            class: "mt_sm--30",
            color: "custom-color--1",
            title: "One Third",
            desc: `There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum. You need to be sure there isn't anything embarrassing.`,
          },
          {
            class: "mt_sm--30 mt_md--30",
            color: "custom-color--2",
            title: "One Third",
            desc: `There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum. You need to be sure there isn't anything embarrassing.`,
          },
        ],
      };
    },
  };
</script>
