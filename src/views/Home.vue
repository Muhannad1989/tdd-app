<template>
  <div class="home">
    <div class="content">
      <h1>Home page</h1>
      <div class="container">
        <form>
          Sorting by:
          <select v-model="selected" @change="sorting">
            <option disabled value>Please select one</option>
            <option>default</option>
            <option>a to z</option>
            <option>z to a</option>
          </select>
          <span>{{ selected }}</span>
        </form>
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
}

export default Vue.extend({
  name: "Home",
  data(): HomeData {
    return {
      fetchedApiData: [], // orginal data
      items: [], // data could be
      isLoading: true,
      selected: "default"
    };
  },
  components: {
    ListItems
  },

  methods: {
    sorting(): void {
      // case 1
      if (this.selected == "default") {
        // take a copy from the orginal data (reset)
        this.items = [...this.fetchedApiData];
      } else if (this.selected == "a to z") {
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
      } else if (this.selected == "z to a") {
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
