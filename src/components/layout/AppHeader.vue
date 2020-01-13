<template>
  <div class="header">
    <ul ref="nav">
      <figure class="toggle-button" @click="toggleNav">
        <span>|||</span>
      </figure>
      <div id="routes" class="routes">
        <router-link tag="li" to="/">Home</router-link>
        <router-link tag="li" to="/random">Random</router-link>
        <router-link tag="li" to="/category">Category</router-link>
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
interface AppHeaderData {
  display: boolean;
}
import Vue from "vue";
export default Vue.extend({
  name: "HeaderApp",
  data(): AppHeaderData {
    return {
      display: true
    };
  },

  methods: {
    toggleNav(): void {
      // select element from html dom
      let selected: any = document.getElementById("routes");
      if (this.display) {
        selected.classList.remove("hidden");
      } else {
        selected.classList.add("hidden");
      }
      // set display to opposite value
      this.display = !this.display;
    }
  }
});
</script>

<style scoped>
.router-link-exact-active {
  background: #5f75ff;
}
.toggle-button {
  padding: 0;
  width: 40px;
  height: 40px;
  text-align: center;
  padding-top: 5px;
  font-size: 25px;
  font-weight: bold;
  border: "none";
  margin: 0;
  transform: rotate(90deg);
  transition: transform 0.3s linear;
}
.toggle-button span:hover {
  cursor: pointer;
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
  font-size: 18px;
}
.routes {
  display: contents;
}
.hidden {
  display: none;
}

/* Mobile Styles */
@media only screen and (max-width: 400px) {
  .header ul {
    background-color: rgba(170, 163, 0, 0.9);
  }
  .header ul li {
    width: 100%;
    max-width: 100%;
    border-bottom: 1px solid black;
  }
  .toggle-button {
    display: block;
  }
  .toggle-button {
    transform: rotate(0deg);
  }
}
</style>
