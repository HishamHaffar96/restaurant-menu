<script>
import HeroSection from "./../../components/heroSection.vue";
import Footer from "./../../components/footer.vue";
import Navbar from "./../../components/navbar.vue";
export default {
  components: { HeroSection,Footer,Navbar },
  computed: {
  }
};
</script>

<template>
  <div>
      <Navbar/>
      <HeroSection />
      <slot />
      <Footer/>
  </div>
</template>