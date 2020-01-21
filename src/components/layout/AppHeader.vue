<template>
  <div class="header" id="header">
    <div class="line-effect" id="line-effect"></div>
    <div
      app
      class="toggle-button"
      @click="
        {
          hidden = !hidden;
        }
      "
    >
      <span v-if="!hidden" style="color:red"><i class="fa fa-times"></i></span>
      <span v-if="hidden"><i class="fa fa-list-ul"></i></span>
    </div>
    <ul class="routes" :class="{ hidden }">
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
  box-shadow: 0 -1px 30px #919599;
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

/* effect */
.line-effect {
  position: absolute;
  width: 0;
  height: 5%;
  top: 40px;
  left: 0;
  border-top: 2px solid green;
}

/* All screens style except Mobile  */
@media only screen and (min-width: 401px) {
  .header ul {
    display: flex;
  }
}

/* Mobile Styles */
@media only screen and (max-width: 400px) {
  .routes {
    overflow: hidden;
    height: 100%;
    height: 126px;
    transition: height 0.3s linear;
  }

  .hidden {
    height: 0;
    /* display: none; */
  }

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
    padding-top: 3px;
    /* border: "none"; */
    background-color: rgba(0, 0, 20, 0.582);
    border-bottom: 1px solid gray;
  }
  .toggle-button span {
    padding: 5px;
  }
  .line-effect {
    display: none;
  }
}
</style>
