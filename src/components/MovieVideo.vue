<template>
  <Fragment>
    <div v-if="!videos.length">We don't have any videos</div>
    <div class="video-player" v-else v-for="video in formattedVideos" :key="video.id">
      <vue-plyr :emit="['timeupdate','exitfullscreen']">
        <div data-plyr-provider="youtube" :data-plyr-embed-id="video.key" />
      </vue-plyr>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import REQUEST from "@/utils/https.service";
import CONFIG from "@/utils/config.js";
export default {
  name: "MovieVideo",
  components: { Fragment },
  data() {
    return {
      videos: []
    };
  },
  created() {
    this.getVideos();
  },
  computed: {
    formattedVideos() {
      return this.videos.length
        ? this.videos.filter(video => video.site === "YouTube")
        : [];
    }
  },
  methods: {
    async getVideos() {
      try {
        const { status, data } = await REQUEST({
          method: "get",
          url: `https://api.themoviedb.org/3/movie/${this.$route.params.id}/videos?api_key=${CONFIG.API_KEY}&language=en-US`
        });
        this.videos = status === 200 ? data.results : [];
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style lang="scss">
.video-player {
  max-width: 470px;
  &:not(:first-child) {
    margin-top: 20px;
  }
}
.ytp-large-play-button {
  display: none;
}
@media (min-width: 700px) {
  .plyr,
  .plyr__video-embed iframe,
  .plyr__poster {
    height: 350px !important;
  }
  .plyr__poster {
    width: auto !important;
    background-position: initial !important;
  }
  .plyr:fullscreen {
    .plyr__video-embed iframe,
    .plyr__poster {
      height: 100% !important;
    }
  }
}
</style>
