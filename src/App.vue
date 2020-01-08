<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
  /* background-color: #b2d6ff; */
}
a {
  color: red;
}
ul {
  list-style: none;
}
li {
  padding: 10px;
  margin: 5px auto;
  /* border: 1px solid black; */
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

/* random */
.user-ticket {
  background-color: rgba(0, 0, 20, 0.25);
  max-width: 400px;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  margin: 8vh auto;
  color: white;
}

.user-ticket h2 {
  margin: 5px auto;
}
.user-ticket p {
  margin: 15px auto;
}
.random-button {
  display: flex;
  justify-content: center;
}

/* Detail page */
.other-users {
  margin: 30px auto;
}

/* header */
.header ul {
  /* background: #75b6ff; */
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
  margin: 0 5px;
  padding: 10px;
  width: 100px;
  border-radius: 0;
  border: none;
  color: white;
}
.header li:first-child {
  margin-left: 0;
}
.header li:hover {
  color: white;
}

/* Mobile Styles */
@media only screen and (max-width: 400px) {
  body {
    background-color: #f09a9d; /* Red */
  }
  .header ul li {
    border: none;
    width: 100vw;
    border-bottom: 1px solid black;
  }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
  body {
    /* background-color: #f5cf8e;  */
  }
}

/* Desktop Styles */
@media only screen and (min-width: 401px) {
  body {
    /* background-color: #b2d6ff; Blue */
    background-image: url("https://png.pngtree.com/thumb_back/fw800/back_pic/03/60/79/4957a6acaa60ea7.jpg");
    background-attachment: fixed;
    background-size: cover;
  }
}
</style>
