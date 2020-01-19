<template>
  <div class="header">
    <div
      app
      class="toggle-button"
      @click="
        {
          hidden = !hidden;
        }
      "
    >
      <span>|||</span>
    </div>
    <ul id="routes" class="routes" :class="{ hidden }">
      <router-link tag="li" to="/">Home</router-link>
      <router-link tag="li" to="/random">Random</router-link>
      <router-link tag="li" to="/category">Category</router-link>
    </ul>
  </div>
</template>

<script lang="ts">
interface AppHeaderData {
  hidden: boolean;
}
import Vue from "vue";
export default Vue.extend({
  name: "HeaderApp",
  data(): AppHeaderData {
    return {
      hidden: false
    };
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
.header li {
  margin: 0;
  width: 100px;
  border-radius: 0;
  border: none;
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
  }
}

/* Mobile Styles */
@media only screen and (max-width: 400px) {
  .header ul li {
    width: 100%;
    max-width: 100%;
    border-bottom: 1px solid #4a4a4a;
  }
  .toggle-button {
    width: 100%;
    display: block;
    height: 40px;
    text-align: left;
    font-size: 30px;
    border: "none";
    background-color: rgba(0, 0, 20, 0.582);
    border-bottom: 1px solid gray;
  }
  .toggle-button span {
    padding: 5px;
  }
}
</style>
