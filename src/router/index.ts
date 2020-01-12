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

// function getRoutesList(routes: string, pre: string): object[] {
//   return routes.reduce((array: Array<string>, route: object) => {
//     const path: string = `${pre}${route.path}`;

//     if (route.path !== "*") {
//       array.push(path);
//     }

//     if (route.children) {
//       array.push(...getRoutesList(route.children, `${path}/`));
//     }

//     return array;
//   }, []);
// }

// let arr = getRoutesList(router.options.routes, "http://localhost:8080");

export default router;
