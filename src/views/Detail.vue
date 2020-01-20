<template>
  <div class="detail">
    <div class="content">
      <h1>User Details</h1>
      <div v-if="!isLoading">
        <h2>Item Information</h2>
        <ItemInformation :selectedItem="selectedItem[0]" />
        <h2>Other Roandom Items</h2>
        <ul class="other-items">
          <ListItems v-for="item in items" v-bind:key="item.API" :item="item" />
        </ul>
      </div>
      <Loading v-if="isLoading" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import ItemInformation from "../components/ItemInformation.vue";
import ListItems from "../components/ListItems.vue";
import Loading from "../components/Loading.vue";
import { DetailData } from "../dataTypes/index";

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
  computed: {
    ...mapGetters(["fetchedData"])
  },
  methods: {
    ...mapActions(["fetchData"])
  },
  async created() {
    await this.fetchData();
    this.items = await this.fetchedData;
    this.selectedItem = [...this.items];
    // select item by params
    this.selectedItem = this.selectedItem.filter(
      ele => ele.API == this.$route.params.id
    );
    // remove the selected item from the list
    this.items = this.items.filter(ele => ele.API != this.$route.params.id);

    // sorting data randomly is removed, because it comes already with a random sorted array from store
    // this.items = this.items.sort(() => Math.random() - 0.5);

    // take 3 items
    this.items = this.items.splice(0, 3);
    // turn off the loading
    this.isLoading = false;
  }
});
</script>
<style></style>
