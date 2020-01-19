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
  margin: 40px auto;
}
.item-information h2 {
  margin: 5px auto;
}
.item-information p {
  margin: 15px auto;
}
.item-information span {
  color: #74b1f7;
  font-size: 16px;
}
.item-information a {
  color: #ffc107;
  word-break: break-all;
}
.item-information a:hover {
  color: #a07800;
}
</style>
