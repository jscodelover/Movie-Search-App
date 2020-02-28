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
import REQUEST from "@/utils/https.service";
import CONFIG from "@/utils/config.js";

export default {
  name: "Inputbox",
  data() {
    return {
      movieName: ""
    };
  },
  methods: {
    async searchMovie() {
      try {
        if (this.movieName.trim()) {
          const { status, data } = await REQUEST({
            method: "get",
            url: `https://api.themoviedb.org/3/search/movie?api_key=${CONFIG.API_KEY}&language=en-US&query=${this.movieName}&page=1&include_adult=false`
          });
          this.$emit("storeMD", status === 200 ? data.results : []);
          this.movieName = "";
        }
      } catch (e) {
        console.log(e);
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
