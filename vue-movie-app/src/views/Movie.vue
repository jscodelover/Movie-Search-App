<template>
  <Fragment>
    <MovieHeader :movieData="movieData"></MovieHeader>
    <MovieContent></MovieContent>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import MovieHeader from "@/components/MovieHeader";
import MovieContent from "@/components/MovieContent";
import REQUEST from "@/utils/https.service";
import CONFIG from "@/utils/config.js";

export default {
  name: "Movie",
  components: { Fragment, MovieHeader, MovieContent },
  data() {
    return {
      movieData: {}
    };
  },
  async created() {
    try {
      const { status, data } = await REQUEST({
        method: "get",
        url: `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${CONFIG.API_KEY}&language=en-US`
      });
      this.movieData = status === 200 ? data : {};
    } catch (e) {
      console.log(e);
    }
  }
};
</script>
