<template>
  <router-link tag="li" :to="{ path: '/detail/' + user.API }">
    {{ user.API }}
  </router-link>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'ListItems',
  props: ['user'],
};
</script>

<style scoped></style>
