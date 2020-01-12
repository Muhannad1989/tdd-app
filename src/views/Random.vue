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

<script lang="ts">
import Vue from "vue";
import ItemInformation from "../components/ItemInformation.vue";
import axios from "axios";

interface Data {
  API?: string;
  Description?: string;
  Auth?: string;
  HTTPS?: boolean;
  Cors?: string;
  Link?: string;
  Category?: string;
}
interface RandomData {
  items: Data[];
  item: Data[];
  isLoading?: boolean;
}

export default Vue.extend({
  name: "Random",
  data(): RandomData {
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
    // fetching Api
    let res = await axios.get("https://api.publicapis.org/entries");
    this.items = await res.data.entries;
    // generate a random items list
    this.items = this.items.sort(() => Math.random() - 0.5);
    // randomize an array
    this.random();
  },
  methods: {
    random() {
      // generat random number
      let random: number = Math.floor(Math.random() * this.items.length);
      // set random item to state
      this.item = [this.items[random]];
      // stop loading
      this.isLoading = false;
    }
  }
});
</script>
<style scoped>
.random-button {
  display: flex;
  justify-content: center;
}
</style>
