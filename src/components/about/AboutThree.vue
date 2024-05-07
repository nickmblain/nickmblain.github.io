<template>
  <v-row class="row--20 align-center">
    <v-col md="6" sm="12" cols="12">
      <div class="thumbnail">
        <img
          class="w-100"
          src="../../assets/images/about/about-3.jpg"
          alt="About Images"
        />
      </div>
    </v-col>
    <v-col md="6" sm="12" cols="12">
      <div class="about-inner inner">
        <div class="section-title">
          <span class="subtitle">Read About Us</span>
          <h2 class="heading-title">Read Company Values</h2>
          <p class="description">
            There are many variations of passages of Lorem Ipsum available,
            <br />
            but the majority have suffered alteration.
          </p>
        </div>
        <v-row>
          <v-col md="6" sm="6" cols="12">
            <div class="about-us-list">
              <h5 class="title">Honest</h5>
              <p>Lorem ipsum dolor sit amet, onecis et mollis.</p>
            </div>
          </v-col>
          <v-col md="6" sm="6" cols="12">
            <div class="about-us-list">
              <h5 class="title">Strategy</h5>
              <p>Lorem ipsum dolor sit amet, onecis et mollis.</p>
            </div>
          </v-col>
          <v-col md="6" sm="6" cols="12">
            <div class="about-us-list">
              <h5 class="title">Development</h5>
              <p>Lorem ipsum dolor sit amet, onecis et mollis.</p>
            </div>
          </v-col>
          <v-col md="6" sm="6" cols="12">
            <div class="about-us-list">
              <h5 class="title">Quality</h5>
              <p>Lorem ipsum dolor sit amet, onecis et mollis.</p>
            </div>
          </v-col>
        </v-row>
        <div class="purchase-btn mt--50">
          <router-link class="btn-transparent" to="/about"
            >WHY WE'RE DIFFERNT VALUES</router-link
          >
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped></style>
