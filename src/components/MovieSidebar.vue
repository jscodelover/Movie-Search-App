<template>
  <div class="movie__content--side movie__sidebar">
    <div class="movie__sidebar--items">
      <h3>Status</h3>
      <span>Released</span>
    </div>
    <div class="movie__sidebar--items">
      <h3>Original Language</h3>
      <span>English</span>
    </div>
    <div class="movie__sidebar--items">
      <h3>Run time</h3>
      <span>2h 20m</span>
    </div>
    <div class="movie__sidebar--items">
      <h3>Budget</h3>
      <span>2,89,343</span>
    </div>
    <div class="movie__sidebar--items">
      <h3>Revenue</h3>
      <span>2,89,343</span>
    </div>
    <div class="movie__sidebar--items">
      <h3>Production Campany</h3>
      <span>xyz</span>
    </div>
    <div class="movie__sidebar--items">
      <h3>Genres</h3>
      <div class="genres">
        <span>Action</span>
        <span>Adventure</span>
        <span>Science Fiction</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieSidebar"
};
</script>

<style lang="scss" scoped>
.movie__sidebar {
  padding-left: 40px;
  padding-right: 40px;
  background-color: #ccf7da;
  font-size: 17px;
  &--items {
    line-height: 20px;
    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
    & > h3 {
      font-weight: 600;
    }
    & > span {
      font-size: 15px;
    }
    .genres {
      display: flex;
      flex-wrap: wrap;
      & > span {
        margin: 3px;
        padding: 3px 12px 5px;
        font-size: 15px;
        line-height: 17px;
        background-color: #4c8870;
        color: white;
        border-radius: 5px;
      }
      @media (max-width: 896px) {
        justify-content: center;
      }
    }
  }
  @media (max-width: 896px) {
    grid-row: 1;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-items: center;
    &--items {
      text-align: center;
    }
  }
}
</style>