<template>
  <div class="header">
    <div id="toggle" class="toggle-button" @click="toggleNav">
      <span>|||</span>
    </div>
    <ul id="routes">
      <router-link tag="li" to="/">Home</router-link>
      <router-link tag="li" to="/random">Random</router-link>
      <router-link tag="li" to="/category">Category</router-link>
    </ul>
  </div>
</template>

<script lang="ts">
window.addEventListener("resize", event => {
  let toggle: any = document.getElementById("toggle");
  if (window.screen.width < 401) {
    toggle.classList.remove("hidden");
  } else {
    toggle.classList.add("hidden");
  }
});
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
/* active link */
.router-link-exact-active {
  background: #5f75ff;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.header ul {
  background-color: rgba(0, 0, 20, 0.2);
}
.header li {
  margin: 0;
  width: 100px;
  border-radius: 0;
  border: none;
  color: white;
  font-size: 18px;
}
.toggle-button {
  display: none;
}
.hidden {
  display: none;
}

/* All screens style except Mobile  */
@media only screen and (min-width: 401px) {
  .header ul {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
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
    width: 40px;
    display: block;
    height: 40px;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    border: "none";
    transform: rotate(90deg);
  }
  .toggle-button span:hover {
    cursor: pointer;
  }
}
</style>
