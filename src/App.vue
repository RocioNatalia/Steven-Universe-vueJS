<template>
  <div id="app">
    <Navbar />
    <transition name="slide-fade" mode="out-in">
        <router-view />

    </transition>
      <Socialmedia> </Socialmedia>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Socialmedia from "./components/Socialmedia.vue"

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Socialmedia
  },
};
</script>

<style>
#app {
  margin-top: 70px;
}

/** TRANSITIONS **/

.slide-fade-enter{
transform: translateX(10px);
opacity: 0;
}

.slide-fade-enter-active ,
.slide-fade-leave-active{
transition: all 0.2s ease;
}

.slide-fade-leave-to{
transform: translateX(-10px);
opacity: 0;
}

</style>
