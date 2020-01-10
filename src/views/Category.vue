<template>
  <div class="categories">
    <HeaderApp />
    <div class="content">
      <h1>Categories</h1>
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
  name: "Category",
  data() {
    return {
      users: [],
      isLoading: true,
      params: "Animals"
    };
  },
  components: {
    HeaderApp,
    ListItems,
    FooterApp
  },
  async created() {
    let res = await axios.get("https://api.publicapis.org/entries");
    this.users = await res.data.entries;
    // this.users = this.users.sort(() => Math.random() - 0.5);
    // this.users = this.users.slice(0, 10);
    this.users = this.users.filter(
      item => item.Category == this.$route.params.name
    );
    this.params = this.$route.params.name;
    this.isLoading = false;
  }
};
</script>

<style></style>
