<template>
  <div class="categories">
    <div class="content">
      <h1>Sorting by Categories</h1>
      <div class="container">
        <div v-if="!isLoading">
          <form>
            Sorting by:
            <select v-model="selected" @change="sortByCategory">
              <option disabled value>Please select one</option>
              <option v-for="category in categories" :key="category">{{
                category
              }}</option>
            </select>
            <span>{{ selected }}</span>
          </form>
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
  orginal: Data[];
  isLoading: boolean;
  selected: string;
}

export default Vue.extend({
  name: "Category",
  data(): CategoryData {
    return {
      categories: [],
      items: [],
      orginal: [],
      isLoading: true,
      selected: "Animals"
    };
  },
  methods: {
    sortByCategory(): void {
      this.items = [...this.orginal];
      this.items = this.items.filter(ele => ele.Category == this.selected);
    }
  },
  components: {
    ListItems
  },
  async created() {
    let res = await axios.get("https://api.publicapis.org/entries");
    this.categories = await res.data.entries;
    this.items = await res.data.entries;
    this.orginal = await res.data.entries;
    this.categories = this.categories.map(ele => ele.Category as string);
    this.categories = [...new Set(this.categories)];
    this.isLoading = false;
  }
});
</script>

<style></style>
