<template>
  <div class="home">
    <div class="content">
      <h1>Home page</h1>
      <div class="container">
        <form>
          Sorting by:
          <select v-model="selected" @change="sorting">
            <option disabled value>Please select one</option>
            <option>normal</option>
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

<script>
import ListItems from "../components/ListItems.vue";
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      fetchedApiData: [],
      items: [],
      isLoading: true,
      selected: "test"
    };
  },
  components: {
    ListItems
  },

  methods: {
    sorting() {
      if (this.selected == "normal") {
        this.items = [...this.fetchedApiData];
      } else if (this.selected == "a to z") {
        this.items = [...this.fetchedApiData];
        this.items.sort((a, b) => {
          if (a.API > b.API) {
            return 1;
          } else {
            return -1;
          }
        });
      } else if (this.selected == "z to a") {
        this.items = [...this.fetchedApiData];
        this.items.sort((a, b) => {
          if (a.API < b.API) {
            return 1;
          } else {
            return -1;
          }
        });
      }
    }
  },

  async created() {
    let res = await axios.get("https://api.publicapis.org/entries");
    this.items = await res.data.entries;
    this.items = this.items.sort(() => Math.random() - 0.5);
    this.items = this.items.slice(0, 10);
    this.fetchedApiData = [...this.items];
    this.isLoading = false;
  }
};
</script>

<style></style>
