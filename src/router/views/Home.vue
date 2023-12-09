<script>
import Layout from "../layouts/main.vue";
import Item from "./../../components/item.vue";

// Import the main layout component

export default {
  // Define the components used in this component
  components: {
    Layout,
    Item
  },
  // Data properties go here if needed
  data() {
    return {};
  }
};
</script>
<template>
  <Layout>
    <div class="container">
      <!-- Category Path -->
      <div class="category-path">
        <span class="category-item">Home /</span>

        <span class="category-item">Blog /</span>

        <span class="category-item active">Blog List One Column</span>
      </div>
      <div class="item-list">
        <Item />
      </div>
    </div>
  </Layout>
</template>



<style scoped>
/* Style the container */
.container {
  margin-top: 128px;
  margin-bottom: 128px;
}

/* Style the category path items */
.category-item {
  color: var(--light-gray, #b0b0b0);
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.48px;
}

/* Style the active category item */
.category-item.active {
  color: var(--dark-gray, #4d4d4d);
}

/* Add margin to the category path for spacing */
.category-path {
  margin-bottom: 63px;
}
</style>