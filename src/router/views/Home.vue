<script>
import Layout from "../layouts/main.vue";
import Item from "./../../components/item.vue";
import CategoryItem from "./../../components/categoryItem.vue";
import api from "../../services/api";

export default {
  components: {
    Layout,
    Item,
    CategoryItem
  },
  data() {
    return {
      responseData: null,
      responseDataDelay: null,
      hierarchicalPath: [],
      lastKey: null,
      loading: true,
      error: false
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData(id = null) {
      // If responseData is not null, store it in responseDataDelay
      if (this.responseData != null) {
        this.responseDataDelay = this.responseData;
        try {
          // Retrieve keys from the last hierarchical path
          var keys = Object.keys(
            this.responseDataDelay.data.categories[0].path.hierarchicalPath
          );

          // Update hierarchicalPath and lastKey
          this.hierarchicalPath = this.responseDataDelay.data.categories[0].path.hierarchicalPath;
          this.lastKey = keys[keys.length - 1];
        } catch (error) {
          console.log(error);
        }
      }

      // Fetch data from the API
      var endpoint = "getItemsAndCategories?category_id=";
      if (id != null) {
        endpoint += id;
      }
      this.loading = true;
      api
        .get(endpoint)
        .then(response => {
          this.loading = false;
          this.error = false;
          this.responseData = response.data;
        })
        .catch(error => {
          this.error = true;
        });
    },
    catgoryClick(categoryId) {
      this.fetchData(categoryId);
    }
  }
};
</script>

<template>
  <Layout>
    <div class="container">
      <!-- Display loading or error messages -->
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Error loading data</div>
      <div v-else>
        <!-- Display the category path -->
        <div class="category-path" v-if="responseDataDelay != null">
          <span
            class="category-item"
            v-for="(pathItem, index) in hierarchicalPath"
            :key="index"
            :class="{ 'active': index == lastKey }"
            @click="catgoryClick(index)"
          >{{ pathItem }} /</span>
        </div>

        <!-- Display the list of categories -->
        <div class="Categories-list d-flex">
          <CategoryItem
            v-for="(category, index) in responseData.data.categories"
            :key="index"
            :category="category"
            @click="catgoryClick(category.id)"
          />
        </div>

        <!-- Display the list of items -->
        <div class="items-list">
          <Item v-for="(item, index) in responseData.data.items" :key="index" :item="item" />
        </div>
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
