<template>
  <div class="footer">
    <a v-for="(ele, index) in routes" :key="index" :href="links[index]">
      {{ ele.name }}
    </a>
    <div class="copy-right">
      <p>Copyright © 2020 Muhannad Judah. All Rights Reserved</p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { DataFooter } from "../../dataTypes/index";

export default Vue.extend({
  name: "FooterApp",
  data(): DataFooter {
    return {
      links: [],
      routes: (this as any).$router.options.routes.slice(0, 3)
    };
  },
  created() {
    this.links = this.getRoutesList(
      (this as any).$router.options.routes,
      "http://localhost:8080"
    );
  },
  methods: {
    getRoutesList(routes: { path: string }[], pre: string) {
      return routes.reduce(
        (array: string[], route: { path: string; children?: any }) => {
          const path: string = `${pre}${route.path}`;
          if (route.path !== "*") {
            array.push(path);
          }
          if (route.children) {
            array.push(...this.getRoutesList(route.children, `${path}/`));
          }
          return array;
        },
        []
      );
    }
  }
});
</script>
<style scoped>
.footer {
  background: #131313;
  width: 100%;
}
.footer a {
  padding: 10px 5px;
  display: inline-block;
  margin: 10px;
  min-width: 88px;
  font-size: 18px;
  transition: color 0.3s linear;
}
.footer a:hover {
  color: #00a9ff;
}
.footer .copy-right {
  background-color: #3c3c3c;
}
.footer .copy-right p {
  padding: 5px;
  font-size: 13px;
  color: #ababab;
}
@media only screen and (max-width: 400px) {
  .footer a {
    display: block;
    margin: 0 auto;
    border-bottom: 1px solid #5a5a5a;
    width: 100%;
  }
}
</style>
