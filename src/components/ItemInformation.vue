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

<script>
import Vue from "vue";

export default Vue.extend({
  name: "ItemInformation",
  props: ["selectedItem"]
});
</script>
<style scoped>
a {
  color: white;
  text-decoration: none;
}
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
a:hover {
  color: #ffc107;
}
</style>
