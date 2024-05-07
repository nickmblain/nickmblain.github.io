<template>
  <v-container>
    <v-row align="center">
      <v-col xl="5" lg="5" md="5" cols="12">
        <div class="designer-thumbnail">
          <img
            src="../../assets/images/about/designer-avatar.png"
            alt="Slider Images"
          />
        </div>
      </v-col>
      <v-col xl="7" lg="7" md="7" cols="12" class="mt_md--40 mt_sm--40">
        <div class="inner text-left">
          <span>Welcome to my World</span>
          <h1 class="heading-title">
            Hi, I’m Jone Doe <br />
            <span> UX Designer.</span>
          </h1>
          <div class="thumb position-relative">
            <CoolLightBox :items="items" :index="index" @close="index = null">
            </CoolLightBox>

            <div class="thumbnail position-relative">
              <div v-for="(image, imageIndex) in items" :key="imageIndex">
                <a @click="index = imageIndex" class="video-popup theme-color"
                  ><span class="play-icon"></span
                ></a>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
          },
        ],
        index: null,
      };
    },
  };
</script>
