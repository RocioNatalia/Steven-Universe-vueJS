import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import Characters from "@/views/Characters";
import Contact from "@/views/Contact";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/characters",
      name: "Characters",
      component: Characters
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    }
  ]
});
