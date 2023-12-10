
<template>
  <div class="col-md-3 category-item p-2">
    <div class="category-item-image-wrapper">
      <!-- Square Image -->
      <div class="d-flex">
        <img
          class="category-item-image mx-auto"
          :src="category.media!=null&&category.media.length>0 ?category.media[0].original_url:'/src/assets/category1.png'"
          alt="Square Image"
        />
      </div>
    </div>
    <div>
      <h3 class="category-item-name">{{category.name}}</h3>
      <p class="category-item-description" v-html="category.description"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["category"],
  data() {
    return {
      scrolled: false
    };
  },

  methods: {}
};
</script>

<style scoped>
.category-item {
  cursor: pointer;
}
.category-item-image {
  width: 200px;
  height: 200px;
}
.category-item-name {
  color: #000;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  /* Heading 4 */
  font-family: Rufina;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 133.333% */
  margin-top: 38px;
  margin-bottom: 38px;
}
.category-item-description {
  color: #000;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  /* Heading 4 */
  font-family: Rufina;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px; /* 133.333% */
}
.category-item-description {
  color: #4d4d4d;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  /* Body */
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 33.6px */
  letter-spacing: 0.48px;
}
</style>
