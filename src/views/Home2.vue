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
            v-for="item in sorted"
            :path="'/detail/' + item.API"
            :key="item.id"
            :item="item"
          />
        </ul>
      </div>
      <Loading v-if="isLoading" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import ListItems from "../components/ListItems.vue";
import Selector from "../components/Selector.vue";
import Loading from "../components/Loading.vue";

export default {
  name: "Home2",
  data() {
    return {
      options: ["a to z", "z to a", "default"],
      data: [],
      sorted: [],
      isLoading: true
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
    sorting(value) {
      if (value == "default") {
        // take a copy from the orginal data (reset)
        this.sorted = [...this.data];
      } else if (value == "a to z") {
        // take a copy from the orginal data (reset)
        this.sorted = [...this.data];
        // sorting data alphabetically from A to Z
        this.sorted.sort((a, b) => {
          if (a.API > b.API) {
            return 1;
          } else {
            return -1;
          }
        });
      } else if (value == "z to a") {
        // take a copy from the orginal data (reset)
        this.sorted = [...this.data];
        // sorting data alphabetically from Z to A
        this.sorted.sort((a, b) => {
          if (a.API < b.API) {
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
    this.data = await this.fetchedData.slice(0, 10);
    this.sorted = [...this.data];
    this.isLoading = false;
  }
};
</script>

<style scoped>
/*  */
</style>
