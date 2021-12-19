<template>
  <div id="app">
    <Navbar />
    <transition name="slide-fade" mode="out-in">
        <router-view />

    </transition>
     <div class="social-media">
      <Socialmedia> </Socialmedia>
    </div>
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

.social-media {
  position: absolute;
  bottom: 35px;
  right: 15px;
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

.fade-enter{
opacity: 0;
}

.fade-enter-active ,
.fade-leave-active{
transition: all 0.5s ease;
}

.fade-leave-to{
opacity: 0;
}

</style>
