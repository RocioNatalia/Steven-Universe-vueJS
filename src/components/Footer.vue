<template>
  <footer>
    <div class="link-footer">
      Made with Vue JS
      <div
        class="icon-logo vue"
      ></div>
    </div>
    <a class="link-footer" href="https://github.com/RocioNatalia/Steven-Universe-vueJS" target="_blank">
      Repository
      <div
        class="icon-logo github">
        </div>
    </a>
  </footer>
</template>

<script>


export default {
  name: "Footer",
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

.icon-logo {
    height: 25px;
    width: 40px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.vue{
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg');
}

.github{
    background-image: url('https://github.githubassets.com/images/modules/logos_page/Octocat.png');

}
</style>