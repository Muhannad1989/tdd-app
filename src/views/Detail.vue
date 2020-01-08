<template>
  <div class="detail">
    <div class="content">
      <HeaderApp />
      <div v-if="user.length !== 0">
        <UserInformation :selectedItem="user[0]" />
        <ul class="other-users">
          <li v-for="item in users" v-bind:key="item.id">
            {{ item.name }} {{ item.id }}
          </li>
        </ul>
      </div>
    </div>
    <FooterApp />
  </div>
</template>

<script>
import HeaderApp from "../components/layout/HeaderApp.vue";
import FooterApp from "../components/layout/FooterApp.vue";
import UserInformation from "../components/UserInformation.vue";
import ListItems from "../components/ListItems.vue";
import axios from "axios";

export default {
  name: "Detail",
  data() {
    return {
      user: [],
      users: []
    };
  },
  components: {
    HeaderApp,
    UserInformation,
    FooterApp
    // ListItems
  },
  async created() {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users");
    // selected user
    this.user = await res.data;
    // all user
    this.users = await res.data;
    // set selected user
    this.user = this.user.filter(ele => ele.id == this.$route.params.id);
    // set many random user 3
    this.users = this.users.filter(ele => ele.id != this.$route.params.id);
    // sort users randomlyy
    this.users = this.users.sort(() => Math.random() - 0.5);
    //
    this.users = this.users.splice(0, 3);
  }
};
</script>
<style scoped></style>
