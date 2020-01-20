<template>
  <div class="categories">
    <div class="content">
      <h1>Sorting by Categories</h1>
      <div class="container">
        <Selector :options="categories" v-on:select-item="sortByCategory" />
      </div>
      <div class="container">
        <ul class="listItems" v-if="!isLoading">
          <ListItems
            :path="'/detail/' + item.API"
            v-for="item in items"
            :key="item.id"
            :item="item"
            :point="true"
          />
        </ul>
      </div>
      <Loading v-if="isLoading" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import Selector from "../components/Selector.vue";
import ListItems from "../components/ListItems.vue";
import Loading from "../components/Loading.vue";
import { CategoryData } from "../dataTypes/index";

export default Vue.extend({
  name: "Category",
  data(): CategoryData {
    return {
      data: [],
      items: [],
      categories: [],
      isLoading: true,
      selected: ""
    };
  },
  methods: {
    ...mapActions(["fetchData"]),
    sortByCategory(value: string): void {
      // take a copy of the original data (reset)
      this.items = [...this.data];
      // get all categories depend on the selected category name
      this.items = this.items.filter(ele => ele.Category == value);
    }
  },
  components: {
    ListItems,
    Selector,
    Loading
  },
  computed: {
    ...mapGetters(["fetchedData"])
  },
  async created() {
    await this.fetchData();
    this.data = await this.fetchedData;
    // take copy for categories
    this.categories = [...this.data];
    // get all categories
    this.categories = this.categories.map(ele => ele.Category as string);
    // remove repeted categories
    this.categories = [...new Set(this.categories)];
    // stop loading
    this.isLoading = false;
  }
});
</script>

<style>
.listItems {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.listItems li {
  min-width: 24%;
  width: 24%;
}

@media only screen and (max-width: 900px) {
  .listItems li {
    min-width: 32%;
    min-width: 32%;
  }
}

@media only screen and (max-width: 700px) {
  .listItems li {
    min-width: 45%;
    width: 45%;
  }
}

@media only screen and (max-width: 400px) {
  .listItems li {
    min-width: 90%;
    width: 90%;
  }
}
</style>
