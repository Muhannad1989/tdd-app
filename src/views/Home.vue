<template>
  <div class="home">
    <HeaderApp />
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
          <ListItems v-for="user in users" :key="user.id" :user="user" />
        </ul>
        <div v-if="isLoading">
          <img class="loading" src="../assets/loading.gif" alt="loading" />
        </div>
      </div>
    </div>
    <FooterApp />
  </div>
</template>

<script>
import HeaderApp from "../components/layout/HeaderApp.vue";
import FooterApp from "../components/layout/FooterApp.vue";
import ListItems from "../components/ListItems.vue";
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      orginal: [],
      users: [],
      isLoading: true,
      selected: "test"
    };
  },
  components: {
    HeaderApp,
    ListItems,
    FooterApp
  },

  methods: {
    sorting() {
      if (this.selected == "normal") {
        this.users = [...this.orginal];
      } else if (this.selected == "a to z") {
        this.users = [...this.orginal];
        this.users.sort((a, b) => {
          if (a.API > b.API) {
            return 1;
          } else {
            return -1;
          }
        });
      } else if (this.selected == "z to a") {
        this.users = [...this.orginal];
        this.users.sort((a, b) => {
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
    this.users = await res.data.entries;
    this.users = this.users.sort(() => Math.random() - 0.5);
    this.users = this.users.slice(0, 10);
    this.orginal = [...this.users];
    this.isLoading = false;
  }
};
</script>

<style></style>
