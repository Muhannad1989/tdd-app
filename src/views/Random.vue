<template>
  <div class="random">
    <div class="content">
      <h1>Randomizer</h1>
      <div class="random-button">
        <button v-on:click="random()">Random Item</button>
      </div>
      <ItemInformation v-if="!isLoading" :selectedItem="item" />
      <div v-if="isLoading">
        <img class="loading" src="../assets/loading.gif" alt="loading" />
      </div>
    </div>
  </div>
</template>

<script>
import ItemInformation from "../components/ItemInformation.vue";
import axios from "axios";

export default {
  name: "Random",
  data() {
    return {
      items: [],
      item: [],
      isLoading: true
    };
  },
  components: {
    ItemInformation
  },
  async created() {
    let res = await axios.get("https://api.publicapis.org/entries");
    this.items = await res.data.entries;
    // generate a random items list
    this.items = this.items.sort(() => Math.random() - 0.5);
    // set a random user
    this.random();
  },
  methods: {
    random() {
      // generat random number
      let random = [Math.floor(Math.random() * this.items.length)];
      // set random item to state
      this.item = this.items[random];
      this.isLoading = false;
    }
  }
};
</script>
<style scoped>
.random-button {
  display: flex;
  justify-content: center;
}
</style>
