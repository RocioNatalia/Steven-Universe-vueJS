<template>
  <div class="navbar">
    <router-link
      class="logo desktop"
      to="/"
      v-bind:style="{ 'background-image': 'url(' + logo + ')' }"
    ></router-link>

    <nav class="navegation desktop">
      <router-link
        v-bind:style="{ margin: '0 20px' }"
        v-for="item in list"
        :key="item.description"
        :to="item.url"
        >{{ item.description }}</router-link
      >
    </nav>

    <Slide
      v-bind:style="{ 'background-image': 'url(' + logo + ')' }"
      right
      :closeOnNavigation="true"
      :crossIcon="false"
      class="logo navigation mobile"
    >
      <router-link
        v-bind:style="{ margin: '0 20px' }"
        v-for="item in list"
        :key="item.description"
        :to="item.url"
        >{{ item.description }}</router-link
      >
    </Slide>
  </div>
</template>

<script>
import logo from "../assets/logo-sm.png";
import { Slide } from "vue-burger-menu";

export default {
  name: "Navbar",
  components: {
    Slide,
  },
  data() {
    return {
      logo: logo,
      list: [
        { url: "/", description: "Home" },
        { url: "/characters", description: "Personajes" },
        { url: "/contact", description: "Contacto" },
      ],
    };
  },
};
</script>

<style >
.navbar {
  background: #0404048c;
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

.mobile {
  display: none;
}

.navegation a:hover {
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

.navegation a:after {
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

.navegation a:hover:before {
  width: 100%;
  background: #ffd249;
  transition: width 0.5s ease;
}

.navegation a:hover:after {
  width: 100%;
  background: transparent;
  transition: all 0s ease;
}

.logo {
  width: 50px;
  height: 45px;
  margin: 0 30px;
  background-size: contain;
  background-repeat: no-repeat;
}

.bm-menu {
  background-color: #492980db;
}
.bm-burger-button {
  height: 16px;
  top: 26px;
  width: 24px;
  right: 24px !important;
}
.bm-burger-bars {
  background-color: transparent;
}

@media only screen and (max-width: 700px) {

  .navbar {
  
    justify-content: flex-end;
  }

  .desktop {
    display: none;
  }

  .mobile {
    display: initial;
  }

  .logo {
    margin: 0 15px;
  }
}
</style>
