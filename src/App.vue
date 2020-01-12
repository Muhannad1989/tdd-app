<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";

export default Vue.extend({
  name: "App",
  components: {
    AppHeader,
    AppFooter
  }
});
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-image: url("https://cdn.hipwallpaper.com/i/28/25/M1PqGQ.png");
  background-attachment: fixed;
  background-size: cover;
}
h1,
h2 {
  text-align: center;
  color: wheat;
}
ul {
  list-style: none;
}
li {
  padding: 10px;
  margin: 5px auto;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  width: 340px;
  max-width: 340px;
  text-align: center;
  color: white;
  transition: background-color 0.2s linear;
}
li:hover {
  cursor: pointer;
  background-color: #3292ff;
  color: white;
}
span {
  color: #b2d6ff;
}
button {
  padding: 10px 18px;
  border: none;
  color: #0366d6;
  font-weight: bold;
  margin: 30px auto;
  border-radius: 5px;
  border: 1px solid white;
}
button:hover {
  cursor: pointer;
  background: #0366d6;
  color: white;
  border: 1px solid #0366d6;
}
.container {
  margin: 10px auto;
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.content {
  min-height: 85vh;
  margin-top: 50px;
}

.loading {
  display: block;
  width: 60px;
  margin: 25vh auto;
}
@media only screen and (max-width: 400px) {
  li {
    width: 220px;
  }
}
</style>
