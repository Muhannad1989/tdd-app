<template>
  <div class="user-ticket">
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

export default {
  name: "UserInformation",
  props: ["selectedItem"]
};
</script>
<style scoped>
a {
  color: white;
  text-decoration: none;
}
a:hover {
  color: brown;
}
</style>
