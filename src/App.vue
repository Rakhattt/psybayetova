<template>
  <Header></Header>
  <Main></Main>
  <div id="consultation-section">
      <Consultation />
    </div>
  <div id="services-section">
    <Help />
  </div>
  <div id="about-me-section">
    <AboutMe />
  </div>
  <div id="price-section">
    <Price />
  </div>
  <div id="reviews-section">
     <Carousel />
  </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent,ref,onMounted } from "vue";
import Header from "./components/module/Header.vue";
import Main from "./components/module/Main.vue";
import Consultation from "./components/module/Consultation.vue";
import AboutMe from "./components/module/AboutMe.vue";
import Help from "./components/module/Help.vue";
import Price from "./components/module/Price.vue";
import Carousel from "./components/module/Carousel.vue";
import Footer from "./components/module/Footer.vue";
export default defineComponent({
  name: "App",
  components: {
    Header,
    Main,
    Consultation,
    AboutMe,
    Help,
    Price,
    Carousel,
    Footer,
  },
});
</script>

<style lang="scss"></style>