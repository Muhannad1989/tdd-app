<template>
  <form>
    <p>Sorting by:</p>
    <select v-model="selected" v-on:change="$emit('select-item', selected)">
      <option disabled value>Please select one</option>
      <option v-for="(option, index) in options" :key="index">{{
        option
      }}</option>
    </select>
    <span>{{ selected }}</span>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
interface SelectorData {
  selected: string;
}

export default Vue.extend({
  name: "Selector",
  data(): SelectorData {
    return {
      selected: ""
    };
  },
  props: ["options"]
});
</script>

<style scoped>
form {
  margin: 20px;
  min-width: 425px;
  background: rgba(0, 0, 20, 0.4);
  border-radius: 5px;
  padding: 10px;
  color: wheat;
  text-align: center;
}
form p {
  display: inline-block;
}
form p,
form span {
  display: inline-block;
}
select {
  color: black;
  width: 150px;
  padding: 3px;
  font-size: 14px;
  font-weight: bold;
  margin: 5px 10px;
  text-align: center;
  border: none;
}

@media only screen and (max-width: 400px) {
  form p,
  form span {
    display: block;
  }
  form {
    min-width: auto;
  }
}
</style>
