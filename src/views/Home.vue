<template>
  <div class="home">
    <div class="content">
      <h1>Home page</h1>
      <div class="container">
        <Selector :options="options" v-on:select-item="sorting" />
      </div>
      <div class="container">
        <ul v-if="!isLoading" class="listItems">
          <ListItems v-for="item in items" :key="item.id" :item="item" />
        </ul>
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
import Selector from "../components/Selector.vue";
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

interface HomeData {
  fetchedApiData: Data[];
  items: Data[];
  isLoading: boolean;
  selected: string;
  options: string[];
}

export default Vue.extend({
  name: "Home",
  data(): HomeData {
    return {
      fetchedApiData: [],
      items: [],
      isLoading: true,
      selected: "",
      options: ["default", "a to z", "z to a"]
    };
  },
  components: {
    ListItems,
    Selector
  },

  methods: {
    sorting(value: string): void {
      if (value == "default") {
        // take a copy from the orginal data (reset)
        this.items = [...this.fetchedApiData];
      } else if (value == "a to z") {
        // take a copy from the orginal data (reset)
        this.items = [...this.fetchedApiData];
        // sorting data alphabetically from A to Z
        this.items.sort((a, b) => {
          if ((a.API as string) > (b.API as string)) {
            return 1;
          } else {
            return -1;
          }
        });
      } else if (value == "z to a") {
        // take a copy from the orginal data (reset)
        this.items = [...this.fetchedApiData];
        // sorting data alphabetically from Z to A
        this.items.sort((a, b) => {
          if ((a.API as string) < (b.API as string)) {
            return 1;
          } else {
            return -1;
          }
        });
      }
    }
  },

  async created() {
    // fetching data from api
    let res = await axios.get("https://api.publicapis.org/entries");
    this.items = await res.data.entries;
    // generate random array
    this.items = this.items.sort(() => Math.random() - 0.5);
    // take 10 items from generated array
    this.items = this.items.slice(0, 10);
    // clean reapeted items
    this.fetchedApiData = [...this.items];
    // stop loading
    this.isLoading = false;
  }
});
</script>

<style></style>
