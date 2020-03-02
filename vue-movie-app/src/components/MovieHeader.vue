<template>
  <div class="movie__header" :style="styles">
    <span :class="!movieData.backdrop_path ? 'posterCover' : '' ">
      <img class="movie__header--poster" :src="poster" alt="poster" />
    </span>
    <div class="movie__header--content">
      <h1 class="text-left">
        <span class="text-3xl font-bold">{{ movieData.title }}</span>
        <span class="text-2xl tracking-wider text-gray-400">({{ release_year }})</span>
      </h1>
      <div class="movie__action">
        <div class="movie__action--score">
          <ProgressBar :rating="movieData.vote_average * 10"></ProgressBar>
          <span>User Score</span>
        </div>
        <a href="#" title="Bookmark" class="movie__action--link">
          <img src="../assets/bookmark.png" alt="bookmark" />
        </a>
        <a href="#" title="Add favourite" class="movie__action--link">
          <img src="../assets/heart.png" alt="heart" />
        </a>
        <a href="#" title="Rating" class="movie__action--link">
          <img src="../assets/star.png" alt="star" />
        </a>
      </div>
      <div>
        <h2 class="font-semibold">Overview</h2>
        <p class="text-base mt-2 text-justify">{{ movieData.overview }}</p>
      </div>
      <h2 class="mt-8 mb-2 font-semibold">Featured Crew</h2>
      <div class="crew-container">
        <div class="crew">
          <h3>James Gray James Gray James Gray</h3>
          <span>Director, Screenplay</span>
        </div>
        <div class="crew">
          <h3>James Gray</h3>
          <span>Director, Screenplay</span>
        </div>
        <div class="crew">
          <h3>James Gray James Gray</h3>
          <span>Director, Screenplay</span>
        </div>
        <div class="crew">
          <h3>James Gray</h3>
          <span>Director, Screenplay</span>
        </div>
        <div class="crew">
          <h3>James Gray</h3>
          <span>Director, Screenplay</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar.vue";
import CONFIG from "@/utils/config.js";
export default {
  name: "MovieHeader",
  components: { ProgressBar },
  props: ["movieData"],
  date() {
    return {
      movie_images: {}
    };
  },
  computed: {
    release_year() {
      return (
        this.movieData.release_date && this.movieData.release_date.split("-")[0]
      );
    },
    poster() {
      return this.movieData.backdrop_path
        ? `${CONFIG.IMAGE_MD}${this.movieData.poster_path}`
        : require("../assets/image.png");
    },
    styles() {
      return {
        backgroundImage: `radial-gradient(circle at 20% 50%, #48bb77f2 0%, rgba(68, 85, 101, 0.88) 100%), url(${CONFIG.IMAGE_LG}${this.movieData.backdrop_path})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.movie__header {
  position: relative;
  min-height: 550px;
  display: grid;
  grid-template-columns: 400px 1fr;
  padding: 40px 10%;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  .posterCover {
    width: 300px;
    height: 450px;
    box-shadow: 5px 5px 15px #00000045;
    background-color: #dbdbdb;
    .movie__header--poster {
      width: 200px;
      height: 200px;
      margin: 125px auto;
      box-shadow: none;
    }
  }
  &--poster {
    height: 450px;
    justify-self: center;
  }

  &--content {
    color: white;
    @media (max-width: 968px) {
      margin-top: 30px;
      justify-self: center;
      text-align: center;
    }
    .movie__action {
      margin: 30px 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, 107px);
      align-items: center;
      justify-items: left;
      grid-gap: 10px;
      &--link {
        padding: 13px;
        border-radius: 50%;
        border: 3px solid;
        img {
          width: 28px;
          height: 28px;
        }
      }
      &--score {
        display: flex;
        align-items: center;
        .progress-circle {
          margin: initial;
        }
        .progress-circle__overlay {
          background-color: #438769;
        }
        & > span {
          margin-left: 10px;
          width: 37px;
          font-size: 15px;
          line-height: 16px;
          text-align: left;
        }
      }
      @media (max-width: 968px) {
        justify-content: center;
      }
    }
    .crew-container {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      .crew {
        line-height: 17px;
        & > h3 {
          font-weight: 600;
          font-size: 1rem;
        }
        & > span {
          font-size: 0.875rem;
        }
      }
    }
  }
  @media (max-width: 1023px) {
    padding-left: 5%;
    padding-right: 5%;
  }
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
}
</style>
