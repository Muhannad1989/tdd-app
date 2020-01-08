<template>
  <div class="random">
    <HeaderApp />
    <div class="content">
      <h1>Randomizer</h1>
      <div class="random-button">
        <button v-on:click="random()">Random Item</button>
      </div>
      <UserInformation :selectedItem="user" />
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
      user: []
    };
  },
  components: {
    HeaderApp,
    UserInformation,
    FooterApp
  },
  async created() {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.users = await res.data;
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
      this.user = this.users[random];
    }
  }
};
</script>
<style scoped></style>
