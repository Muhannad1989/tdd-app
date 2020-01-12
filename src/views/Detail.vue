<template>
  <div class="detail">
    <div class="content">
      <h1>User Details</h1>
      <div v-if="!isLoading">
        <ItemInformation :selectedItem="selectedItem[0]" />
        <ul class="other-users">
          <li v-for="item in items" v-bind:key="item.API">{{ item.API }}</li>
        </ul>
      </div>
      <div v-if="isLoading">
        <img class="loading" src="../assets/loading.gif" alt="loading" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ItemInformation from "../components/ItemInformation.vue";
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

interface DetailData {
  selectedItem: Data[];
  items: Data[];
  isLoading: boolean;
}
export default Vue.extend({
  name: "Detail",
  data(): DetailData {
    return {
      selectedItem: [],
      items: [],
      isLoading: true
    };
  },
  components: {
    ItemInformation
  },
  async created() {
    // fetch API
    let res = await axios.get("https://api.publicapis.org/entries");
    // selected user
    this.selectedItem = await res.data.entries;
    // all user
    this.items = await res.data.entries;
    // set selected user
    this.selectedItem = this.selectedItem.filter(
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
});
</script>
<style></style>
