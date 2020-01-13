<template>
  <div class="item-information">
    <h2>{{ selectedItem.API }}</h2>
    <p><span>API: </span>{{ selectedItem.API }}</p>
    <p><span>Auth: </span> {{ selectedItem.Auth || "unknown" }}</p>
    <p><span>Category: </span> {{ selectedItem.Category }}</p>
    <p><span>Description: </span> {{ selectedItem.Description }}</p>
    <p><span>HTTPS: </span> {{ selectedItem.HTTPS }}</p>
    <p>
      <span>Link: </span>
      <a :href="selectedItem.Link" target="_blank">{{ selectedItem.Link }}</a>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ItemInformation",
  props: ["selectedItem"]
});
</script>
<style scoped>
.item-information {
  background-color: rgba(0, 0, 20, 0.25);
  max-width: 400px;
  padding: 10px;
  border-radius: 5px;
  margin: 8vh auto;
  color: white;
  text-align: center;
  overflow: hidden;
}
.item-information h2 {
  margin: 5px auto;
}
.item-information p {
  margin: 15px auto;
}
span {
  color: #74b1f7;
  font-size: 16px;
  font-weight: bold;
}
a {
  color: white;
  color: #ffc107;
  text-decoration: none;
  word-break: break-all;
}
a:hover {
  color: #a07800;
}
</style>
