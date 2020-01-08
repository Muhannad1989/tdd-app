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
        </form>
      </div>
      <div class="container">
        <ul class="listItems">
          <ListItems v-for="user in users" :key="user.id" :user="user" />
        </ul>
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
      loading: false,
      selected: "normal"
    };
  },
  components: {
    HeaderApp,
    ListItems,
    FooterApp
  },
  // computed: {
  //   computedData() {
  //     // eslint-disable-next-line no-console
  //     console.log("run computed");
  //     return this.users;
  //   }
  // },
  // watch: {
  //   users: function() {
  //     this.users;
  //   }
  // },
  methods: {
    sorting() {
      if (this.selected == "normal") {
        this.users = this.orginal;
      } else if (this.selected == "a to z") {
        this.users = this.orginal;
        this.users.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          } else {
            return -1;
          }
        });
      } else if (this.selected == "z to a") {
        this.users = this.orginal;
        this.users.sort((a, b) => {
          if (a.name < b.name) {
            return 1;
          } else {
            return -1;
          }
        });
      }
    }
  },
  async created() {
    // https://api.publicapis.org/entries?category=books
    let res = await axios.get("https://jsonplaceholder.typicode.com/users");
    let selectedArray = res.data.slice(0, 10);
    this.orginal = selectedArray;
    this.users = selectedArray;
  }
};
</script>

<style></style>
