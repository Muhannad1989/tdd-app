<template>
  <div class="loading">
    <img src="../assets/loading.gif" alt="loading" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Loading"
});
</script>

<style scoped>
.loading img {
  display: block;
  width: 60px;
  margin: 100px auto;
}
</style>
