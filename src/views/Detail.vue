<template>
  <div class="detail">
    <div class="content">
      <h1>User Details</h1>
      <div class="container">
        <div v-if="!isLoading">
          <h2>Item Information</h2>
          <ItemInformation :selectedItem="selectedItem[0]" />
          <h2>Other Roandom Items</h2>
          <ul class="other-items">
            <ListItems
              v-for="item in items"
              v-bind:key="item.API"
              :item="item"
            />
          </ul>
        </div>
        <Loading v-if="isLoading" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ItemInformation from "../components/ItemInformation.vue";
import ListItems from "../components/ListItems.vue";
import Loading from "../components/Loading.vue";
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
    ItemInformation,
    ListItems,
    Loading
  },
  async created() {
    // fetch API
    let res = await axios.get("https://api.publicapis.org/entries");
    // selected user
    this.items = await res.data.entries;
    this.selectedItem = [...this.items];
    // select item by params
    this.selectedItem = this.selectedItem.filter(
      ele => ele.API == this.$route.params.id
    );
    // remove the selected item from the list
    this.items = this.items.filter(ele => ele.API != this.$route.params.id);
    // sort items randomly
    this.items = this.items.sort(() => Math.random() - 0.5);
    // take the item
    this.items = this.items.splice(0, 3);
    // turn off the loading
    this.isLoading = false;
  }
});
</script>
<style></style>
