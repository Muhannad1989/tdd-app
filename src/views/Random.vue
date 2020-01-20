<template>
  <div class="random">
    <div class="content">
      <h1>Random Item</h1>
      <div class="container">
        <button @click="random()">Random Item</button>
      </div>
      <div v-if="!isLoading">
        <ItemInformation v-if="!isLoading" :selectedItem="item[0]" />
      </div>
      <Loading v-if="isLoading" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import ItemInformation from "../components/ItemInformation.vue";
import Loading from "../components/Loading.vue";
import { RandomData } from "../dataTypes/index";

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
    ItemInformation,
    Loading
  },
  computed: {
    ...mapGetters(["fetchedData"])
  },
  methods: {
    ...mapActions(["fetchData"]),
    random() {
      // generate random number "index"
      const random: number = Math.floor(Math.random() * this.items.length);
      // select a random item
      this.item = [this.items[random]];
    }
  },
  async created() {
    await this.fetchData();
    this.items = await this.fetchedData;
    // stop loading
    this.isLoading = false;
    this.random();
  }
});
</script>
<style></style>
