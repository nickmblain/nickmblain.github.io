<template>
  <v-row class="row--35" align="center">
    <v-col lg="6" md="6" cols="12" class="order-2 order-lg-1">
      <div class="about-inner inner">
        <div class="section-title">
          <span class="subtitle">Our about</span>
          <h2 class="heading-title">About</h2>
          <p class="description">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </p>
        </div>
        <div class="mt--30">
          <h4>Lorem ipsum dolor sit.</h4>
          <ul class="list-style--1">
            <li v-for="list in listOne" :key="list.id">
              <i v-html="iconSvg(list.icon)"></i>
              {{ list.desc }}
            </li>
          </ul>
        </div>
        <div class="mt--30">
          <h4>Lorem ipsum dolor sit.</h4>
          <ul class="list-style--1">
            <li v-for="list in listTwo" :key="list.id">
              <i v-html="iconSvg(list.icon)"></i>
              {{ list.desc }}
            </li>
          </ul>
        </div>
      </div>
    </v-col>
    <v-col lg="6" md="6" cols="12" class="order-1 order-lg-2">
      <div class="thumb position-relative">
        <CoolLightBox :items="items" :index="index" @close="index = null">
        </CoolLightBox>

        <div class="thumbnail position-relative">
          <div v-for="(image, imageIndex) in items" :key="imageIndex">
            <img class="w-100" :src="image.thumb" alt="About Images" />
            <a
              @click="index = imageIndex"
              class="video-popup position-top-center theme-color"
              ><span class="play-icon"></span
            ></a>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>
<script>
  import feather from "feather-icons";
  import Accordion from "../../components/accordion/Accordion";
  export default {
    components: {
      Accordion,
    },
    data() {
      return {
        items: [
          {
            thumb: require("../../assets/images/about/about-3.png"),
            src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
          },
        ],
        index: null,
        listOne: [
          {
            id: 1,
            icon: "check",
            desc: `The Philosophy Of business analytics`,
          },
          {
            id: 2,
            icon: "check",
            desc: `Fast-Track Your business`,
          },
          {
            id: 3,
            icon: "check",
            desc: `Lies And Damn Lies About business`,
          },
          {
            id: 4,
            icon: "check",
            desc: `The Ultimate Deal On business`,
          },
        ],
        listTwo: [
          {
            id: 1,
            icon: "check",
            desc: `Proof That business Really Works`,
          },
          {
            id: 2,
            icon: "check",
            desc: `Here Is What You Should Do For Your business`,
          },
          {
            id: 3,
            icon: "check",
            desc: `The Hidden Mystery Behind business`,
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
