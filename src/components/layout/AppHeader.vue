<template>
  <div class="header">
    <nav>
      <ul ref="nav">
        <figure class="toggle-button" @click="toggleNav">
          <span>|||</span>
        </figure>
        <div id="con" class="con">
          <router-link tag="li" to="/">Home</router-link>
          <router-link tag="li" to="/random">Random</router-link>
          <router-link tag="li" to="/category">Category</router-link>
        </div>
      </ul>
    </nav>
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
      let selected: any = document.getElementById("con");
      if (this.display) {
        selected.classList.remove("hidden");
      } else {
        selected.classList.add("hidden");
      }
      this.display = !this.display;
    }
  }
});
</script>

<style scoped>
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
}
.toggle-button span:hover {
  cursor: pointer;
}
.con {
  display: contents;
}
.hidden {
  display: none;
}

/* Mobile Styles */
@media only screen and (max-width: 400px) {
  .header ul {
    background-color: rgba(0, 0, 20, 1);
  }
  .header ul li {
    border: none;
    width: 100vw;
    border-bottom: 1px solid black;
  }
  .toggle-button {
    display: block;
  }
  .dropdown-content {
    min-width: 100%;
  }
  ul {
    background-color: rgba(0, 0, 20, 0.8);
  }
  .toggle-button {
    transform: rotate(0deg);
  }
}
</style>
