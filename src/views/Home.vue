<template>
  <div class="home">
    <div
      class="steven-logo"
      v-bind:style="{ 'background-image': 'url(' + logo + ')' }"
    ></div>

    <div
      class="steven-image"
      v-bind:style="{ 'background-image': 'url(' + image + ')' }"
    ></div>

  </div>
</template>

<script>
import logo from "../assets/logo.png";
import image from "../assets/all.png";

export default {
  name: "Home",
  data() {
    return {
      logo: logo,
      image: image,
    };
  },
};
</script>

<style scoped>
.home {
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.steven-logo {
  height: 300px;
  width: 800px;
  background-size: cover;
}

.steven-image {
  height: 300px;
  width: 800px;
  margin-top: -150px;
  background-size: cover;
}
@media only screen and (max-width: 700px) {
  .steven-logo {
    height: 20vh;
    width: 95vw;
     background-size: contain;
     background-repeat: no-repeat;
  }

  .steven-image {
    background-size: contain;
    height: 20vh;
    width: 100vw;
     background-repeat: no-repeat;
    margin-top: -10vh;
  }
}
</style>