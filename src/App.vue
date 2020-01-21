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
// scrolling
window.onscroll = () => {
  const header: any = document.getElementById("header");
  const lineEffect: any = document.getElementById("line-effect");
  if (document.documentElement.scrollTop > 50) {
    lineEffect.style.width = "100%";
    lineEffect.style.transition = "width 0.5s linear";
    header.style.boxShadow = "none";
    header.style.transition = "box-shadow 1s linear";
  } else {
    lineEffect.style.width = "0";
    header.style.boxShadow = "0 -1px 30px #919599";
  }
};
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

body {
  background-image: url("https://cdn.hipwallpaper.com/i/28/25/M1PqGQ.png");
  background-attachment: fixed;
  background-size: cover;
}

.app {
  min-height: 100%;
}

.content {
  width: 90%;
  margin: 0 auto;
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
li.pointer:hover,
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
  margin: 20px auto;
}

li {
  margin: 5px auto;
  border: 1px solid #bdbdbd;
  width: 340px;
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

li.pointer:hover,
.routes li:hover {
  background-color: #3292ff;
}

li.pointer:hover,
.routes li:hover,
.header .toggle-button span:hover {
  cursor: pointer;
}

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

/* List of items in both "home and category pages" */
.container,
.listItems {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}
.listItems {
  padding: 10px;
}
.listItems li {
  width: 24%;
}

/* media query */
@media only screen and (max-width: 900px) {
  .listItems li {
    width: 32%;
  }
}

@media only screen and (max-width: 700px) {
  .listItems li {
    width: 45%;
  }
}

@media only screen and (max-width: 400px) {
  .listItems li {
    width: 90%;
    overflow: hidden;
  }
  .other-items li {
    width: 90%;
  }
}
</style>
