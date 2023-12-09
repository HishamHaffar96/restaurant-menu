<!-- Navbar.vue -->
<template>
  <nav
    :class="{ 'navbar-scrolled': scrolled }"
    class="navbar navbar-expand-lg navbar-light fixed-top"
  >
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="/src/assets/logo.png" alt="logo" width="200px" srcset />
      </a>
      <div class="navbar-text">
        <!-- Use a span to wrap the phone number -->
        <span class="phone-number">+ 963 967 270 663</span>
        <button class="reservations-btn ms-3">Reservations</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 50; // Set a threshold for when the navbar color changes
    }
  }
};
</script>

<style scoped>
.navbar-scrolled {
  background-color: #ffff; /* Set your desired background color when scrolled */
}
.phone-number {
  color: var(--FFFFFF, #fff);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.reservations-btn {
  border: 2px solid var(--FFFFFF, #fff);
  display: inline-flex;
  padding: 11px 34px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--FFFFFF, #fff);
  font-feature-settings: "clig" off, "liga" off;
  /* Heading 5 */
  font-family: Rufina;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 150% */
  background: unset;
}
</style>
