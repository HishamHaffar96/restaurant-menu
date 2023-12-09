<script >
</script>

<template>
  <div class="footer">
    <div class="container custom-container">
      <div class="row">
        <div class="col-md-3 text-logo">
          Food
          <br />Zero.
        </div>
        <div class="col-md-2">
          <div class="headline">contact</div>
          <div class="secondry-line mt-5">
            +00963 967 270 663
            <br />hishamhaffar225@gmail.com
          </div>
        </div>
        <div class="col-md-6 offset-md-1">
          <div class="headline ms-md-2">Never Miss a Recipe</div>
          <div class="ms-md-2">
            <div class="row m-0 p-0">
              <div class="col-12 m-0 p-0 mt-5 d-flex">
                <div class="div custom-group-input">
                  <input class="custom-input" type="text" placeholder="Email Address" />
                </div>
                <button class="custom-btn">Subscribe</button>
              </div>
            </div>
            <p class="join-text mt-4">Join our subscribers and get best recipe delivered each week!</p>
          </div>
        </div>
      </div>
    </div>
    <div class="reserved-line">
      <div class="container">
        <p class="reserved-line-text">© 2023 BelnMedia Inc. All rights Reserved</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background: url("/src/assets/footer.png");
  background-size: 100% 671px;
  height: 400px;
  width: 100%;
  background: #233000;
}
.custom-container {
  padding-top: 130px;
}
.text-logo {
  color: #fff;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Rufina;
  font-size: 68px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 35px;
}
.headline {
  color: #fff;
  font-feature-settings: "clig" off, "liga" off;
  /* Heading 5 */
  font-family: Rufina;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 150% */
}

.secondry-line {
  color: #fff;
  font-feature-settings: "clig" off, "liga" off;
  /* Widgets Text */
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 138.889% */
  letter-spacing: 0.36px;
}
.custom-input {
  background: unset;
  border: 2px solid #fff;
  padding: 30px 40px;
  height: 96px;
  width: auto;
  /* Body */
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 33.6px */
  letter-spacing: 0.48px;
  color: #fff;
}
.custom-input::placeholder {
  /* Body */
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 33.6px */
  letter-spacing: 0.48px;
  color: #fff;
}
.custom-btn {
  border: unset;
  padding: 20px 46px;
  background: #5e6600;
  margin-inline-start: 28px;

  color: #fff;
  font-feature-settings: "clig" off, "liga" off;
  /* Heading 5 */
  font-family: Rufina;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 150% */
}
.join-text {
  color: #fff;
  font-feature-settings: "clig" off, "liga" off;
  /* Widgets Comments */
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;
}
.reserved-line {
  background: url("/src/assets/footer.png");
  background-size: 100% 172px;
  height: 172px;
}
.reserved-line-text {
  color: #fff;
  font-feature-settings: "clig" off, "liga" off;
  /* Body */
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 33.6px */
  letter-spacing: 0.48px;
  padding-top: 60px;
}
</style>
