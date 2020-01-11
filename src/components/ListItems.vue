<template>
  <router-link tag="li" :to="{ path: '/detail/' + item.API }">
    {{ item.API }}
  </router-link>
</template>

<script>
import Vue from "vue";

export default {
  name: "ListItems",
  props: ["item"]
};
</script>

<style></style>
