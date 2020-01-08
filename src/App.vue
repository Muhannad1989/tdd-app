<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      message: "hello",
      isMessage: false
    };
  },
  computed: {
    get() {
      return "hello";
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  margin: 0 auto;
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
  border: 1px solid black;
  border-radius: 5px;
  width: 345px;
  text-align: center;
}
li:hover {
  cursor: pointer;
  background-color: #3292ff;
  color: white;
}
/* span {
  margin: 5px;
} */
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
}
.content {
  min-height: 85vh;
}
/* home page */
form {
  margin: 20px;
  width: 425px;
  background: #868686;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
}
select {
  color: black;
  width: 148px;
  padding: 3px;
  font-size: 14px;
  font-weight: bold;
  margin: 0 auto;
  text-align: center;
}

/* random */
.user-ticket {
  background-color: #787878;
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
  margin: 0 auto;
}

/* header */
.header ul {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  padding: 0;
}
.header li {
  margin: 0 10px;
  padding: 10px;
  width: 100px;
  border-radius: 0;
  border: none;
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
    background-color: #f5cf8e; /* Yellow */
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  body {
    background-color: #b2d6ff; /* Blue */
  }
}
</style>
