<template>
  <div class="socialmedia">
    <a
      class="media-icon instagram"
      href="https://www.instagram.com/rebeccasugar/"
      target="_blank"
    ></a>
    <a
      class="media-icon twitter"
      href="https://twitter.com/rebeccasugar?lang=es"
      target="_blank"
    ></a>
    <a
      class="media-icon facebook"
      href="https://www.facebook.com/StevenUniverse/"
      target="_blank"
    ></a>
  </div>
</template>

<script>
export default {
  name: "Socialmedia",
  data() {
    return {};
  },
};
</script>

<style scoped>
.socialmedia {
  display: flex;
  position: fixed;
  bottom: 25px;
  right: 15px;
}
.media-icon {
  height: 40px;
  width: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 10px;
}

.instagram {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg");
}
.twitter {
  background-image: url("https://upload.wikimedia.org/wikipedia/sco/9/9f/Twitter_bird_logo_2012.svg");
}
.facebook {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg");
}

@media only screen and (max-width: 700px) {
  .media-icon {
    height: 30px;
    width: 30px;
     margin: 0 5px;
  }

  .socialmedia {
    flex-direction: column;
     bottom: 40px;
  }
}
</style>