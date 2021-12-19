<template>
  <div class="home">
    <div
      class="steven-logo image"
      v-bind:style="{ 'background-image': 'url(' + logo + ')' }"
    ></div>

    <div
      class="steven-image image"
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
  height: calc(100vh - 100px);
  display: flex;
  position: absolute;
  top: 65px;

  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.image {
  width: 100vw;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.steven-logo {
  height: 300px;
}

.steven-image {
  height: 300px;
  margin-top: -150px;
}
@media only screen and (max-width: 700px) {
  .steven-logo {
    height: 20vh;
    width: 95vw;
  }

  .steven-image {
    height: 20vh;
    margin-top: -10vh;
  }
}
</style>