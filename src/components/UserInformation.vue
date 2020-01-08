<template>
  <div class="user-ticket">
    <h2>{{ selectedItem.name }}</h2>
    <p>{{ selectedItem.id }}</p>
    <p>{{ selectedItem.username }}</p>
    <p>{{ selectedItem.email }}</p>
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
/*  */
</style>
