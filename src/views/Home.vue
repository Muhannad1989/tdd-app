<template>
  <div class="home">
    <div class="content">
      <h1>Get 10 random items</h1>
      <div class="container">
        <Selector :options="options" v-on:select-item="sorting" />
      </div>
      <div class="container">
        <ul class="listItems" v-if="!isLoading">
          <ListItems
            v-for="item in items"
            :path="'/detail/' + item.API"
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
import ListItems from "../components/ListItems.vue";
import Selector from "../components/Selector.vue";
import Loading from "../components/Loading.vue";
import { HomeData } from "../dataTypes/index";

export default Vue.extend({
  name: "Home",
  data(): HomeData {
    return {
      data: [],
      items: [],
      isLoading: true,
      options: ["a to z", "z to a", "default"]
    };
  },
  components: {
    ListItems,
    Selector,
    Loading
  },
  computed: {
    ...mapGetters(["fetchedData"])
  },

  methods: {
    ...mapActions(["fetchData"]),
    sorting(value: string): void {
      if (value == "default") {
        // take a copy from the orginal data (reset)
        this.items = [...this.data];
      } else if (value == "a to z") {
        // take a copy from the orginal data (reset)
        this.items = [...this.data];
        // sorting data alphabetically from A to Z
        this.items.sort((a, b) => {
          if ((a.API as string) > (b.API as string)) {
            return 1;
          } else {
            return -1;
          }
        });
      } else if (value == "z to a") {
        // take a copy from the orginal data (reset)
        this.items = [...this.data];
        // sorting data alphabetically from Z to A
        this.items.sort((a, b) => {
          if ((a.API as string) < (b.API as string)) {
            return 1;
          } else {
            return -1;
          }
        });
      }
    }
  },

  async created() {
    await this.fetchData();
    // take 10 items from generated array
    this.data = await this.fetchedData.slice(0, 10);
    // take copy of data
    this.items = [...this.data];
    // stop loading
    this.isLoading = false;
  }
});
</script>

<style></style>
