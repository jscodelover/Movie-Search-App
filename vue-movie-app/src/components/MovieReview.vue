<template>
  <div class="movie__reviews">
    <div v-if="!reviews.length">{{content('-')}}</div>
    <div v-for="review in reviews" :key="review.id" class="movie__reviews--post review">
      <span>
        <img src="../assets/frame.png" alt="avatar" />
      </span>
      <div class="review__content">
        <h3 class="font-bold text-xl">{{getTitle(review.author)}}</h3>
        <p class="text-sm mb-6">
          <span>{{writter(review.author)}}</span>
          <span>November 26, 2019</span>
        </p>
        <div class="review__content--text">
          <p class="text-base">
            {{review.content || content('-')}}
            <a
              v-if="review.content"
              :href="review.url"
              class="text-green-600"
            >read the rest</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import REQUEST from "@/utils/https.service";
import CONFIG from "@/utils/config.js";
export default {
  name: "MovieReview",
  data() {
    return {
      reviews: []
    };
  },
  created() {
    this.getReviews();
  },
  computed: {
    getTitle() {
      return name => `A review by ${name}`;
    },
    writter() {
      return name => `Written by ${name} on`;
    },
    content() {
      return name => `We don't have any reviews for ${name}.`;
    }
  },
  methods: {
    async getReviews() {
      try {
        const { status, data } = await REQUEST({
          method: "get",
          url: `https://api.themoviedb.org/3/movie/${this.$route.params.id}/reviews?api_key=${CONFIG.API_KEY}&language=en-US&page=1`
        });
        this.reviews = status === 200 ? data.results : [];
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.movie__reviews {
  &--post {
    margin-bottom: 50px;
    padding: 30px 40px;
    display: flex;
    justify-content: space-between;
    & > span {
      flex: 0 0 10%;
      padding-top: 7px;
      img {
        width: 60px;
      }
    }

    background-color: white;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    .review__content {
      flex: 0 0 80%;
    }
    @media (max-width: 528px) {
      padding: 25px 30px;
      & > span {
        flex: 0 0 13%;
        min-width: 25px;
      }
      .review__content {
        flex: 0 0 77%;
      }
    }
  }
}
</style>