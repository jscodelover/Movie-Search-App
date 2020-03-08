<template>
  <div class="movie__reviews">
    <div class="movie__reviews--post review">
      <span>
        <img src="/images/frame.png" alt="avatar" />
      </span>
      <div class="review__content">
        <h3 class="font-bold text-xl">A review by msbreviews</h3>
        <p class="text-sm mb-6">
          <span>Written by msbreviews on</span>
          <span>November 26, 2019</span>
        </p>
        <div class="review__content--text">
          <p class="text-base">
            The kingdom of Arendelle needs to be evacuated when the forces of nature threaten to destroy it. Elsa, Anna, Olaf and Kristoff set off to find some answers. But Elsa has been distracted. She has been hearing an unfamiliar voice calling out to her in a strange tune. Led by her, the group follows the melody to find themselves at the edge of an Enchanted Forest with untold mysteries and dangers...
            <a
              href="#"
              class="text-green-600"
            >read the rest</a>
          </p>
        </div>
      </div>
    </div>
    <div class="movie__reviews--post review">
      <span>
        <img src="/images/frame.png" alt="avatar" />
      </span>
      <div class="review__content">
        <h3 class="font-bold text-xl">A review by msbreviews</h3>
        <p class="text-sm mb-6">
          <span>Written by msbreviews on</span>
          <span>November 26, 2019</span>
        </p>
        <div class="review__content--text">
          <p class="text-base">
            The kingdom of Arendelle needs to be evacuated when the forces of nature threaten to destroy it. Elsa, Anna, Olaf and Kristoff set off to find some answers. But Elsa has been distracted. She has been hearing an unfamiliar voice calling out to her in a strange tune. Led by her, the group follows the melody to find themselves at the edge of an Enchanted Forest with untold mysteries and dangers...
            <a
              href="#"
              class="text-green-600"
            >read the rest</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieReview"
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