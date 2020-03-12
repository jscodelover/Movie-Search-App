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
  created() {
    this.getMovieDetail();
    this.getCastCrew();
  },
  methods: {
    async getMovieDetail() {
      try {
        const { status, data } = await REQUEST({
          method: "get",
          url: `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${CONFIG.API_KEY}&language=en-US`
        });
        this.movieData = status === 200 ? data : {};
      } catch (e) {
        console.log(e);
      }
    },
    async getCastCrew() {
      try {
        if (this.$route.params.id) {
          const { status, data } = await REQUEST({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/${this.$route.params.id}/credits?api_key=${CONFIG.API_KEY}`
          });
          this.$store.commit("updateCastMember", {
            data: status === 200 ? data.cast : []
          });
          this.$store.commit("updateCrewMember", {
            data: status === 200 ? data.crew : []
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
