<template>
  <router-link tag="li" :to="{ path }" v-text="item.API"> </router-link>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ListItems",
  props: ["item", "path"]
});
</script>

<style></style>
