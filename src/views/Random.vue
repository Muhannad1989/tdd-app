<template>
  <div class="random">
    <HeaderApp />
    <div class="content">
      <h1>Randomizer</h1>
      <div class="random-button">
        <button v-on:click="random()">Random Item</button>
      </div>
      <UserInformation v-if="!isLoading" :selectedItem="item" />
      <div v-if="isLoading">
        <img class="loading" src="../assets/loading.gif" alt="loading" />
      </div>
    </div>
    <FooterApp />
  </div>
</template>

<script>
import HeaderApp from "../components/layout/HeaderApp.vue";
import FooterApp from "../components/layout/FooterApp.vue";
import UserInformation from "../components/UserInformation.vue";
import axios from "axios";

export default {
  name: "Random",
  data() {
    return {
      users: [],
      item: [],
      isLoading: true
    };
  },
  components: {
    HeaderApp,
    UserInformation,
    FooterApp
  },
  async created() {
    let res = await axios.get("https://api.publicapis.org/entries");
    this.users = await res.data.entries;
    // generate a random users list
    this.users = this.users.sort(() => Math.random() - 0.5);
    // set a random user
    this.random();
  },
  methods: {
    random() {
      // generat random number
      let random = [Math.floor(Math.random() * this.users.length)];
      // set random item to state
      this.item = this.users[random];
      this.isLoading = false;
    }
  }
};
</script>
<style scoped></style>
