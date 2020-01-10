<template>
  <div class="detail">
    <div class="content">
      <h1>User Details</h1>
      <HeaderApp />
      <div v-if="!isLoading">
        <UserInformation :selectedItem="selectedUser[0]" />
        <ul class="other-users">
          <li v-for="item in items" v-bind:key="item.API">
            {{ item.API }}
          </li>
        </ul>
      </div>
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
  name: "Detail",
  data() {
    return {
      selectedUser: [],
      items: [],
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
    // selected user
    this.selectedUser = await res.data.entries;
    // all user
    this.items = await res.data.entries;
    // set selected user
    this.selectedUser = this.selectedUser.filter(
      ele => ele.API == this.$route.params.id
    );
    // set many 3 random user
    this.items = this.items.filter(ele => ele.API != this.$route.params.id);
    // sort items randomly
    this.items = this.items.sort(() => Math.random() - 0.5);
    //
    this.items = this.items.splice(0, 3);
    this.isLoading = false;
  }
};
</script>
<style scoped></style>
