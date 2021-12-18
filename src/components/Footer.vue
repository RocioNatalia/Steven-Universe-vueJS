<template>
  <footer>
    <div class="link-footer">
      Made with Vue JS
      <div
        class="logo-vue"
        v-bind:style="{ 'background-image': 'url(' + logovue + ')' }"
      ></div>
    </div>
    <a class="link-footer" href="https://github.com/RocioNatalia/Steven-Universe-vueJS" target="_blank">
      Repository
      <div
        class="logo-vue"
        v-bind:style="{ 'background-image': 'url(' + logogithub + ')' }"
      ></div>
    </a>
  </footer>
</template>

<script>
import logovue from "../assets/vue-logo.png";
import logogithub from "../assets/github-logo.png";

export default {
  name: "Footer",
  data() {
    return {
      logovue: logovue,
      logogithub: logogithub,
    };
  },
};
</script>

<style scoped>
footer {
  height: 120px;
  width: 100vw;
  background: #10002b;
  color: #ffffff;
  position: absolute;
  bottom: -100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.link-footer {
  display: flex;
  font-size: bold;
  align-items: center;
}
 a {
    text-decoration: none;
    color: #ffffff;
    margin-top: 5px;
}

.link-footer a:hover {
  cursor: pointer;
}

.logo-vue {
height: 25px;
    width: 55px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
</style>