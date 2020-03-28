<template>
  <div class="movie__header" :style="styles">
    <span :class="!movieData.backdrop_path ? 'posterCover poster' : 'poster'">
      <img class="movie__header--poster" :src="poster" alt="poster" />
    </span>
    <div class="movie__header--content">
      <h1>
        <span class="text-3xl font-bold">{{ movieData.title }}</span>
        <span v-if="release_year" class="text-2xl tracking-wider text-black"
          >{{ " " }}({{ release_year }})</span
        >
      </h1>
      <div class="extra-info">
        <span>{{ movieData.release_date }}{{ country }}</span>
        <span class="circle circle--1" />
        <span class="genre">{{ genres }}</span>
        <span class="circle circle--2" />
        <span>{{ time }}</span>
      </div>
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
      <div v-if="movieData.tagline" class="tagline">
        {{ movieData.tagline }}
      </div>
      <div>
        <h2 class="font-semibold">Overview</h2>
        <p class="text-base mt-2 text-justify">
          {{
            movieData.overview ||
              "We don't have an overview translated in English"
          }}
        </p>
      </div>
      <h2 v-if="Boolean(crewMember.length)" class="mt-8 mb-2 font-semibold">
        Featured Crew
      </h2>
      <div v-if="Boolean(crewMember.length)" class="crew-container">
        <Fragment v-if="Boolean(crewMember.length)">
          <div v-for="crew in featuredCrew" :key="crew.id" class="crew">
            <h3>{{ crew.name }}</h3>
            <span class="text-black">{{ crew.job }}</span>
          </div>
        </Fragment>
      </div>
    </div>
  </div>
</template>

<script>
import { Fragment } from "vue-fragment";
import ProgressBar from "@/components/ProgressBar.vue";
import CONFIG from "@/utils/config.js";
export default {
  name: "MovieHeader",
  components: { ProgressBar, Fragment },
  props: ["movieData"],
  data() {
    return {
      featuredCrew: []
    };
  },
  watch: {
    "$store.state.crewMember": function() {
      this.featuredCrew = this.getFeaturedCrew();
    }
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
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(72, 187, 119, 0.81) 0%, rgba(68, 85, 101, 0.89) 100%), url(${CONFIG.IMAGE_LG}${this.movieData.backdrop_path})`
      };
    },
    crewMember() {
      return this.$store.state.crewMember;
    },
    genres() {
      return (
        this.movieData.genres.length &&
        this.movieData.genres.reduce((str, genre, index) => {
          if (this.movieData.genres.length === index + 1) {
            return `${str}${genre.name}`;
          }
          return `${str}${genre.name}, `;
        }, "")
      );
    },
    time() {
      const num = this.movieData.runtime;
      if (num) {
        const hours = Math.floor(num / 60);
        const minutes = num % 60;
        return hours && minutes
          ? `${hours}hr ${minutes}min`
          : hours
          ? `${hours}hr`
          : `${minutes}min`;
      }
      return "";
    },
    country() {
      if (this.movieData.production_companies.length) {
        return ` (${this.movieData.production_companies[0].origin_country})`;
      }
      return "";
    }
  },
  methods: {
    getFeaturedCrew() {
      const filter_crew = this.$store.state.crewMember.filter(
        crew =>
          crew.department === "Production" || crew.department === "Directing"
      );
      let fcrew = [];
      if (filter_crew.length > 4) fcrew = this.getRandomArray(filter_crew);
      else fcrew = filter_crew;
      const reduced_featured_crew = fcrew.reduce((acc, crew, index) => {
        const jobs = [crew.job];
        for (let i = index + 1; i < fcrew.length; i++) {
          if (fcrew[i].id === crew.id) {
            jobs.push(fcrew[i].job);
            fcrew.splice(i, 1);
          }
        }
        return acc.concat({ ...crew, jobs });
      }, []);
      return reduced_featured_crew.length ? reduced_featured_crew : [];
    },
    getRandomArrayIndex(length) {
      let result = [];
      if (length) {
        for (let i = 0; i < 4; i++) {
          let stop = false;
          while (!stop) {
            let randomNum = Math.floor(Math.random() * Math.floor(length));
            if (result.findIndex(c => c === randomNum) === -1) {
              result.push(randomNum);
              stop = true;
            }
          }
        }
      }
      return result;
    },
    getRandomArray(filter_crew) {
      const indexArray = this.getRandomArrayIndex(filter_crew.length);
      const result = [];
      indexArray.forEach(index => {
        result.push(filter_crew[index]);
      });
      return result;
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
  .poster {
    margin: 8px auto;
    .movie__header--poster {
      box-shadow: 5px 5px 15px #00000045;
    }
  }
  .posterCover {
    width: 300px;
    height: 450px;
    background-color: #dbdbdb;
    box-shadow: 5px 5px 15px #00000045;
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
    .extra-info {
      .genre {
        @media (max-width: 468px) {
          position: absolute;
          top: 30px;
          width: 100%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .circle {
        display: inline-block;
        height: 6px;
        width: 6px;
        background-color: white;
        border-radius: 50%;
        margin: 0 12px 3px;
        @media (max-width: 468px) {
          &--1 {
            display: none;
          }
        }
      }
      @media (max-width: 468px) {
        position: relative;
        margin-bottom: 50px;
      }
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
        background-color: black;
        img {
          width: 15px;
          height: 15px;
        }
      }
      &--score {
        display: flex;
        align-items: center;
        .progress-circle {
          margin: initial;
          &__overlay {
            background-color: #438769;
          }
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
    .tagline {
      margin-bottom: 14px;
      font-weight: 400;
      font-style: italic;
      opacity: 0.8;
    }
    .crew-container {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      .crew {
        line-height: 17px;
        & > h3 {
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
