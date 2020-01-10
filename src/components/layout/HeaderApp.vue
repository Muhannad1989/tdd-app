<template>
  <div class="header">
    <nav>
      <ul ref="nav">
        <figure class="toggle-button" @click="toggleNav">
          <span>|||</span>
        </figure>
        <div id="con">
          <router-link tag="li" to="/">Home</router-link>
          <router-link tag="li" to="/random">Random</router-link>
          <li class="dropdown" tag="li" to="/">
            <span>Categories</span>
            <ul class="dropdown-content">
              <router-link
                v-for="category in categorys"
                v-bind:key="category.category"
                tag="li"
                :to="{ path: '/category/' + category }"
                >{{ category }}</router-link
              >
              <!-- <router-link tag="li" to="/random">Animals</router-link>
              <router-link tag="li" to="/random">Cars</router-link> -->
            </ul>
          </li>
        </div>
      </ul>
    </nav>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HeaderApp",
  data() {
    return {
      display: true,
      isLoading: true,
      categorys: [],
      count: 0
    };
  },

  methods: {
    toggleNav() {
      let selected = document.getElementById("con");
      if (this.display) {
        selected.style.display = "none";
      } else {
        selected.style.display = "inline-block";
      }
      this.display = !this.display;
    }
  },
  async created() {
    let res = await axios.get("https://api.publicapis.org/entries");
    this.categorys = await res.data.entries;
    this.categorys = this.categorys.map(ele => ele.Category);
    this.categorys = [...new Set(this.categorys)];
    this.isLoading = false;
  }
};
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: red;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000;
}

.toggle-button {
  /* display: none; */
  /* transform: rotate(90deg); */
  transform: rotate(0deg);
  padding: 0;
  width: 40px;
  height: 40px;
  text-align: center;
  padding-top: 5px;
  font-size: 25px;
  font-weight: bold;
  border: "none";
  margin: 0;
}
.toggle-button span:hover {
  cursor: pointer;
}
.active {
  background-color: #3292ff;
}
#con {
  display: inline-flex;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown span {
  color: inherit;
}
.dropdown-content {
  display: none;
  position: absolute;
  background: rgba(0, 0, 20, 0.2);
  min-width: 130px;
  z-index: 1;
  top: 40px;
  left: 0px;
  height: 100px;
  overflow: auto;
}
.dropdown-content > li {
  margin: 0;
  width: 100%;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown:hover li:nth-child(3):hover {
  background: #3292ff;
}
.dropdown .dropdown-content p {
  color: white;
  text-align: unset;
  padding: 10px;
  border-bottom: 1px solid burlywood;
}

@media only screen and (max-width: 400px) {
  .toggle-button {
    display: block;
  }
  .dropdown-content {
    min-width: 100%;
  }
  ul {
    background-color: rgba(0, 0, 20, 0.8);
  }
  #con {
    display: inline-block;
  }
}
</style>
