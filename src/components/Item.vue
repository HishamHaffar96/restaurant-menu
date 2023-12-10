
<template>
  <div class="item d-flex">
    <div class="item-image-wrapper">
      <!-- Square Image -->
      <img
        class="item-image"
        :src="item.media!=null&&item.media.length>0?item.media[0].original_url:'/src/assets/item.png'"
        alt="Square Image"
      />
    </div>
    <div>
      <h3 class="item-name">{{item.name}}</h3>
      <h3 class="item-description">{{item.description}}</h3>
      <p class="item-description">price : {{item.price}}</p>
      <p class="item-description">discount :{{item.dicount}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      scrolled: false
    };
  },

  methods: {}
};
</script>

<style scoped>
.item-image-wrapper {
  position: relative;
  width: 20%; /* Set the desired width */
  overflow: hidden;
}

/* Style for the square image */
.item-image {
  width: 100%; /* Ensure the image fills the entire wrapper */
  height: auto; /* Maintain the image's aspect ratio */
  display: block; /* Remove any default inline styles */
  border-radius: 15px;
}
.item-name {
  color: #000000;
  font-feature-settings: "clig" off, "liga" off;
  /* Heading 4 */
  font-family: Rufina;
  font-style: normal;
  font-weight: 700;
  margin-inline-start: 4%;
  margin-inline-end: 4%;
  font-size: 17px;
  line-height: 20px;
  margin-top: 35px;
  border-bottom: dotted 1px #000;
  width: 100%;
}
.item-description {
  color: #4d4d4d;
  font-feature-settings: "clig" off, "liga" off;
  /* Excerpt */
  font-family: Lato;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 30.8px */
  letter-spacing: 0.44px;
  margin-inline-start: 4%;
  margin-inline-end: 4%;
  font-size: 11px;
  line-height: 20px;
}
.item {
  border: solid 1px #4d4d4d;
  border-radius: 15px;
  padding: 10px;
  margin: 30px 0px !important;
}
</style>
