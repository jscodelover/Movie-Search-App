<template>
  <div class="search-container">
    <form @submit.prevent="searchMovie">
      <input v-model="movieName" type="text" placeholder="Search for a movie" />
      <button
        type="submit"
        class="w-28 tracking-wider text-white py-2 px-4 rounded ml-4"
        :class="
					movieName
						? 'bg-green-500 hover:bg-green-700'
						: 'cursor-not-allowed bg-gray-400'
				"
      >Search</button>
    </form>
  </div>
</template>

<script>
import { getMovie } from "@/utils/https.service";
export default {
  name: "Inputbox",
  data() {
    return {
      movieName: ""
    };
  },
  methods: {
    searchMovie() {
      if (this.movieName.trim()) {
        getMovie(this.movieName).then(data =>
          this.$emit("storeMD", data.results)
        );
        this.movieName = "";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.search-container {
  margin: 45px auto;
  text-align: center;
  input {
    border: 2px solid #48bb77;
    border-radius: 4px;
    padding: 6px 12px;
    width: 50%;
  }
}
</style>
