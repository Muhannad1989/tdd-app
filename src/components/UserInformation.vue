<template>
  <div class="user-ticket">
    <h2>{{ selectedItem.name }}</h2>
    <p><span>Id: </span>{{ selectedItem.id }}</p>
    <p><span>Phone: </span> {{ selectedItem.phone }}</p>
    <p><span>Username: </span> {{ selectedItem.username }}</p>
    <p><span>Website: </span> {{ selectedItem.website }}</p>
    <p><span>Email: </span> {{ selectedItem.email }}</p>
    <p><span>City:</span> {{ selectedItem.address.city }}</p>
    <p><span>Street: </span> {{ selectedItem.address.street }}</p>
    <p><span>Zipcode: </span> {{ selectedItem.address.zipcode }}</p>
    <p><span>Company name: </span> {{ selectedItem.company.name }}</p>
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
