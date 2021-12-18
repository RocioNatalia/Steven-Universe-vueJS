<template>
  <div class="navbar">
    <div
      class="logo"
      v-bind:style="{ 'background-image': 'url(' + logo + ')' }"
    ></div>
    <nav class="navegation">
      <a
        v-for="item in list"
        :key="item.description"
        v-bind:style="{ margin: '0 10px' }"
       href="item.url"
        >{{ item.description }}</a
      >
    </nav>
  </div>
</template>

<script>
import logo from "../assets/logo.png";
export default {
  name: "Navbar",
  data() {
    return {
      logo: logo,
      list: [
        { url: "./", description: "Home" },
        { url: "./", description: "Historia" },
        { url: "./", description: "Personajes" },
        { url: "./", description: "Contacto" },
      ],
    };
  },
};
</script>

<style scoped>
.navbar {
  background: #10002b;
  color: #ffffff;
  height: 65px;
  width: 100vw;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
}

.navegation {
  display: flex;
  padding: 0 40px;
}

a {
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  position: relative;
  padding-bottom: 2px;
}

a:hover {
  color: #ffd249;
}

.navegation a:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  transition: width 0s ease, background 0.5s ease;
}

a:after {
  content: "";
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  background: #ffd249;
  transition: width 0.5s ease;
}

a:hover:before {
  width: 100%;
  background: #ffd249;
  transition: width 0.5s ease;
}

a:hover:after {
  width: 100%;
  background: transparent;
  transition: all 0s ease;
}

.logo {
  width: 132px;
  height: 50px;
  margin: 0 30px;
  background-size: cover;
}
</style>
