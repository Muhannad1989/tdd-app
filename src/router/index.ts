import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Random from "../views/Random.vue";
import Detail from "../views/Detail.vue";
import Category from "../views/Category.vue";

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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
