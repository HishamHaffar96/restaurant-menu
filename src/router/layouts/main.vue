<script>
import HeroSection from "./../../components/heroSection.vue";
import Footer from "./../../components/footer.vue";
export default {
  components: { HeroSection,Footer },
  computed: {
  }
};
</script>

<template>
  <div>
      <HeroSection />
      <slot />
      <Footer/>
  </div>
</template>