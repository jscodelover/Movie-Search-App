<template>
  <div class="movie__content">
    <div>
      <div class="tabs">
        <button :class="tab === 1 ? 'b-b' : null" @click="handleTab(1)">
          Full Cast&Crew
        </button>
        <button :class="tab === 2 ? 'b-b' : null" @click="handleTab(2)">
          Reviews
        </button>
        <button :class="tab === 3 ? 'b-b' : null" @click="handleTab(3)">
          Videos
        </button>
      </div>
      <div class="tab__content">
        <MovieCast v-if="tab === 1"></MovieCast>
        <MovieReview v-else-if="tab === 2"></MovieReview>
        <MovieVideo v-else>3</MovieVideo>
      </div>
    </div>
    <MovieSidebar></MovieSidebar>
  </div>
</template>

<script>
import MovieSidebar from "@/components/MovieSidebar.vue";
import MovieCast from "@/components/MovieCast.vue";
import MovieReview from "@/components/MovieReview.vue";
import MovieVideo from "@/components/MovieVideo.vue";
export default {
  name: "MovieContent",
  components: { MovieSidebar, MovieCast, MovieReview, MovieVideo },
  data() {
    return {
      tab: 1
    };
  },
  methods: {
    handleTab(id) {
      this.tab = id;
    }
  }
};
</script>

<style lang="scss" scoped>
.b-b {
  border-bottom: 4px solid #4b8870;
}
.movie__content {
  display: grid;
  grid-template-columns: 75% 25%;
  &--side {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media (max-width: 896px) {
    grid-template-columns: none;
  }
}
.tab__content {
  padding: 40px;
}
.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 70px;
  box-shadow: 3px 0px 7px 0px #0000001a;
  padding: 0 40px;
  @media (max-width: 896px) {
    padding: 0 20px;
  }
  @media (max-width: 586px) {
    justify-content: space-between;
  }
}
</style>
