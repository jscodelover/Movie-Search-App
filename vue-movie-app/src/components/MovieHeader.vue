<template>
  <div class="movie__header" :style="styles">
    <span :class="!movieData.backdrop_path ? 'posterCover poster' : 'poster' ">
      <img class="movie__header--poster" :src="poster" alt="poster" />
    </span>
    <div class="movie__header--content">
      <h1>
        <span class="text-3xl font-bold">{{ movieData.title }}</span>
        <span
          v-if="release_year"
          class="text-2xl tracking-wider text-black"
        >{{' '}}({{ release_year }})</span>
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
        <p
          class="text-base mt-2 text-justify"
        >{{ movieData.overview || "We don't have an overview translated in English" }}</p>
      </div>
      <h2 v-if="Boolean(crewMember.length)" class="mt-8 mb-2 font-semibold">Featured Crew</h2>
      <div v-if="Boolean(crewMember.length)" class="crew-container">
        <Fragment v-if="Boolean(crewMember.length)">
          <div v-for="crew in featuredCrew" :key="crew.id" class="crew">
            <h3>{{ crew.name}}</h3>
            <span class="text-black">{{crew.job}}</span>
          </div>
        </Fragment>
      </div>
    </div>
  </div>
</template>

<script>
import { Fragment } from "vue-fragment";
import ProgressBar from "@/components/ProgressBar.vue";
import REQUEST from "@/utils/https.service";
import CONFIG from "@/utils/config.js";
export default {
  name: "MovieHeader",
  components: { ProgressBar, Fragment },
  props: ["movieData"],
  data() {
    return {
      castMember: [],
      crewMember: [],
      featuredCrew: []
    };
  },
  created() {
    this.getCastCrew();
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
    }
  },
  methods: {
    async getCastCrew() {
      try {
        if (this.$route.params.id) {
          const { status, data } = await REQUEST({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/${this.$route.params.id}/credits?api_key=${CONFIG.API_KEY}`
          });
          this.castMember = status === 200 ? data.cast : [];
          this.crewMember = status === 200 ? data.crew : [];
          this.getFeaturedCrew();
        }
      } catch (e) {
        console.log(e);
      }
    },
    getFeaturedCrew() {
      const filter_crew = this.crewMember.filter(
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
      this.featuredCrew = reduced_featured_crew.length
        ? reduced_featured_crew
        : [];
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
