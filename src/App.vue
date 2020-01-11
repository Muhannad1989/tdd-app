<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>
<script>
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  }
};
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
.menu {
  margin: 0;
  padding: 0;
  background: none;
  width: 30px;
  border: none;
  color: wheat;
  color: none;
  font-size: 15px;
  transform: rotate(90deg);
}
.container {
  margin: 10px auto;
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
ul {
  list-style: none;
}
li {
  padding: 10px;
  margin: 5px auto;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  width: 345px;
  text-align: center;
  color: white;
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
h1,
h2 {
  text-align: center;
  color: wheat;
}
.loading {
  display: block;
  width: 60px;
  margin: 25vh auto;
}
.content {
  min-height: 85vh;
  margin-top: 50px;
}
/* home page */
form {
  margin: 20px;
  width: 425px;
  background: rgba(0, 0, 20, 0.4);
  border-radius: 5px;
  padding: 10px;
  color: wheat;
  text-align: center;
}
select {
  color: black;
  width: 148px;
  padding: 3px;
  font-size: 14px;
  font-weight: bold;
  margin: 5px 10px;
  text-align: center;
  border: none;
}

.header ul {
  background-color: rgba(0, 0, 20, 0.2);
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.header li {
  margin: 0;
  padding: 10px;
  width: 100px;
  border-radius: 0;
  border: none;
  color: white;
}
.header li:nth-child(4):hover {
  background: none;
}
.header li:hover {
  color: white;
}

/* Detail page */
.other-users {
  margin: 30px auto;
}
</style>
