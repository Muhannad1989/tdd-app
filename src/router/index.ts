import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Random from "../views/Random.vue";
import Detail from "../views/Detail.vue";
import Category from "../views/Category.vue";
// import Category2 from "../views/Category2.vue";
import Home2 from "../views/Home2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/random",
    name: "Random",
    component: Random
  },
  {
    path: "/category",
    name: "Category",
    component: Category
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail
  },
  {
    path: "/home2",
    name: "Home2",
    component: Home2
  }
  // {
  //   path: "/category2",
  //   name: "Category2",
  //   component: Category2
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
