<template>
  <div class="bottom-image"
    v-bind:style="{ 'background-image': 'url(' + image + ')' }"
  >
  
  firn
  
  </div>
</template>

<script>
import image from "../assets/imagen-footer.png";

export default {
  name: "Contact",
  data() {
    return {
      image: image,
    };
  },
};
</script>

<style scoped>
.bottom-image {
  width: 100vw;
  height: 95vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
}

@media only screen and (max-width: 700px) {
.bottom-image {
  height: 90vh;
}
}
</style>