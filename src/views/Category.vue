<template>
  <div class="categories">
    <div class="content">
      <h1>Sorting by Categories</h1>
      <div class="container">
        <div v-if="!isLoading">
          <Selector :options="categories" v-on:select-item="sortByCategory" />
          <ul class="listItems">
            <ListItems v-for="item in items" :key="item.id" :item="item" />
          </ul>
        </div>
        <div v-if="isLoading">
          <img class="loading" src="../assets/loading.gif" alt="loading" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Selector from "../components/Selector.vue";
import ListItems from "../components/ListItems.vue";
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
interface CategoryData {
  categories: any[];
  items: Data[];
  fetchedData: Data[];
  isLoading: boolean;
  selected: string;
}

export default Vue.extend({
  name: "Category",
  data(): CategoryData {
    return {
      fetchedData: [],
      items: [],
      categories: [],
      isLoading: true,
      selected: ""
    };
  },
  methods: {
    sortByCategory(value: string): void {
      // take a copy of the original data (reset)
      this.items = [...this.fetchedData];
      // get all categories depend on the selected category name
      this.items = this.items.filter(ele => ele.Category == value);
    }
  },
  components: {
    ListItems,
    Selector
  },
  async created() {
    // fetch Api data
    let res = await axios.get("https://api.publicapis.org/entries");
    // set data to 3 different variable
    this.fetchedData = await res.data.entries;
    this.categories = [...this.fetchedData];
    // get all categories
    this.categories = this.categories.map(ele => ele.Category as string);
    // remove repeted categories
    this.categories = [...new Set(this.categories)];
    // stop loading
    this.isLoading = false;
  }
});
</script>

<style></style>
