<template>
  <div class="content bg-green-100 text-gray-700 text-xl">
    <Inputbox @storeMD="movieToStore" />
    <div v-if="initial || cardData.length" :class="cardData.length ? 'card-container' : ''">
      <Card
        v-for="(card, index) in cardData"
        :key="card.id"
        :id="index"
        :card="card"
        :flipCard="flipCard === index"
        @clicked="handleClick"
      ></Card>
    </div>
    <div
      v-else
      class="text-center italic font-bold text-sm"
    >There are no movies that matched your query.</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Inputbox from "@/components/Inputbox.vue";
import Card from "@/components/Card.vue";
import REQUEST from "@/utils/https.service";
import CONFIG from "@/utils/config.js";

export default {
  name: "Home",
  components: {
    Inputbox,
    Card
  },
  data() {
    return {
      flipCard: null,
      movieList: [],
      initial: true,
      topMovies: []
    };
  },
  async created() {
    if (!this.$store.state.topMovies.length) {
      try {
        const { status, data } = await REQUEST({
          method: "get",
          url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${CONFIG.API_KEY}&language=en-US&page=1`
        });
        this.$store.commit("updateTopMovies", {
          data: status === 200 ? data.results : []
        });
      } catch (e) {
        console.log(e);
      }
    }
  },
  computed: {
    cardData() {
      return this.initial && !this.movieList.length
        ? this.$store.state.topMovies
        : this.movieList;
    }
  },
  methods: {
    handleClick(id) {
      this.flipCard = id;
    },
    movieToStore(movieList) {
      this.initial && (this.initial = false);
      this.movieList = movieList;
    }
  }
};
</script>

<style lang="scss" scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 40px;
  grid-template-rows: 450px;
  justify-items: center;
  padding: 60px 5% 0px;
}
</style>
