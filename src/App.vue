<template>
  <div id="app" class="app">
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
/* global style */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  height: 100%;
}

body {
  background-image: url("https://cdn.hipwallpaper.com/i/28/25/M1PqGQ.png");
  background-attachment: fixed;
  background-size: cover;
}

.app {
  min-height: 100%;
}

.container {
  display: flex;
  justify-content: center;
}

.content {
  margin-top: 100px;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

/* grouping */
.random,
.detail,
.categories,
.home {
  width: 100%;
  min-height: 100vh;
}

h1,
h2 {
  margin: 15px;
}

h1,
h2,
li,
form,
select,
.footer,
.item-information,
.toggle-button {
  text-align: center;
}

li,
button,
form,
.item-information {
  border-radius: 5px;
}

button,
select,
.item-information span,
.toggle-button {
  font-weight: bold;
}

h1,
h2,
li,
li.point:hover,
.routes li:hover,
button:hover,
form,
.item-information,
.item-information a,
.footer a,
.header li {
  color: white;
}

.item-information,
form,
li {
  padding: 10px;
}
.toggle-button,
.header ul,
form {
  background-color: rgba(0, 0, 20, 0.45);
}

form,
.other-items,
.container {
  margin: 20px;
}

li {
  margin: 5px auto;
  border: 1px solid #bdbdbd;
  width: 340px;
  max-width: 340px;
  transition: background-color 0.2s linear;
}

span {
  color: #b2d6ff;
}

button {
  padding: 10px 18px;
  color: #0366d6;
  font-weight: bold;
  margin: 30px auto;
  border: 1px solid white;
  transition: background-color 0.3s linear;
}
button:hover {
  cursor: pointer;
  background-color: #0366d6;
  border: 1px solid #0366d6;
}

li.point:hover,
.routes li:hover {
  background-color: #3292ff;
}

li.point:hover,
.routes li:hover,
.header .toggle-button span:hover {
  cursor: pointer;
}

/* .listItems {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
}
.listItems li {
  width: 300px;
} */

/* scrollbar style  */
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb {
  background: #0003ce;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #00026d;
}

@media only screen and (max-width: 400px) {
  li {
    width: 220px;
  }
}
</style>
